import { Router } from 'express';
import { startOfHour, parseISO, isBefore } from 'date-fns';

import SalesRepository from '../repositories/SalesRepository';

const salesRouter = Router();
const salesRepository = new SalesRepository();

salesRouter.get('/', (request, response) => {
  const sales = salesRepository.all();

  return response.json(sales);
});

salesRouter.post('/', (request, response) => {
  const {
    name, price, obs, tpsale, dtvalid, urlimg,
  } = request.body;

  // retiro h:m:s e transformo em formato de data do javascript
  const parsedDate = startOfHour(parseISO(dtvalid));

  if (isBefore(parsedDate, Date.now())) {
    return response.status(400).json({
      message: 'Você não pode criar uma venda com data de validade passada.',
    });
  }

  const sale = salesRepository.create({
    name,
    price,
    obs,
    dtvalid: parsedDate,
    urlimg,
    tpsale,
  });

  return response.json(sale);
});

export default salesRouter;
