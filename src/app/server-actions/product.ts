import dbConfig from '@/lib/dbConfig';
import ProductModel from '@/models/product.model';

export async function getProducts() {
    try {
        await dbConfig();
        const products = await ProductModel.find().sort({ createdAt: -1 });
        return products;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}
