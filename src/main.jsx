import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/css/common.css'
import './assets/css/main.css'
import './assets/css/responsive.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Registration from './components/Registration.jsx'
import Login from './components/Login.jsx'
import Feed from './components/Feed.jsx'
import { Provider } from 'react-redux'
import store from './store.js'


const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<Registration/>
    },
    {
      path:'login',
      element:<Login/>
    },
    {
      path:'feed',
      element:<Feed/>
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
