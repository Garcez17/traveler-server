import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import { UsersController } from '../controllers/UsersController';
import { sessionsRouter } from './sessions.routes';

const usersController = new UsersController();

const usersRouter = Router();

usersRouter.use('/session', sessionsRouter);

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  usersController.create,
);

export { usersRouter };
