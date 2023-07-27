'use server';
import { NextRequest, NextResponse } from 'next/server';
import { controller } from '../controllers/userController';

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

export async function POST(req: NextRequest) {
  const { email, password }: RequestBody = await req.json();

  const userFound = await controller.getUser({ email, password });
  if (userFound) {
    const { password: _password, ...user } = userFound;
    return NextResponse.json(user, { status: 200 });
  } else {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }
}
