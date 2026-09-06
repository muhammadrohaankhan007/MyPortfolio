import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { pin } = await req.json();
    const correctPin = process.env.ADMIN_PIN || 'admin123';
    
    if (pin === correctPin) {
      return NextResponse.json({ authenticated: true });
    }
    return NextResponse.json({ authenticated: false, error: 'Invalid PIN code' }, { status: 401 });
  } catch {
    return NextResponse.json({ error: 'Auth failed' }, { status: 500 });
  }
}
