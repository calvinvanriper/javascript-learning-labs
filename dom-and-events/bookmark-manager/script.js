// Core section DOM elements
const mainSection = document.getElementById('main-section');
const formSection = document.getElementById('form-section');
const bookmarkListSection = document.getElementById('bookmark-list-section');

// Form and button DOM elements
const bookmarkForm = document.getElementById('bookmark-form');
const openBookmarkFormBtn = document.getElementById('open-bookmark-form-btn');
const closeFormButton = document.getElementById('close-form-button');
const viewCategoryButton = document.getElementById('view-category-button');
const closeListButton = document.getElementById('close-list-button');
const deleteBookmarkButton = document.getElementById('delete-bookmark-button');

// Inputs / UI DOM elements
const nameEl = document.getElementById('name');
const urlEl = document.getElementById('url');
const categoryDropdown = document.getElementById('category-dropdown');
const categoryNames = document.querySelectorAll('.category-name');
const categoryList = document.getElementById('category-list');

/**
 * Reads and validates stored bookmarks from localStorage.
 *
 * @returns {Array<{name: string, url: string, category: string}>} Valid bookmark array
 */
function getBookmarks() {
  const raw = localStorage.getItem('bookmarks');

  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw);

    if (
      Array.isArray(parsed) &&
      parsed.every(
        (bookmark) =>
          typeof bookmark === 'object' &&
          bookmark !== null &&
          'name' in bookmark &&
          'url' in bookmark &&
          'category' in bookmark
      )
    ) {
      return parsed;
    }

    return [];
  } catch {
    return [];
  }
}

/**
 * Shows the bookmark form and hides the main menu.
 *
 * @returns {void}
 */
function showForm() {
  mainSection.classList.add('hidden');
  formSection.classList.remove('hidden');
}

/**
 * Hides the bookmark form and shows the main menu.
 *
 * @returns {void}
 */
function hideForm() {
  formSection.classList.add('hidden');
  mainSection.classList.remove('hidden');
}

/**
 * Shows the bookmark list view and hides the main menu.
 *
 * @returns {void}
 */
function showCategoryList() {
  mainSection.classList.add('hidden');
  bookmarkListSection.classList.remove('hidden');
}

/**
 * Hides the bookmark list view and shows the main menu.
 *
 * @returns {void}
 */
function hideCategoryList() {
  bookmarkListSection.classList.add('hidden');
  mainSection.classList.remove('hidden');
}

/**
 * Clears the bookmark form inputs.
 *
 * @returns {void}
 */
function clearInput() {
  nameEl.value = '';
  urlEl.value = '';
}

/**
 * Updates all visible category headings to match the selected category.
 *
 * @param {string} category - Category name to display
 * @returns {void}
 */
function updateCategoryName(category) {
  categoryNames.forEach((name) => {
    name.innerText = category;
  });
}

/**
 * Renders bookmarks for the selected category.
 *
 * @param {string} category - Category to display
 * @returns {void}
 */
function renderBookmarksByCategory(category) {
  const bookmarks = getBookmarks();
  const filteredBookmarks = filterBookmarks(bookmarks, category);

  if (filteredBookmarks.length === 0) {
    categoryList.innerHTML = noBookmarks();
  } else {
    categoryList.innerHTML = yesBookmarks(filteredBookmarks);
  }
}

/**
 * Deletes a bookmark by name and category, then updates localStorage.
 *
 * @param {string} name - Bookmark name
 * @param {string} category - Bookmark category
 * @returns {void}
 */
function deleteBookmark(name, category) {
  const bookmarks = getBookmarks();

  const updatedBookmarks = bookmarks.filter(
    (bookmark) => !(bookmark.name === name && bookmark.category === category)
  );

  localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
}

/**
 * Adds a bookmark to storage.
 *
 * @param {{name: string, url: string, category: string}} bookmark - Bookmark to store
 * @returns {void}
 */
function addBookmark(bookmark) {
  const bookmarks = getBookmarks();
  bookmarks.push(bookmark);
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

/**
 * Returns the currently selected bookmark radio value.
 *
 * @returns {string|undefined} Selected bookmark name
 */
function getSelectedBookmark() {
  const selected = document.querySelector('input[name="bookmark"]:checked');

  if (!selected) return undefined;

  return selected.value;
}

/**
 * Filters bookmarks by category.
 *
 * @param {Array<{name: string, url: string, category: string}>} bookmarks - Bookmark array
 * @param {string} category - Category to match
 * @returns {Array<{name: string, url: string, category: string}>} Filtered bookmarks
 */
const filterBookmarks = (bookmarks, category) => {
  return bookmarks.filter((bookmark) => bookmark.category === category);
};

/**
 * Builds the current bookmark object from form inputs.
 *
 * @returns {{name: string, url: string, category: string}} Bookmark object
 */
const currentBookmark = () => {
  return {
    name: nameEl.value.trim(),
    url: urlEl.value.trim(),
    category: categoryDropdown.value,
  };
};

/**
 * Returns the currently selected category.
 *
 * @returns {string} Selected category
 */
const getSelectedCategory = () => categoryDropdown.value;

/**
 * Returns empty-state markup for the bookmark list.
 *
 * @returns {string} Empty-state HTML
 */
const noBookmarks = () => '<li class="empty-state">No bookmarks found.</li>';

/**
 * Returns list markup for the provided bookmarks.
 *
 * @param {Array<{name: string, url: string}>} bookmarks - Bookmarks to render
 * @returns {string} Bookmark list HTML
 */
const yesBookmarks = (bookmarks) => {
  return bookmarks
    .map(
      ({ name, url }) => `
        <li class="bookmark-item">
          <input type="radio" name="bookmark" id="${name}" value="${name}" />
          <label for="${name}">
            <a href="${url}" target="_blank" rel="noopener noreferrer">${name}</a>
          </label>
        </li>
      `
    )
    .join('');
};

openBookmarkFormBtn.addEventListener('click', () => {
  updateCategoryName(getSelectedCategory());
  showForm();
});

closeFormButton.addEventListener('click', () => {
  clearInput();
  hideForm();
});

closeListButton.addEventListener('click', hideCategoryList);

bookmarkForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!nameEl.value.trim() || !urlEl.value.trim()) {
    return;
  }

  addBookmark(currentBookmark());
  clearInput();
  hideForm();
});

viewCategoryButton.addEventListener('click', () => {
  const selectedCategory = getSelectedCategory();

  updateCategoryName(selectedCategory);
  renderBookmarksByCategory(selectedCategory);
  showCategoryList();
});

deleteBookmarkButton.addEventListener('click', () => {
  const selectedBookmark = getSelectedBookmark();
  const selectedCategory = getSelectedCategory();

  if (!selectedBookmark) return;

  deleteBookmark(selectedBookmark, selectedCategory);
  renderBookmarksByCategory(selectedCategory);
});
