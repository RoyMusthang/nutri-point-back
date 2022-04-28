import { Router } from 'express';
import { clientsController } from '../../app/controllers';

const clientRoute = Router();

// get
clientRoute.get('/', async (req, res) => {
    const result = await clientsController.list();
    res.status(200).json(result)
});

// List
clientRoute.get('/:id', async (req, res) => {
});

// add
clientRoute.post('/', async (req, res) => {
    res.send(req);
});

// edit
clientRoute.put('/:id', async (req, res) => {
    res.send(req);
});

// remove
clientRoute.delete('/:id', async (req, res) => {
    res.send(req);
});

export { clientRoute };
