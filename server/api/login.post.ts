export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { password } = body
    const config = useRuntimeConfig()

    const validPassword = config.secret

    if (password === validPassword) {
        setCookie(event, 'x-source', 'good', {
            maxAge: 60 * 60 * 24
        })
        return { success: true }
    } else {
        return { success: false }
    }
})