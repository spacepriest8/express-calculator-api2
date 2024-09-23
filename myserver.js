const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Calculator functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0) {
        return 'Error: Division by zero';
    }
    return a / b;
};

// Routes
app.post('/add', (req, res) => {
    const { a, b } = req.body;
    res.json({ result: add(a, b) });
});

app.post('/subtract', (req, res) => {
    const { a, b } = req.body;
    res.json({ result: subtract(a, b) });
});

app.post('/multiply', (req, res) => {
    const { a, b } = req.body;
    res.json({ result: multiply(a, b) });
});

app.post('/divide', (req, res) => {
    const { a, b } = req.body;
    res.json({ result: divide(a, b) });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
