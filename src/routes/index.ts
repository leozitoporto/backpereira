import { Router } from 'express';
import salesRouter from './sales.routes';

const routes = Router();

routes.use('/sales', salesRouter);

export default routes;
