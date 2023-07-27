'use server';
import { NextRequest, NextResponse } from 'next/server';
import * as fs from 'fs/promises';
import { NextApiRequest } from 'next';
import email from 'next-auth/providers/email';
import { request } from 'http';

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

interface RequestBody {
  email: string;
  password: string;
}

const file = 'src/data/users.json';

export async function POST(req: NextRequest) {
  const { email, password }: RequestBody = await req.json();
  const users = await fs.readFile(file, 'utf8');

  const usersParse = await JSON.parse(users);
  const userFound = usersParse.users.find(
    (user: User) => user.email === email && user.password === password
  );
  if (userFound) {
    const { password: _password, ...user } = userFound;
    return NextResponse.json(user, { status: 200 });
  } else {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }
}
