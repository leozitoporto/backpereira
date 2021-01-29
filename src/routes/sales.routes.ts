import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import SalesRepository from '../repositories/SalesRepository';

import CreateSaleService from '../services/CreateSaleService';

const salesRouter = Router();

salesRouter.use(ensureAuthenticated);

salesRouter.get('/', async (request, response) => {
  const salesRepository = getCustomRepository(SalesRepository);
  const sales = await salesRepository.find();
  return response.json(sales);
});

salesRouter.post('/', async (request, response) => {
  try {
    const {
      name, price, obs, tp_sale, dt_valid, avatar,
    } = request.body;

    const parsedDate = parseISO(dt_valid);

    const createSale = new CreateSaleService();

    const sale = await createSale.execute({
      name, price, obs, dt_valid: parsedDate, avatar, tp_sale,
    });

    return response.json(sale);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default salesRouter;
