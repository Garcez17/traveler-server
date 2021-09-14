import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import { CategoriesController } from '../controllers/CategoriesController';

const categoriesController = new CategoriesController();

const categoriesRouter = Router();

categoriesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
    },
  }),
  categoriesController.create,
);

export { categoriesRouter };
