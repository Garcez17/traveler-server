import express, { NextFunction, Request, Response } from 'express';
import 'reflect-metadata';
import 'express-async-errors';
import { errors } from 'celebrate';
import AppError from '@shared/errors/AppError';

import '@shared/infra/typeorm';
import '@shared/container';

import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(routes);
app.use(errors());

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333, () => console.log('Server started on port 3333!'));
