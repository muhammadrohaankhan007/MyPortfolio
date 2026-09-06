import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({ path: '/' }));
    const path = body?.path || '/';

    const record = await prisma.analytics.upsert({
      where: { path: path },
      update: { views: { increment: 1 } },
      create: { path: path, views: 1 },
    });

    return NextResponse.json({ views: record.views });
  } catch (error) {
    console.error('Failed to record view:', error);
    return NextResponse.json({ error: 'Failed to record view' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const analytics = await prisma.analytics.findMany();
    return NextResponse.json(analytics);
  } catch (error) {
    console.error('Failed to fetch analytics:', error);
    return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 });
  }
}
