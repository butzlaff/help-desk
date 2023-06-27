'use server';
import { NextRequest, NextResponse } from 'next/server';
import * as fs from 'fs/promises';
import Error from 'next/error';

const file = 'src/data/users.json';

interface User {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  id: number;
}

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const response = await fs.readFile(file, 'utf-8');
    const reply = JSON.parse(response);
    const user = reply.users.find((user: User) => user.id === Number(id));
    return NextResponse.json({ user }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
