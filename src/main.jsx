import '@fortawesome/fontawesome-free/css/all.min.css';  // Add this line
import React, { lazy } from 'react'
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { Provider } from 'react-redux'
// import store from './store/store.js'
// import { createBrowserRouter } from 'react-router-dom'
// import { AuthLayout, Login } from './components/index.js'

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// import { AuthLayout, Login } from './components/index.js'
// import Error404 from './components/errors/Error404.jsx'
// import Home from './pages/Home.jsx'
// import AddPost from "./pages/AddPost.jsx";
// import Signup from './pages/Signup.jsx'
// import EditPost from "./pages/EditPost.jsx";
// import Post from "./pages/Post.jsx";
// import AllPosts from "./pages/AllPosts.jsx";
// import SearchedBlogs from './pages/SearchedBlogs.jsx'

// lazy loading
const AuthLayout = lazy(() => import('./components/index.js').then(module => ({ default: module.AuthLayout })));
const Login = lazy(() => import('./components/index.js').then(module => ({ default: module.Login })));
const Error404 = lazy(() => import('./components/errors/Error404.jsx'));
const Home = lazy(() => import('./pages/Home.jsx'));
const AddPost = lazy(() => import('./pages/AddPost.jsx'));
const Signup = lazy(() => import('./pages/Signup.jsx'));
const EditPost = lazy(() => import('./pages/EditPost.jsx'));
const Post = lazy(() => import('./pages/Post.jsx'));
const AllPosts = lazy(() => import('./pages/AllPosts.jsx'));
const SearchedBlogs = lazy(() => import('./pages/SearchedBlogs.jsx'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <Signup />
                </AuthLayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AllPosts />
                </AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
        {
            path: "search/:slug",
            element: <SearchedBlogs />,
        },
        {
            path: "*",
            element: <Error404 />,
        }
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
        <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
)
