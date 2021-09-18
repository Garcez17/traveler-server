import { Router } from 'express';

import { usersRouter } from '@modules/users/infra/http/routes/users.routes';
import { categoriesRouter } from '@modules/categories/infra/http/routes/categories.routes';
import { citiesRouter } from '@modules/cities/infra/http/routes/cities.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/categories', categoriesRouter);
routes.use('/cities', citiesRouter);

export { routes };
