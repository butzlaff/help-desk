import { prisma } from '../lib/prisma';

const getUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (user?.password === password) {
    return user;
  }
  return null;
};

const findAllUser = async () => {
  const users = await prisma.user.findMany();
  return users;
};

const service = { getUser, findAllUser };

export default service;
