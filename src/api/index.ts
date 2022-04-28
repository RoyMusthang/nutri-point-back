import express from 'express';
import { clientRoute } from './routes/client.routes';

const api = express();

//middlewares de requisição

api.use(express.json());
api.use(express.urlencoded({ extended: true }));

// routes
api.get('/', (_, res) => res.send('Roy Musthang'));
api.use(clientRoute)

//middlewares de resposta

export default api;
