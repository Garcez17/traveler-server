import express from 'express';
import 'reflect-metadata';
import 'express-async-errors';

import '@shared/infra/typeorm';

const app = express();

app.listen(3333, () => console.log('Server started on port 3333!'));
