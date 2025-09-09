Simple Calculator
This is a basic calculator built with vanilla JavaScript.

Features
✅ Input numbers and decimal points

✅ Basic math operations: +, -, ×, ÷

✅ C button clears the input

✅ = button evaluates the expression

✅ Error handling for:

Invalid expressions (e.g. starting with operator)

Division by zero (÷0 → Infinity)

Leading zeros (00 → prevented)

How to Use
Click the number buttons to input digits

Click operator buttons to add operations

Click = to calculate the result

Click C to reset the input field

How it Works
Uses div elements as buttons

Input is built and displayed as plain text

JavaScript logic listens for clicks and updates the display

Result is calculated with eval() (or custom logic in progress)

🔧 Known Limitations
❌ Operator precedence is not handled (e.g. 2 + 3 × 4 is evaluated as 2 + 3 = 5, then 5 × 4 = 20)

❌ Negative numbers are not supported (you can’t input -5 as a number)

❌ No parentheses support

❌ Not optimized for keyboard input (mouse clicks only)

These limitations may be fixed in a future version.

Setup
No installation needed.

Just open index.html in your browser (you can use Live Server or open the file directly).

