import { Router } from 'express';

const ordersRouter = Router();

ordersRouter.post('/', async (request, response) => {
  try {
    return response.send();
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default ordersRouter;
