import { getProducts } from '@/app/server-actions/product';
import Buy from '@/components/(home)/Buy';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';

export default async function HomePage() {
    const data = await getProducts();

    return (
        <section className="padding-x padding-y">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {data?.map(
                        (
                            product: {
                                _id: string;
                                image: string;
                                name: string;
                                price: number;
                            },
                            index: number
                        ) => (
                            <Card key={index} className="pt-0 overflow-hidden">
                                <CardHeader className="p-0">
                                    <figure className="relative aspect-square">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            priority
                                            className="object-cover"
                                        />
                                    </figure>
                                </CardHeader>
                                <CardContent>
                                    <h3 className="text-xl font-semibold text-primary">
                                        {product.name}
                                    </h3>
                                    <div className="flex items-center justify-between mt-4">
                                        <div className="text-muted-foreground mt-2">
                                            Price:{' '}
                                            <span className="font-bold text-gray-900">
                                                ${product.price}
                                            </span>
                                        </div>

                                        <Buy id={product._id} />
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}
