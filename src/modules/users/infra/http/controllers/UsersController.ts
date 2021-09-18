import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import { CreateUserService } from '@modules/users/services/CreateUserService';
import { ShowUserProfileService } from '@modules/users/services/ShowUserProfileService';

export class UsersController {
  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;

    const showUserProfile = container.resolve(ShowUserProfileService);

    const user = await showUserProfile.execute({
      id,
    });

    return res.json(classToClass(user));
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    return res.json(classToClass(user));
  }
}
