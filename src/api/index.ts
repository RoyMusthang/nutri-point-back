import express from 'express';
import 'express-async-errors';
import { clientRoute } from './routes/client.routes';
import { corsMiddleware, errorHandler } from './routes/middlewares';

const api = express();

//middlewares de requisição

api.use(express.json());
api.use(express.urlencoded({ extended: true }));
api.use(corsMiddleware);

// routes
api.use('/', clientRoute);
api.use(errorHandler);

//middlewares de resposta

export default api;
