const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');

/**
 * Activates the selected tab and displays its associated tabpanel.
 * Intent: keep tab UI state (aria-selected/tabindex) and content visibility (hidden)
 * synchronized for accessible navigation.
 *
 * @param {HTMLElement} activeTab - The tab element to activate.
 */
function activateTab(activeTab) {
  tabs.forEach((tab) => {
    const isActive = tab === activeTab;
    tab.setAttribute('aria-selected', String(isActive));
    tab.setAttribute('tabindex', isActive ? '0' : '-1');
  });

  panels.forEach((panel) => {
    panel.hidden = true;
  });

  const associatedPanelId = activeTab.getAttribute('aria-controls');
  const associatedPanel = document.getElementById(associatedPanelId);

  if (!associatedPanel) return;

  associatedPanel.hidden = false;
}

/**
 * Handles tab click events.
 * Intent: use the clicked tab as the source of truth for state updates.
 *
 * @param {MouseEvent} event
 */
function handleTabClick(event) {
  const clickedTab = event.currentTarget;
  activateTab(clickedTab);
}

tabs.forEach((tab) => {
  tab.setAttribute('tabindex', tab.getAttribute('aria-selected') === 'true' ? '0' : '-1');
  tab.addEventListener('click', handleTabClick);
});

// ---- Test calls (manual validation) ----
// 1) Click each tab; expected: only its panel is visible, aria-selected updates correctly.
// 2) Refresh page; expected: Overview tab selected and Overview panel visible.
// 3) Click the active tab again; expected: no change, UI remains stable.
// 4) Verify keyboard Tab focus; expected: only active tab is in tab order (tabindex="0").
// 5) Confirm hidden panels are not visible; expected: only one panel displayed at a time.
