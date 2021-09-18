import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import { CitiesController } from '../controllers/CititesController';

const citiesController = new CitiesController();

const upload = multer(uploadConfig.multer);

const citiesRouter = Router();

citiesRouter.post('/', upload.single('image'), citiesController.create);

export { citiesRouter };
