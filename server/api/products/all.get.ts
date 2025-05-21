export default defineEventHandler(async() => {

    const keys = await useStorage('db').getKeys();

    const products = await useStorage('db').getItems(keys);

    return products;
});