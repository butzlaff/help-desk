import { NextRequest } from 'next/server';
import service from '../services/userService';

interface RequestBody {
  email: string;
  password: string;
}

const getUser = async ({ email, password }: RequestBody) => {
  const user = await service.getUser(email, password);
  return user;
};

export const controller = { getUser };
