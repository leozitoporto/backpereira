import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { parseISO } from 'date-fns';

import ListSalesService from '@modules/sales/services/ListSaleProvider';
import { date } from '@hapi/joi';

export default class ListSaleController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { dt_valid } = request.body;


    const parsedDate = parseISO(dt_valid);

    const listSale = container.resolve(
      ListSalesService
    );

    const list = await listSale.execute({
      dt_valid: parsedDate
    });

    return response.json(list);
  }
}
