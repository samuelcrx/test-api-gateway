import { Router, Request, Response } from 'express';
import faker = require('faker')

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  // Reply with a hello world when no name param is provided
  res.send('You are Welcome here!');
});

router.get('/register', (req: Request, res: Response) => {

  // Greet the given name
  res.send({
    name: 'Samuel',
    last_name: 'Braga',
    age: 22,
    games: ['League of Legends', 'DDTank', 'Grand Chase', 'Harvest Moon', 'Whatchdogs']
  })
});

router.get('/:email', (req: Request, res: Response) => {
  // Extract the name from the request parameters
  let { email } = req.params;

  // Greet the given name
  res.send(`Seu email é: ${email}`)
});

router.get('/login', (req: Request, res: Response) => {

  // Greet the given name
  res.send({
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
  })
});

router.get('/phone', (req: Request, res: Response) => {

  let phone = faker.phone.phoneNumber()
  console.log('nada?', phone);


  // Greet the given name
  res.send(`The phone number is: ${phone}`)
});

// Export the express.Router() instance
export const WelcomeController: Router = router;