

document.addEventListener('DOMContentLoaded', function() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    const taxForm = document.getElementById('taxForm');
    const grossIncomeInput = document.getElementById('grossIncome');
    const extraIncomeInput = document.getElementById('extraIncome');
    const ageGroupSelect = document.getElementById('ageGroup');
    const deductionsInput = document.getElementById('deductions');
    const submitBtn = document.getElementById('submitBtn');
    const taxModal = document.getElementById('taxModal');
    const taxResult = document.getElementById('taxResult');
  
    const validateInput = (input, errorElement) => {
      const value = input.value.trim();
      const isValid = !value || /^\d+(\.\d+)?$/.test(value);
  
      if (!isValid) {
        input.classList.add('is-invalid');
        errorElement.style.display = 'block';
      } else {
        input.classList.remove('is-invalid');
        errorElement.style.display = 'none';
      }
  
      return isValid;
    };
  
    const validateForm = () => {
      const grossIncomeValid = validateInput(grossIncomeInput, document.getElementById('grossIncomeError'));
      const extraIncomeValid = validateInput(extraIncomeInput, document.getElementById('extraIncomeError'));
      const deductionsValid = validateInput(deductionsInput, document.getElementById('deductionsError'));
      const ageGroupValid = ageGroupSelect.value !== '';
  
      if (!ageGroupValid) {
        ageGroupSelect.classList.add('is-invalid');
        document.getElementById('ageGroupError').style.display = 'block';
      } else {
        ageGroupSelect.classList.remove('is-invalid');
        document.getElementById('ageGroupError').style.display = 'none';
      }
  
      return grossIncomeValid && extraIncomeValid && deductionsValid && ageGroupValid;
    };
  
    const calculateTax = () => {
      const grossIncome = parseFloat(grossIncomeInput.value) || 0;
      const extraIncome = parseFloat(extraIncomeInput.value) || 0;
      const deductions = parseFloat(deductionsInput.value) || 0;
      const ageGroup = ageGroupSelect.value;
  
      const totalIncome = grossIncome + extraIncome;
      const taxableIncome = Math.max(totalIncome - deductions - 800000, 0);
  
      let taxRate = 0;
      switch (ageGroup) {
        case 'lt40':
          taxRate = 0.3;
          break;
        case 'gte40lt60':
          taxRate = 0.4;
          break;
        case 'gte60':
          taxRate = 0.1;
          break;
      }
  
      const tax = taxableIncome * taxRate;
      const overallIncome = totalIncome - deductions - tax;
  
      return `${overallIncome.toFixed(2)}`;
    };
  
    const showTaxResult = () => {
      if (validateForm()) {
        const result = calculateTax();
        taxResult.textContent = result;
        $('#taxModal').modal('show');
      }
    };
  
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showTaxResult();
    });
  
    grossIncomeInput.addEventListener('input', () => validateInput(grossIncomeInput, document.getElementById('grossIncomeError')));
    extraIncomeInput.addEventListener('input', () => validateInput(extraIncomeInput, document.getElementById('extraIncomeError')));
    deductionsInput.addEventListener('input', () => validateInput(deductionsInput, document.getElementById('deductionsError')));
    ageGroupSelect.addEventListener('change', () => validateForm());
  });