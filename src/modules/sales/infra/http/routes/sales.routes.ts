import { Router } from 'express';

import {celebrate} from 'celebrate';

import SalesController from '../controllers/SalesController';
import ListSaleController from '../controllers/ListSaleController';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const salesRouter = Router();
const salesController = new SalesController();
const listSaleController = new ListSaleController();

salesRouter.use(ensureAuthenticated);

// salesRouter.get('/', async (request, response) => {
//   const sales = await salesRepository.find();
//   return response.json(sales);
// });

salesRouter.post('/', salesController.create);
salesRouter.get('/', listSaleController.index);

export default salesRouter;
