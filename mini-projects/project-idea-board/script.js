const newIdeaForm = document.getElementById('new-idea-form');
const submitIdeaBtn = document.getElementById('submit-btn');
const titleInput = document.getElementById('title-input');
const statusSelect = document.getElementById('idea-status');
const descriptionInput = document.getElementById('idea-description');
const projectIdeasContainer = document.getElementById('project-ideas-container');
const newIdeaBtn = document.getElementById('new-idea-btn');
const closeIdeaFormBtn = document.getElementById('close-idea-form-btn');
const cancelIdeaBtn = document.getElementById('cancel-btn');
const clearBtn = document.getElementById('clear-btn');
const ideaCount = document.getElementById('idea-count');
const ideaFormTitle = document.getElementById('idea-form-title');
submitIdeaBtn.disabled = true;
let editingIdeaId = null;
const STORAGE_KEY = 'project-idea-board';

const projectStatus = {
  PENDING: { description: 'Pending Execution' },
  SUCCESS: { description: 'Executed Successfully' },
  FAILURE: { description: 'Execution Failed' },
};

/**
 * Manages project idea state.
 */
class ProjectIdea {
  /**
   * Creates a new project idea instance.
   *
   * @param {string} title - The project idea title.
   * @param {string} description - The project idea description.
   * @param {{ description: string }} [status=projectStatus.PENDING] - The current project status.
   */
  constructor(title, description, status = projectStatus.PENDING) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.status = status;
    this.isExpanded = false;
  }

  /**
   * Updates the status of a given project idea.
   *
   * @param {{ description: string }} newStatus - The new project status object.
   * @returns {void}
   */
  updateProjectStatus(newStatus) {
    this.status = newStatus;
  }
}

/**
 * Manages the project idea board state.
 */
class ProjectIdeaBoard {
  /**
   * Creates a new project idea board.
   *
   * @param {string} title - The board title.
   */
  constructor(title) {
    this.title = title;
    this.ideas = [];
  }

  /**
   * Adds a project idea to the board.
   *
   * @param {ProjectIdea} projectIdea - The project idea to add.
   * @returns {void}
   */
  pin(projectIdea) {
    this.ideas.push(projectIdea);
  }

  /**
   * Removes a project idea from the board.
   *
   * @param {ProjectIdea} projectIdea - The project idea to remove.
   * @returns {void}
   */
  unpin(projectIdea) {
    this.ideas = this.ideas.filter((idea) => idea.id !== projectIdea.id);
  }

  /**
   * Returns the total number of project ideas currently on the board.
   *
   * @returns {number} The total number of project ideas.
   */
  count() {
    return this.ideas.length;
  }
}

const ideaBoard = new ProjectIdeaBoard('Project Idea Board');

/**
 * Saves the project idea board to localStorage.
 *
 * @returns {void}
 */
function saveIdeasToStorage() {
  if (!ideaBoard || !Array.isArray(ideaBoard.ideas)) {
    return;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(ideaBoard.ideas));
}

/**
 * Retrieves the project idea board data from localStorage.
 *
 * @returns {void}
 */
function loadIdeasFromStorage() {
  const storedIdeas = localStorage.getItem(STORAGE_KEY);

  if (!storedIdeas || storedIdeas === 'undefined') {
    return;
  }

  try {
    const parsedIdeas = JSON.parse(storedIdeas);

    ideaBoard.ideas = parsedIdeas.map((idea) => {
      const restoredIdea = new ProjectIdea(idea.title, idea.description, idea.status);

      restoredIdea.id = idea.id;
      restoredIdea.isExpanded = idea.isExpanded || false;

      return restoredIdea;
    });
  } catch (error) {
    console.error('Failed to load project ideas from storage:', error);
  }
}

/**
 * Updates the HTML text content to reflect the number of ideas on the board.
 *
 * @returns {void}
 */
function updateBoardSummary() {
  ideaCount.textContent = ideaBoard.count();
}

/**
 * Handles form submission and updates the project board UI.
 *
 * @param {Event} event - The submit event from the project idea form.
 * @returns {void}
 */
function handleNewIdeaSubmit(event) {
  event.preventDefault();

  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();
  const selectedStatus = projectStatus[statusSelect.value] || projectStatus.PENDING;

  if (editingIdeaId === null) {
    const newIdea = new ProjectIdea(title, description, selectedStatus);
    ideaBoard.pin(newIdea);
  } else {
    const ideaToEdit = ideaBoard.ideas.find((idea) => idea.id === editingIdeaId);

    if (!ideaToEdit) {
      return;
    }

    ideaToEdit.title = title;
    ideaToEdit.description = description;
    ideaToEdit.updateProjectStatus(selectedStatus);
  }

  renderProjectIdeas();
  saveIdeasToStorage();
  closeIdeaForm();
}

/**
 * Returns the status key that matches a project status object.
 *
 * @param {{ description: string }} status - The project status object.
 * @returns {string} The matching status key.
 */
function getStatusKey(status) {
  return (
    Object.keys(projectStatus).find(
      (key) => projectStatus[key].description === status.description
    ) || 'PENDING'
  );
}

/**
 * Renders the full set of project idea cards based on current board state.
 *
 * @returns {void}
 */
function renderProjectIdeas() {
  updateBoardSummary();
  clearBtn.disabled = ideaBoard.count() === 0;

  if (!ideaBoard.count()) {
    projectIdeasContainer.innerHTML = `
        <p class="empty-state">No project ideas yet. Add one to get started.</p>
      `;
    clearBtn.disabled = true;
    return;
  }

  projectIdeasContainer.innerHTML = ideaBoard.ideas
    .map((idea) => {
      return `
        <div id="project-${idea.id}" class="project project--${getStatusKey(idea.status)}">
          <div class="project-info">
            <span class="project-title">${idea.title}</span>
            <span class="project-status">${idea.status.description}</span>
            <button
              class="expand-hide-btn btn"
              type="button"
              data-id="${idea.id}"
              aria-expanded="${idea.isExpanded}"
              aria-controls="project-details-${idea.id}"
            >
              <span class="expand-hide-text">
                ${idea.isExpanded ? 'Hide' : 'Expand'}
              </span> Project Details
            </button>
          </div>

          <div id="project-details-${idea.id}" class="project-details ${idea.isExpanded ? '' : 'hidden'}">
            <label class="project-status-label" for="status-${idea.id}">
              Update Status
            </label>
            <select
              id="status-${idea.id}"
              class="status-select"
              data-id="${idea.id}"
            >
              <option value="PENDING" ${idea.status === projectStatus.PENDING ? 'selected' : ''}>
                Pending Execution
              </option>
              <option value="SUCCESS" ${idea.status === projectStatus.SUCCESS ? 'selected' : ''}>
                Executed Successfully
              </option>
              <option value="FAILURE" ${idea.status === projectStatus.FAILURE ? 'selected' : ''}>
                Execution Failed
              </option>
            </select>
            <p class="project-description">${idea.description}</p>

            <div class="project-controls">
              <button type="button" class="edit-btn btn" data-id="${idea.id}">Edit Project</button>

              <button type="button" class="delete-btn btn" data-id="${idea.id}">Delete Project</button>
            </div>
          </div>
        </div>
      `;
    })
    .join('');
}

/**
 * Toggles the expanded state of a single project idea card.
 *
 * @param {{ currentTarget: HTMLElement }} event - The synthetic or delegated event object.
 * @returns {void}
 */
function handleExpandToggle(event) {
  const button = event.currentTarget;
  const id = button.dataset.id;

  const idea = ideaBoard.ideas.find((idea) => idea.id === id);

  if (!idea) {
    return;
  }

  idea.isExpanded = !idea.isExpanded;

  renderProjectIdeas();
}

/**
 * Handles delegated click events for project card actions.
 *
 * @param {MouseEvent} event - The delegated click event from the project board container.
 * @returns {void}
 */
function handleProjectBoardClick(event) {
  const expandButton = event.target.closest('.expand-hide-btn');

  if (expandButton) {
    handleExpandToggle({ currentTarget: expandButton });
  }

  const deleteButton = event.target.closest('.delete-btn');

  if (deleteButton) {
    handleDeleteProject(deleteButton);
  }

  const editButton = event.target.closest('.edit-btn');

  if (editButton) {
    const idea = ideaBoard.ideas.find((idea) => idea.id === editButton.dataset.id);

    if (!idea) {
      return;
    }

    openEditForm(idea);
  }
}

/**
 * Deletes a single project idea from the board and updates storage and UI.
 *
 * @param {HTMLButtonElement} button - The delete button associated with the project idea.
 * @returns {void}
 */
function handleDeleteProject(button) {
  const id = button.dataset.id;

  const projectToRemove = ideaBoard.ideas.find((idea) => idea.id === id);

  if (!projectToRemove) {
    return;
  }

  ideaBoard.unpin(projectToRemove);
  saveIdeasToStorage();
  renderProjectIdeas();
}

/**
 * Handles delegated change events from controls inside the project board.
 *
 * @param {Event} event - The delegated change event from the project board container.
 * @returns {void}
 */
function handleProjectBoardChange(event) {
  const statusSelect = event.target.closest('.status-select');

  if (statusSelect) {
    handleStatusChange(statusSelect);
  }
}

/**
 * Updates the status of a project idea based on a selected status option.
 *
 * @param {HTMLSelectElement} select - The status select element for a project idea.
 * @returns {void}
 */
function handleStatusChange(select) {
  const id = select.dataset.id;
  const newStatus = projectStatus[select.value];

  const idea = ideaBoard.ideas.find((idea) => idea.id === id);

  if (!idea || !newStatus) {
    return;
  }

  idea.updateProjectStatus(newStatus);
  saveIdeasToStorage();
  renderProjectIdeas();
}

/**
 * Opens the form in add mode and resets its fields and labels.
 *
 * @returns {void}
 */
function openIdeaForm() {
  editingIdeaId = null;
  newIdeaForm.classList.remove('hidden');
  newIdeaForm.reset();
  submitIdeaBtn.textContent = 'Add Idea';
  submitIdeaBtn.disabled = true;
  ideaFormTitle.textContent = 'New Project Idea';
  titleInput.focus();
}

/**
 * Closes the form, resets its state, and exits edit mode.
 *
 * @returns {void}
 */
function closeIdeaForm() {
  newIdeaForm.classList.add('hidden');
  newIdeaForm.reset();
  submitIdeaBtn.textContent = 'Add Idea';
  submitIdeaBtn.disabled = true;
  ideaFormTitle.textContent = 'New Project Idea';
  editingIdeaId = null;
}

/**
 * Opens the form in edit mode and pre-fills it with an existing project's data.
 *
 * @param {ProjectIdea} idea - The project idea being edited.
 * @returns {void}
 */
function openEditForm(idea) {
  editingIdeaId = idea.id;
  idea.isExpanded = false;
  renderProjectIdeas();

  newIdeaForm.classList.remove('hidden');
  titleInput.value = idea.title;
  statusSelect.value = getStatusKey(idea.status);
  descriptionInput.value = idea.description;

  submitIdeaBtn.textContent = 'Save Changes';
  submitIdeaBtn.disabled = !newIdeaForm.checkValidity();
  ideaFormTitle.textContent = 'Edit Project Idea';
  titleInput.focus();
}

/**
 * Clears all project ideas from the board after user confirmation.
 *
 * @returns {void}
 */
function handleClearBoard() {
  if (!ideaBoard.count()) {
    return;
  }

  const confirmed = confirm(
    'Clear all ideas? Note: This action is permanent and can not be undone!'
  );
  if (!confirmed) {
    return;
  }

  ideaBoard.ideas = [];
  saveIdeasToStorage();
  closeIdeaForm();
  renderProjectIdeas();
}

/**
 * Handles global keyboard shortcuts for form close, board clear, and opening a new idea form.
 *
 * @param {KeyboardEvent} event - The keyboard event fired on the document.
 * @returns {void}
 */
function handleKeyboardShortcuts(event) {
  const isEscape = event.key === 'Escape';
  const isClearShortcut = event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'd';
  const isNewIdea = event.shiftKey && event.key === 'Enter';

  if (isEscape && !newIdeaForm.classList.contains('hidden')) {
    event.preventDefault();
    closeIdeaForm();
    return;
  }

  if (isClearShortcut) {
    event.preventDefault();
    handleClearBoard();
    return;
  }

  if (isNewIdea && newIdeaForm.classList.contains('hidden')) {
    event.preventDefault();
    openIdeaForm();
    return;
  }
}

document.addEventListener('keydown', handleKeyboardShortcuts);

newIdeaForm.addEventListener('submit', handleNewIdeaSubmit);
newIdeaForm.addEventListener('input', () => {
  submitIdeaBtn.disabled = !newIdeaForm.checkValidity();
});

projectIdeasContainer.addEventListener('click', handleProjectBoardClick);
projectIdeasContainer.addEventListener('change', handleProjectBoardChange);

newIdeaBtn.addEventListener('click', openIdeaForm);
closeIdeaFormBtn.addEventListener('click', closeIdeaForm);
cancelIdeaBtn.addEventListener('click', closeIdeaForm);
clearBtn.addEventListener('click', handleClearBoard);

loadIdeasFromStorage();
renderProjectIdeas();
