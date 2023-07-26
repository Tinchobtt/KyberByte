import ItemListContainer from "../components/pages/itemList/ItemListContainer"
import ItemDetailContainer from "../components/pages/itemDetail/ItemDetailContainer"
import Cart from "../components/pages/cart/Cart"
import checkoutContainer from "../components/pages/checkout/checkoutContainer"

export const routes = [
    {
        id: 'home',
        path: '/',
        Element: ItemListContainer
    },
    {
        id: 'categort',
        path: '/category/:categoryName',
        Element: ItemListContainer
    },
    {
        id: 'detail',
        path: '/itemDetail/:id',
        Element: ItemDetailContainer
    },
    {
        id: 'cart',
        path: '/cart',
        Element: Cart
    },
    {
        id: 'checkout',
        path: '/checkout',
        Element: checkoutContainer
    }
]