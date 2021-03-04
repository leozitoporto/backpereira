import { Request, Response } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateSaleService from '@modules/sales/services/CreateSaleService';
import ListAllSaleService from '@modules/sales/services/ListAllSaleService';

export default class SaleController {

  public async index(request: Request, response: Response): Promise<Response> {

    const listSales = container.resolve(ListAllSaleService);

    const sales = await listSales.execute();

    return response.json(classToClass(sales));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, price, obs, tp_sale, dt_valid, avatar } = request.body;

    const parsedDate = parseISO(dt_valid);

    const createSale = container.resolve(CreateSaleService);

    const sale = await createSale.execute({
      name,
      price,
      obs,
      dt_valid: parsedDate,
      avatar,
      tp_sale,
    });

    return response.json(sale);
  }
}
