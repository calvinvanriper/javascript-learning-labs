const taskForm = document.getElementById('task-form');
const confirmCloseDialog = document.getElementById('confirm-close-dialog');
const openTaskFormBtn = document.getElementById('open-task-form-btn');
const closeTaskFormBtn = document.getElementById('close-task-form-btn');
const addOrUpdateTaskBtn = document.getElementById('add-or-update-task-btn');
const cancelBtn = document.getElementById('cancel-btn');
const discardBtn = document.getElementById('discard-btn');
const tasksContainer = document.getElementById('tasks-container');
const titleInput = document.getElementById('title-input');
const dateInput = document.getElementById('date-input');
const descriptionInput = document.getElementById('description-input');

const taskData = JSON.parse(localStorage.getItem('data')) || [];
let currentTask = {};

/**
 * Creates a normalized string for use in generated task IDs.
 *
 * @param {string} value - Raw title input
 * @returns {string} Sanitized string with special characters removed
 */
const removeSpecialChars = (value) => {
  return value.trim().replace(/[^A-Za-z0-9\-\s]/g, '');
};

/**
 * Adds a new task or updates an existing task, then persists the data.
 *
 * @returns {void}
 */
const addOrUpdateTask = () => {
  if (!titleInput.value.trim()) {
    alert('Please provide a title');
    return;
  }

  const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);

  const taskObj = {
    id:
      dataArrIndex === -1
        ? `${removeSpecialChars(titleInput.value).toLowerCase().split(' ').join('-')}-${Date.now()}`
        : currentTask.id,
    title: titleInput.value,
    date: dateInput.value,
    description: descriptionInput.value,
  };

  if (dataArrIndex === -1) {
    taskData.unshift(taskObj);
  } else {
    taskData[dataArrIndex] = taskObj;
  }

  localStorage.setItem('data', JSON.stringify(taskData));
  updateTaskContainer();
  reset();
};

/**
 * Renders the current task list to the DOM.
 *
 * @returns {void}
 */
const updateTaskContainer = () => {
  const taskMarkup = taskData
    .map(
      ({ id, title, date, description }) => `
        <li class="task" id="${id}">
          <p><strong>Title:</strong> ${title}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Description:</strong> ${description}</p>
          <button type="button" class="btn edit-btn">Edit</button>
          <button type="button" class="btn delete-btn">Delete</button>
        </li>
      `
    )
    .join('');

  tasksContainer.innerHTML = taskMarkup;
};

/**
 * Deletes a task using the clicked task element as the source of truth.
 *
 * @param {HTMLElement} taskElement - Rendered task element to remove
 * @returns {void}
 */
const deleteTask = (taskElement) => {
  const dataArrIndex = taskData.findIndex((item) => item.id === taskElement.id);

  taskElement.remove();
  taskData.splice(dataArrIndex, 1);
  localStorage.setItem('data', JSON.stringify(taskData));
};

/**
 * Loads an existing task into the form for editing.
 *
 * @param {HTMLElement} taskElement - Rendered task element being edited
 * @returns {void}
 */
const editTask = (taskElement) => {
  const dataArrIndex = taskData.findIndex((item) => item.id === taskElement.id);

  currentTask = taskData[dataArrIndex];

  titleInput.value = currentTask.title;
  dateInput.value = currentTask.date;
  descriptionInput.value = currentTask.description;

  addOrUpdateTaskBtn.innerText = 'Update Task';
  taskForm.classList.remove('hidden');
};

/**
 * Resets the form state and closes the task form.
 *
 * @returns {void}
 */
const reset = () => {
  addOrUpdateTaskBtn.innerText = 'Add Task';
  titleInput.value = '';
  dateInput.value = '';
  descriptionInput.value = '';
  taskForm.classList.add('hidden');
  currentTask = {};
};

if (taskData.length) {
  updateTaskContainer();
}

openTaskFormBtn.addEventListener('click', () => {
  taskForm.classList.remove('hidden');
});

closeTaskFormBtn.addEventListener('click', () => {
  const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value;

  const formInputValuesUpdated =
    titleInput.value !== currentTask.title ||
    dateInput.value !== currentTask.date ||
    descriptionInput.value !== currentTask.description;

  if (formInputsContainValues && formInputValuesUpdated) {
    confirmCloseDialog.showModal();
  } else {
    reset();
  }
});

cancelBtn.addEventListener('click', () => {
  confirmCloseDialog.close();
});

discardBtn.addEventListener('click', () => {
  confirmCloseDialog.close();
  reset();
});

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addOrUpdateTask();
});

tasksContainer.addEventListener('click', (event) => {
  const target = event.target;
  const taskElement = target.closest('.task');

  if (!taskElement) return;

  if (target.classList.contains('edit-btn')) {
    editTask(taskElement);
  }

  if (target.classList.contains('delete-btn')) {
    deleteTask(taskElement);
  }
});
