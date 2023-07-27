'use server';
import { NextRequest, NextResponse } from 'next/server';
import * as fs from 'fs/promises';

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

const file = 'src/data/users.json';

export async function GET() {
  const user = await fs.readFile(file, 'utf8');
  const users = await JSON.parse(user);
  return NextResponse.json({ ...users }, { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, email, password, isAdmin }: User = data;
    const response = await fs.readFile(file, 'utf-8');
    const reply = JSON.parse(response);
    const id = reply.users[reply.users.length - 1].id + 1;
    const newUser = { id, name, email, password, isAdmin };
    reply.users.push(newUser);
    await fs.writeFile(file, JSON.stringify(reply, null, 2));
    return NextResponse.json({ ...newUser }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
