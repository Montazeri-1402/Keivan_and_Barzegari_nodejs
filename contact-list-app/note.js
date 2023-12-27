const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Dummy data for initial contacts
let contacts = [
    { id: 1, name: 'Ali' },
    { id: 2, name: 'Alireza' },
    { id: 3, name: 'Mahdi' }
];

// Get all contacts
app.get('/contacts', (req, res) => {
    res.json(contacts);
});

// Add a new contact
app.post('/contacts', (req, res) => {
    const { id, name } = req.body;
    if (!id || !name) {
        return res.status(400).send('Please provide both ID and Name for the contact.');
    }

    contacts.push({ id, name });
    res.status(201).send('Contact added successfully.');
});

// Remove a contact by ID
app.delete('/contacts/:id', (req, res) => {
    const { id } = req.params;
    const index = contacts.findIndex(contact => contact.id === parseInt(id));
    if (index === -1) {
        return res.status(404).send('Contact not found.');
    }

    contacts.splice(index, 1);
    res.send('Contact deleted successfully.');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} 🛫🛫`);
});
