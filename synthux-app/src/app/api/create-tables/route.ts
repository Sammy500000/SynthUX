import { NextResponse } from 'next/server';
import { createTables } from '@/lib/db';

export async function GET() {
  try {
    await createTables();
    return NextResponse.json({ message: 'Tables created successfully!' });
  } catch (error) {
    return NextResponse.json({ error: 'Error creating tables' }, { status: 500 });
  }
}
