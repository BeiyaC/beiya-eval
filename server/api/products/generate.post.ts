import { faker } from '@faker-js/faker';
export default defineEventHandler(async() => {
    const limit = 200

    const products = Array.from({ length: limit }, () => ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: +faker.commerce.price(),
        category: faker.commerce.department(),
        image: faker.image.urlPicsumPhotos(),
        createdAt: faker.date.past().toISOString(),
        updatedAt: faker.date.recent().toISOString(),
    }));

    products.map(product =>
        useStorage('db').setItem(product.id, product)
    )
    return { status: 'success' };
});