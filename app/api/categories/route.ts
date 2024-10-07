import { getCategories } from '@/lib/microcms';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const categories = await getCategories();
    return NextResponse.json(categories);
  } catch (error) {
    console.error("カテゴリーの取得に失敗しました:", error);
    return NextResponse.json({ error: "カテゴリーの取得に失敗しました" }, { status: 500 });
  }
}