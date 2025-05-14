import { model, models, Schema } from 'mongoose';

const productSchema = new Schema({
    name: {
        type: String,
        require: [true, 'Must have name'],
    },
    price: {
        type: Number,
        require: [true, 'Must have price'],
    },
    image: {
        type: String,
        require: [true, 'Must have image'],
    },
    description: {
        type: String,
        require: [true, 'Must have description'],
    },
});

const ProductModel = models?.Product || model('Product', productSchema);
export default ProductModel;
