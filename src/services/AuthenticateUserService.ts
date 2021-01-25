import { compare, hash } from 'bcryptjs';
import { getRepository } from 'typeorm';
import { sign, verify } from 'jsonwebtoken';

import User from '../models/User';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async execute({ email, password }:Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { email } });

    if (!user) {
      throw new Error('Email ou senha está incorreto.');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('Email ou senha está incorreto.');
    }

    const token = sign({}, '7df844d4bebfe58443a357be99648cf7', {
      subject: user.password,
      expiresIn: '120d',
    });
    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
