import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import { CitiesController } from '../controllers/CititesController';

import { placesRouter } from './places.routes';

const citiesController = new CitiesController();

const upload = multer(uploadConfig.multer);

const citiesRouter = Router();

citiesRouter.use('/places', placesRouter);

citiesRouter.post('/', upload.single('image'), citiesController.create);

export { citiesRouter };
