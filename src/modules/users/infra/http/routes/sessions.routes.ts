import { Router } from 'express';
import SessionsControlles from '../controllers/SessionsController';

const sessionsRouter = Router();
const sessionsController = new SessionsControlles();

sessionsRouter.post('/', sessionsController.create);

export default sessionsRouter;
