import { Router } from 'express';
import SessionsControlles from '../controllers/SessionsController';
import { celebrate, Segments, Joi } from 'celebrate';

const sessionsRouter = Router();
const sessionsController = new SessionsControlles();

sessionsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  sessionsController.create,
);

export default sessionsRouter;
