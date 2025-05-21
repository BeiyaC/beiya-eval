export default defineNuxtRouteMiddleware(async(to, from) => {
    const token = useCookie('x-source');

    if (!token.value) {
        return navigateTo('/login');
    }

})