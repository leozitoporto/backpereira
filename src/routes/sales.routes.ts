import { Router } from 'express';
import { uuid } from 'uuidv4';

const salesRouter = Router();

const sales = [];

salesRouter.post('/', (request, response) => {
  const {
    name, price, obs, dtvalid,
  } = request.body;

  const sale = {
    id: uuid(),
    name,
    price,
    obs,
    dtvalid,
  };

  sales.push(sale);

  return response.json(sale);
});

export default salesRouter;
