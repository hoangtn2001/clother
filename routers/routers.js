import { lazy } from "react"
const routers = [
    {
        path: '/',
        component : lazy(()=> import('@components/HomePage/HomePage')) 
    },
    {
        path: '/blog',
        component : lazy(()=> import('@components/BlogPage/Blog'))
    },
     {
        path: '/ourshop',
        component : lazy(()=> import('@pages/OurShop/OurShop'))
    },
    {
        path: '/cart',
        component : lazy(()=> import('@pages/Cart/Cart'))
    },
    {
        path: '/product/:id',
        component : lazy(()=> import('@pages/ProductDetail'))
    }
]
export default routers;