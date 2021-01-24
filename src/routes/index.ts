import { Router } from 'express';
import salesRouter from './sales.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/sales', salesRouter);
routes.use('/users', usersRouter);

export default routes;
