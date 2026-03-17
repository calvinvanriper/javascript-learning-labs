const form = document.getElementById('form');
const clearButton = document.getElementById('clear-btn');

const fullNameInput = document.getElementById('full-name');
const emailInput = document.getElementById('email');
const orderNoInput = document.getElementById('order-no');
const productCodeInput = document.getElementById('product-code');
const quantityInput = document.getElementById('quantity');

const complaintsGroup = document.getElementById('complaints-group');
const complaintCheckboxes = document.querySelectorAll('input[name="complaint"]');
const otherComplaintCheckbox = document.getElementById('other-complaint');
const complaintDescription = document.getElementById('complaint-description');

const solutionsGroup = document.getElementById('solutions-group');
const solutionRadios = document.querySelectorAll('input[name="solutions"]');
const otherSolutionRadio = document.getElementById('other-solution');
const solutionDescription = document.getElementById('solution-description');

const fieldMap = {
  'full-name': fullNameInput,
  email: emailInput,
  'order-no': orderNoInput,
  'product-code': productCodeInput,
  quantity: quantityInput,
  'complaints-group': complaintsGroup,
  'complaint-description': complaintDescription,
  'solutions-group': solutionsGroup,
  'solution-description': solutionDescription,
};

/**
 * Validates all complaint form fields and returns a field-by-field result map.
 * @returns {Object<string, boolean>} Validation results keyed by field id.
 */
function validateForm() {
  return {
    'full-name': fullNameInput.value.trim() !== '',
    email: /(\w+)@(\w+)\.(\w+)/.test(emailInput.value.trim()),
    'order-no': /^2024\d{6}$/.test(orderNoInput.value.trim()),
    'product-code': /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/.test(
      productCodeInput.value.trim()
    ),
    quantity: Number(quantityInput.value) > 0,
    'complaints-group': Array.from(complaintCheckboxes).some((checkbox) => checkbox.checked),
    'complaint-description':
      !otherComplaintCheckbox.checked || complaintDescription.value.trim().length >= 20,
    'solutions-group': Array.from(solutionRadios).some((radio) => radio.checked),
    'solution-description':
      !otherSolutionRadio.checked || solutionDescription.value.trim().length >= 20,
  };
}

/**
 * Checks whether all validation results are true.
 * @param {Object<string, boolean>} validationResults - Validation result map.
 * @returns {boolean} True when all fields are valid.
 */
function isValid(validationResults) {
  return Object.values(validationResults).every((value) => value);
}

/**
 * Applies validation classes to a field or group element.
 * @param {HTMLElement} element - The element to style.
 * @param {boolean} isFieldValid - Whether the element is valid.
 */
function applyValidationClass(element, isFieldValid) {
  element.classList.remove('valid', 'invalid');
  element.classList.add(isFieldValid ? 'valid' : 'invalid');
}

/**
 * Clears the form and removes all validation classes.
 */
function clearForm() {
  form.reset();

  Object.values(fieldMap).forEach((element) => {
    element.classList.remove('valid', 'invalid');
  });
}

form.addEventListener('submit', (event) => {
  const validationResults = validateForm();
  const formValidationResults = isValid(validationResults);

  if (!formValidationResults) {
    event.preventDefault();

    for (const [key, value] of Object.entries(validationResults)) {
      const element = fieldMap[key];
      applyValidationClass(element, value);
    }
  }
});

form.addEventListener('change', (event) => {
  const validationResults = validateForm();
  const element = event.target;
  const eventId = element.id;
  const eventName = element.name;
  const complaintsGroupValid = validationResults['complaints-group'];
  const solutionsGroupValid = validationResults['solutions-group'];

  if (fieldMap[eventId]) {
    applyValidationClass(fieldMap[eventId], validationResults[eventId]);
  }

  if (eventName === 'complaint') {
    applyValidationClass(complaintsGroup, complaintsGroupValid);
  }

  if (eventId === 'other-complaint' || eventId === 'complaint-description') {
    applyValidationClass(complaintDescription, validationResults['complaint-description']);
  }

  if (eventName === 'solutions') {
    applyValidationClass(solutionsGroup, solutionsGroupValid);
  }

  if (eventId === 'other-solution' || eventId === 'solution-description') {
    applyValidationClass(solutionDescription, validationResults['solution-description']);
  }
});

clearButton.addEventListener('click', clearForm);
