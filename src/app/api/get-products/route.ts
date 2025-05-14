import dbConfig from '@/lib/dbConfig';
import ProductModel from '@/models/product.model';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        await dbConfig();

        const products = await ProductModel.find().sort({ createdAt: -1 });

        return NextResponse.json({ success: true, data: products });
    } catch (error) {
        console.error((error as Error).message);
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
    }
}
