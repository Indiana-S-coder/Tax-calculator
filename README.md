## Tax Calculator Web Application

This repository contains a web application for calculating taxes based on user input. The application allows users to input their gross annual income, extra income, applicable deductions, and age group to calculate their tax liability. It follows the requirements outlined in the Fyle Web Development Internship Challenge.

### Features

- Users can input their gross annual income, extra income, applicable deductions, and select their age group to calculate tax liability.
- Error handling:
  - Users are prompted with error icons and tooltips if incorrect values are entered in number fields or if age group is not selected.
  - Error icons are not visible by default.
- Tax calculation based on provided formula:
  - Overall income under 8 Lakhs is not taxed.
  - Income over 8 Lakhs is taxed based on age group.
- Modal display of tax calculation result upon submission.

### How to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Indiana-S-coder/Tax-calculator.git
   ```

2. Open the `index.html` file in your web browser.

### Technologies Used

- HTML
- CSS
- JavaScript
- Bootstrap
- jQuery

### Assumptions Made

- Assumed that the tax calculation formula provided is accurate and does not require additional validation or modification.
- If extra income and deduction fields are empty they are assumed to be 0.
- Assumed that the UI design provided in the challenge represents the desired user interface.

### Improvements and Future Work

- Enhance error handling to provide more detailed error messages for better user feedback.
- Implement unit and integration tests to ensure robustness and reliability of the application.
- Refactor code to improve readability and maintainability.
- Add support for localization and currency formatting.

### Screenshots

![Screenshot 1](https://github.com/Indiana-S-coder/Tax-calculator/assets/79374195/27ab8dd4-64ff-4e70-996b-8d0e7746c471)
![Screenshot 2](https://github.com/Indiana-S-coder/Tax-calculator/assets/79374195/01d7789c-80e2-45a9-850e-289a67faf723)
![Screenshot 3](https://github.com/Indiana-S-coder/Tax-calculator/assets/79374195/4feb7c0a-cebd-4aba-9261-65f680ff3c9d)



### Test Results

![Test result 1](https://github.com/Indiana-S-coder/Tax-calculator/assets/79374195/7cb3dd8c-c9d2-4c6d-b19c-c764a246dcda)
![Test result 2](https://github.com/Indiana-S-coder/Tax-calculator/assets/79374195/f2190025-362b-4c3e-8119-1e220210d031)
![Test result 3](https://github.com/Indiana-S-coder/Tax-calculator/assets/79374195/627d35f2-4f9c-4b31-b73f-69f1cc79a398)


### Demo

A live demo of the application can be found [here](https://indiana-s-coder.github.io/Tax-calculator/).

### Contributors

- [Bharti Patel](https://github.com/Indiana-S-coder)

I have tried to cover all the edge cases:
- If gross income field is empty tax is not calculated.
- If invalid input is made tax is not calculated.
- Negative number input is not allowed
- If extra income and deduction field are empty, they are assumed to be 0.

All feedbacks are sincerely welcomed.
