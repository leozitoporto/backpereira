import { Router } from 'express';

import {celebrate} from 'celebrate';

import SalesController from '../controllers/SalesController';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const salesRouter = Router();
const salesControlelr = new SalesController();

salesRouter.use(ensureAuthenticated);

// salesRouter.get('/', async (request, response) => {
//   const sales = await salesRepository.find();
//   return response.json(sales);
// });

salesRouter.post('/', salesControlelr.create);

export default salesRouter;
