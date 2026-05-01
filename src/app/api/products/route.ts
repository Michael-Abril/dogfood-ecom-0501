import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const PRODUCTS = [
  { id: '1', name: 'Widget Pro', price: 2999, currency: 'usd' },
  { id: '2', name: 'Widget Basic', price: 999, currency: 'usd' },
];

export async function GET(req: NextRequest) {
  return NextResponse.json({ products: PRODUCTS, count: PRODUCTS.length });
}
