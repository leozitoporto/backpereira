import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const ordersRouter = Router();
ordersRouter.use(ensureAuthenticated);

ordersRouter.post('/', async (request, response) => response.send());

export default ordersRouter;
