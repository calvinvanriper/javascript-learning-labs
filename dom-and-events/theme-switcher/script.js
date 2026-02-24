const themes = [
  { name: 'light', message: 'Light theme enabled' },
  { name: 'dark', message: 'Dark theme enabled' },
  { name: 'blue', message: 'Blue theme enabled' },
  { name: 'orange', message: 'Orange theme enabled' },
];

const buttonEl = document.getElementById('theme-switcher-button');
const menuEl = document.getElementById('theme-dropdown');
const statusEl = document.getElementById('status');

const menuItems = Array.from(menuEl.querySelectorAll('[role="menuitem"]'));

/**
 * Opens the theme menu and updates accessibility state.
 * Intent: keep visual visibility and aria-expanded synchronized.
 */
function openMenu() {
  menuEl.removeAttribute('hidden');
  buttonEl.setAttribute('aria-expanded', 'true');
}

/**
 * Closes the theme menu and updates accessibility state.
 * Intent: collapse the menu and reflect state for assistive technologies.
 */
function closeMenu() {
  menuEl.setAttribute('hidden', '');
  buttonEl.setAttribute('aria-expanded', 'false');
}

/**
 * Returns whether the theme menu is currently open.
 * Intent: treat DOM visibility as the source of truth for menu state.
 *
 * @returns {boolean}
 */
function isMenuOpen() {
  return !menuEl.hasAttribute('hidden');
}

/**
 * Moves focus to a specific menu item by index.
 * Intent: keep keyboard navigation simple and predictable.
 *
 * @param {number} index
 */
function focusMenuItem(index) {
  const clampedIndex = ((index % menuItems.length) + menuItems.length) % menuItems.length;
  menuItems[clampedIndex].focus();
}

/**
 * Opens the menu and focuses a target item.
 * Intent: ensure keyboard users land inside the menu after opening.
 *
 * @param {number} startIndex
 */
function openMenuAndFocus(startIndex) {
  openMenu();
  focusMenuItem(startIndex);
}

/**
 * Applies the requested theme and announces the change via the status region.
 * Intent: ensure only one theme-* class is active at a time.
 *
 * @param {string} themeName
 */
function applyTheme(themeName) {
  const themeClasses = Array.from(document.body.classList).filter((cls) =>
    cls.startsWith('theme-')
  );

  themeClasses.forEach((cls) => document.body.classList.remove(cls));
  document.body.classList.add(`theme-${themeName}`);

  const theme = themes.find((t) => t.name === themeName);
  statusEl.textContent = theme ? theme.message : '';
}

/**
 * Applies theme based on a menu item element.
 * Intent: derive selection from DOM rather than duplicating theme mapping.
 *
 * @param {HTMLElement} item
 */
function selectThemeFromItem(item) {
  const themeName = item.textContent.trim().toLowerCase();
  applyTheme(themeName);
  closeMenu();
  buttonEl.focus();
}

/**
 * Handles opening and closing the theme menu from the toggle button.
 * Intent: provide a single control that toggles menu visibility and ARIA state.
 */
function handleButtonClick() {
  if (isMenuOpen()) {
    closeMenu();
    return;
  }

  openMenu();
}

/**
 * Handles keyboard interaction on the toggle button.
 * Intent: support standard menu-button keys without redesigning the lab.
 *
 * @param {KeyboardEvent} event
 */
function handleButtonKeyDown(event) {
  const key = event.key;

  if (key === 'ArrowDown' || key === 'Enter' || key === ' ') {
    event.preventDefault();
    openMenuAndFocus(0);
  }

  if (key === 'ArrowUp') {
    event.preventDefault();
    openMenuAndFocus(menuItems.length - 1);
  }

  if (key === 'Escape' && isMenuOpen()) {
    event.preventDefault();
    closeMenu();
  }
}

/**
 * Handles theme selection from the menu via click.
 * Intent: use event delegation for menu items.
 *
 * @param {MouseEvent} event
 */
function handleMenuClick(event) {
  const menu = event.currentTarget;
  const item = event.target.closest('[role="menuitem"]');

  if (!item || !menu.contains(item)) return;

  selectThemeFromItem(item);
}

/**
 * Handles keyboard navigation and selection within the menu.
 * Intent: provide minimal arrow-key navigation, selection, and escape support.
 *
 * @param {KeyboardEvent} event
 */
function handleMenuKeyDown(event) {
  const key = event.key;

  const activeIndex = menuItems.indexOf(document.activeElement);
  const hasActiveItem = activeIndex !== -1;

  if (key === 'Escape') {
    event.preventDefault();
    closeMenu();
    buttonEl.focus();
    return;
  }

  if (key === 'ArrowDown') {
    event.preventDefault();
    focusMenuItem(hasActiveItem ? activeIndex + 1 : 0);
    return;
  }

  if (key === 'ArrowUp') {
    event.preventDefault();
    focusMenuItem(hasActiveItem ? activeIndex - 1 : menuItems.length - 1);
    return;
  }

  if (key === 'Home') {
    event.preventDefault();
    focusMenuItem(0);
    return;
  }

  if (key === 'End') {
    event.preventDefault();
    focusMenuItem(menuItems.length - 1);
    return;
  }

  if ((key === 'Enter' || key === ' ') && hasActiveItem) {
    event.preventDefault();
    selectThemeFromItem(menuItems[activeIndex]);
  }
}

/**
 * Closes the menu when clicking outside of the theme switcher.
 * Intent: avoid leaving an open menu on the page unintentionally.
 *
 * @param {MouseEvent} event
 */
function handleDocumentClick(event) {
  if (!isMenuOpen()) return;

  const clickedInside = event.target.closest('.theme-switcher');
  if (!clickedInside) {
    closeMenu();
  }
}

buttonEl.addEventListener('click', handleButtonClick);
buttonEl.addEventListener('keydown', handleButtonKeyDown);

menuEl.addEventListener('click', handleMenuClick);
menuEl.addEventListener('keydown', handleMenuKeyDown);

document.addEventListener('click', handleDocumentClick);

// ---- Test calls (manual validation) ----
// 1) Click "Switch Theme"; expected: menu opens and aria-expanded becomes "true".
// 2) Press Enter/Space/ArrowDown on button; expected: menu opens and first item is focused.
// 3) Use ArrowUp/ArrowDown in menu; expected: focus moves between items and wraps.
// 4) Press Enter/Space on a focused item; expected: theme applies, menu closes, focus returns to button.
// 5) Press Escape while menu is open; expected: menu closes and focus returns to button.
