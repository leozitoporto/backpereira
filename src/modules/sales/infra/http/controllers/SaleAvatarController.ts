import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import UpdateSaleAvatarService from '@modules/sales/services/UpdateSaleAvatarService';

export default class SaleAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateSaleAvatar = container.resolve(UpdateSaleAvatarService);

    const sale = await updateSaleAvatar.execute({
      sale_id: request.body,
      avatarFilename: request.file.filename,
    });

    return response.json(classToClass(sale));
  }
}
