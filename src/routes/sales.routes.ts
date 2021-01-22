import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import SalesRepository from '../repositories/SalesRepository';

import CreateSaleService from '../services/CreateSaleService';

const salesRouter = Router();

salesRouter.get('/', async (request, response) => {
  const salesRepository = getCustomRepository(SalesRepository);
  const sales = await salesRepository.find();

  return response.json(sales);
});

salesRouter.post('/', async (request, response) => {
  try {
    const {
      name, price, obs, tpsale, dtvalid, urlimg,
    } = request.body;

    const parsedDate = parseISO(dtvalid);

    const createSale = new CreateSaleService();

    const sale = await createSale.execute({
      name, price, obs, dtvalid: parsedDate, urlimg, tpsale,
    });

    return response.json(sale);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default salesRouter;
