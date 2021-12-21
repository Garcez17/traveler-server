import { Router } from 'express';
import multer from 'multer';
import { celebrate, Joi, Segments } from 'celebrate';

import uploadConfig from '@config/upload';

import { PlacesController } from '../controllers/PlacesController';

const placesController = new PlacesController();

const upload = multer(uploadConfig.multer);

const placesRouter = Router();

placesRouter.get('/', placesController.index);

placesRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  placesController.show,
);

placesRouter.post('/', upload.single('image'), placesController.create);

export { placesRouter };
