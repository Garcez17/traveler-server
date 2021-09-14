import { Router } from 'express';

import { usersRouter } from '@modules/users/infra/http/routes/users.routes';
import { categoriesRouter } from '@modules/categories/infra/http/routes/categories.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/categories', categoriesRouter);

export { routes };
