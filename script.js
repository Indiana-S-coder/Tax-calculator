const numberInputs = document.querySelectorAll('input[type="text"]');
const errorIcons = document.querySelectorAll('.error-icon');

numberInputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    const inputValue = input.value.trim();
    if (inputValue !== '' && isNaN(parseFloat(inputValue))) {
      errorIcons[index].style.display = 'inline-block';
    } else {
      errorIcons[index].style.display = 'none';
    }
  });
});

