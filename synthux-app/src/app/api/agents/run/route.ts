import { NextResponse } from 'next/server';
import { runAgent } from '@/lib/agents';

export async function POST(req: Request) {
  const { url, tasks } = await req.json();

  try {
    const results = await runAgent(url, tasks);
    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json({ error: 'Error running agent' }, { status: 500 });
  }
}
