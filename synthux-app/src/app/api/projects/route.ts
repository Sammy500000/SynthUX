import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import pool from '@/lib/db';

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { name, url } = await req.json();

  const client = await pool.connect();
  try {
    const { rows } = await client.query(
      'INSERT INTO Projects (user_id, name) VALUES ((SELECT id FROM Users WHERE email = $1), $2) RETURNING *',
      [session.user.email, name]
    );
    return NextResponse.json(rows[0]);
  } catch (error) {
    return NextResponse.json({ error: 'Error creating project' }, { status: 500 });
  } finally {
    client.release();
  }
}
