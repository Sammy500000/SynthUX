import { NextResponse } from 'next/server';
import { getAiReport } from '@/lib/ai';

export async function POST(req: Request) {
  const { logs } = await req.json();

  try {
    const report = await getAiReport(logs);
    return NextResponse.json({ report });
  } catch (error) {
    return NextResponse.json({ error: 'Error generating AI report' }, { status: 500 });
  }
}
