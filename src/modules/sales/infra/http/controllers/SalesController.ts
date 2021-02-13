import { Request, Response } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';

import CreateSaleService from '@modules/sales/services/CreateSaleService';

export default class SaleController {
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
