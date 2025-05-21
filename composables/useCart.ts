const CART_KEY = 'cart'

export function useCart() {
    const cart = useState<any[]>('cart', () => {
        if (import.meta.client && localStorage.getItem(CART_KEY)) {
            return JSON.parse(localStorage.getItem(CART_KEY)!)
        }
        return []
    })

    if (import.meta.client) {
        watch(
            cart,
            (newVal) => {
                localStorage.setItem(CART_KEY, JSON.stringify(newVal))
            },
            { deep: true }
        )
    }

    const addToCart = (product: any) => {
        if (!cart.value.some((p) => p.key === product.key)) {
            cart.value.push(product)
        }
    }

    const removeFromCart = (key: string | number) => {
        cart.value = cart.value.filter((p) => p.key !== key)
    }

    const clearCart = () => {
        cart.value = []
    }

    const isInCart = (key: string | number) => cart.value.some((p) => p.key === key)

    return {
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        isInCart,
    }
}