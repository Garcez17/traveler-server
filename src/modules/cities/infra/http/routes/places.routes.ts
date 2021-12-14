import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import { PlacesController } from '../controllers/PlacesController';

const placesController = new PlacesController();

const upload = multer(uploadConfig.multer);

const placesRouter = Router();

placesRouter.post('/', upload.single('image'), placesController.create);

export { placesRouter };
