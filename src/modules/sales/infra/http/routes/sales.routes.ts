import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import {celebrate} from 'celebrate';

import SalesController from '../controllers/SalesController';
import ListSaleController from '../controllers/ListSaleController';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import SaleAvatarController from '../controllers/SaleAvatarController';

const salesRouter = Router();
const salesController = new SalesController();
const listSaleController = new ListSaleController();
const saleAvatarController = new SaleAvatarController();


const upload = multer(uploadConfig.multer);

salesRouter.use(ensureAuthenticated);

salesRouter.post('/', salesController.create);
salesRouter.get('/', listSaleController.index);
salesRouter.get('/listallsales', salesController.index);
salesRouter.put('/', salesController.update);


salesRouter.patch(
  '/avatar',
  upload.single('avatar'),
  saleAvatarController.update);

export default salesRouter;
