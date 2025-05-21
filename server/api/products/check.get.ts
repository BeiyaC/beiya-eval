export default defineEventHandler(async() => {
    const keys = await useStorage('db').getKeys();

    if (keys.length > 0) {
        return { status: 'no'}
    } else {
        return { status: 'ok' }
    }

});