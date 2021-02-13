import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';
import UsersController from '../controllers/UsersController';
import UserAvatarController from '../controllers/UserAvatarController';
import { container } from 'tsyringe';
import ensureAuthenticate from '../middlewares/ensureAuthenticated';
// import AppError from '../errors/AppError';

const usersRouter = Router();
const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

const upload = multer(uploadConfig);

usersRouter.post('/', usersController.create);

usersRouter.patch(
  '/avatar',
  ensureAuthenticate,
  upload.single('avatar'),
  userAvatarController.update);

export default usersRouter;
