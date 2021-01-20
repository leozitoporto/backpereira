import { Router } from 'express';
import { parseISO } from 'date-fns';

import SalesRepository from '../repositories/SalesRepository';

import CreateSaleService from '../services/CreateSaleService';

const salesRouter = Router();
const salesRepository = new SalesRepository();

salesRouter.get('/', (request, response) => {
  const sales = salesRepository.all();

  return response.json(sales);
});

salesRouter.post('/', (request, response) => {
  try {
    const {
      name, price, obs, tpsale, dtvalid, urlimg,
    } = request.body;

    const parsedDate = parseISO(dtvalid);

    const createSale = new CreateSaleService(salesRepository);

    const sale = createSale.execute({
      name, price, obs, dtvalid: parsedDate, urlimg, tpsale,
    });

    return response.json(sale);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default salesRouter;
