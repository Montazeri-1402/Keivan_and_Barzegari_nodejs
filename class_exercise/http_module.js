const express = require('express');
const app = express();

// Middleware to parse JSON and urlencoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to display a form to input the name
app.get('/', (req, res) => {
  res.send('<form action="/greet" method="post"><input type="text" name="name" placeholder="Enter your name"><button type="submit">Say Hi!</button></form>');
});

// Route to handle the form submission and greet the user
app.post('/greet', (req, res) => {
  const { name } = req.body;
  if (name) {
    res.send(`Hi, ${name}!`);
  } else {
    res.send('Please enter a name.');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
