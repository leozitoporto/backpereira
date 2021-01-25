import { Router } from 'express';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const ordersRouter = Router();
ordersRouter.use(ensureAuthenticated);

ordersRouter.post('/', async (request, response) => {
  try {
    return response.send();
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default ordersRouter;
