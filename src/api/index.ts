import express from 'express';

const api = express();

//middlewares de requisição

api.use(express.json());
api.use(express.urlencoded({ extended: true }));

// routes
api.get('/', (_, res) => res.send('Roy Musthang'));

//middlewares de resposta

export default api;
