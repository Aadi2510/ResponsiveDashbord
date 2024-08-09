import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Login from './components/Login.jsx'
import Layout from './components/Layout.jsx'
import Products from './pages/Products.jsx'
import Purchases from './pages/Purchases.jsx'
import Home from './pages/Home.jsx'
import AddProducts from './pages/AddProducts.jsx'
import Cpassword from './Profile/Cpassword.jsx'
import Edit from './Profile/Edit.jsx'
import EditProducts from './pages/EditProducts.jsx'
import ViewProducts from './pages/ViewProducts.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <> 
    
    <Route path='/' element={<Login/>}>
    </Route>


          <Route path='/admin' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/admin/products' element={<Products/>} />
            <Route path='/admin/purchases' element={<Purchases/>} />
            <Route path='/admin/products/addproducts' element={<AddProducts/>} />
            <Route path='/admin/products/editproducts' element={<EditProducts/>} />
            <Route path='/admin/products/viewproducts' element={<ViewProducts/>} />
            <Route path='/admin/profile/edit' element={<Cpassword />} />
            <Route path='/admin/profile/changePassword' element={<Edit />} />

          </Route>


    </>
 )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
