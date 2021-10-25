"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WelcomeController = void 0;
const express_1 = require("express");
const faker = require("faker");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    // Reply with a hello world when no name param is provided
    res.send('You are Welcome here!');
});
router.get('/register', (req, res) => {
    // Greet the given name
    res.send({
        name: 'Samuel',
        last_name: 'Braga',
        age: 22,
        games: ['League of Legends', 'DDTank', 'Grand Chase', 'Harvest Moon', 'Whatchdogs']
    });
});
router.get('/:email', (req, res) => {
    // Extract the name from the request parameters
    let { email } = req.params;
    // Greet the given name
    res.send(`Seu email é: ${email}`);
});
router.get('/login', (req, res) => {
    // Greet the given name
    res.send({
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    });
});
router.get('/phone', (req, res) => {
    let phone = faker.phone.phoneNumber();
    console.log('nada?', phone);
    // Greet the given name
    res.send(`The phone number is: ${phone}`);
});
// Export the express.Router() instance
exports.WelcomeController = router;
