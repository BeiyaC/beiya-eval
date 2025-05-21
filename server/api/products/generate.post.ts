import { faker } from '@faker-js/faker';
export default defineEventHandler(async() => {
    const limit = 200

    const products = Array.from({ length: limit }, () => ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        stock: faker.number.int({ min: 0, max: 10 }),
        image: faker.image.urlPicsumPhotos()
    }));

    products.map(product =>
        useStorage('db').setItem(product.id, product)
    )
    return { status: 'success' };
});