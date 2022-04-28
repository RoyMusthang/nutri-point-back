import { ErrorRequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next): void => {
  const { name, message } = err;
  switch (name) {
  default:
    res.status(500).json(message);
    break;
  }
};