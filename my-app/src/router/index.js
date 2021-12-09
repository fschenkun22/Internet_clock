
import Home from '../user/home'
import Settings from '../user/settings'
import NoPage from '../NoPage'

export const userRouters = [

    {
        path:'/user/home',
        element:<Home/>
    },

    {
        path:'/user/settings',
        element:<Settings/>
    },

    {
        path:'/404',
        element:<NoPage/>
    }

]