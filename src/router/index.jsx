import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import Profile from '../pages/profile'
import Articles from '../pages/articles'
import Photos from '../pages/photos'
import Skills from '../pages/skills'

let router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children:[
            {
                path: '/profile',
                element: <Profile />,
            },
            {
                path: '/articles',
                element: <Articles />,
            },
            {
                path: '/photos',
                element: <Photos />,
            },
            {
                path: '/skills',
                element: <Skills />,
            }
        ]
    }
])

export default router 