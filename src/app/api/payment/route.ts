import dbConfig from '@/lib/dbConfig';
import { stripe } from '@/lib/stripe';
import ProductModel from '@/models/product.model';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();

        await dbConfig();

        const product = await ProductModel.findById(data.id);

        if (!product) {
            return NextResponse.json(
                {
                    error: 'product not found',
                },
                {
                    status: 404,
                }
            );
        }

        const session = await stripe.checkout.sessions.create({
            ui_mode: 'embedded',
            line_items: [
                {
                    price_data: {
                        unit_amount: product.price * 100,
                        currency: 'usd',
                        product_data: {
                            name: product.name,
                            images: [product.image],
                        },
                    },
                    quantity: 1,
                },
            ],
            custom_fields: [
                {
                    key: 'location',
                    label: {
                        type: 'custom',
                        custom: 'Delivery Location',
                    },
                    type: 'text',
                },
            ],
            payment_method_types: ['card'],
            mode: 'payment',
            automatic_tax: {
                enabled: false,
            },
            return_url: `${req.headers.get(
                'referer'
            )}/payment-result?session_id={CHECKOUT_SESSION_ID}`,
        });

        return NextResponse.json({
            id: session.id,
            client_secret: session.client_secret,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error: 'Something went wrong',
            },
            {
                status: 500,
            }
        );
    }
}
