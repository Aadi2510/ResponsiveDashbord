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
import AddPurchases from './pages/AddPurchases.jsx'
import EditPurchases from './pages/EditPurchases.jsx'
import Damages from './pages/Damages.jsx'
import ViewDamages from './pages/ViewDamages.jsx'
import Stock from './pages/Stock.jsx'
import EditDamages from './pages/EditDamages.jsx'
import ViewPurchases from './pages/ViewPurchases.jsx'
import ProductsVariation from './pages/ProductsVariation.jsx'
import AddVariationProducts from './pages/AddVariationProducts.jsx'
import EditVariationProducts from './pages/EditVariationProducts.jsx'
import OfferAddProducts from './pages/OfferAddProducts.jsx'
import AddDamages from './pages/AddDamages.jsx'
import POS from './pages/POS.jsx'
import POSAddCustomers from './pages/POSAddCustomers.jsx'
import Administrators from './pages/Administrators.jsx'
import ProductsCategory from './pages/ProductsCategory.jsx'
import PurchasesCategory from './pages/PurchasesCategory.jsx'
import AddAdministrators from './pages/AddAdministrators.jsx'
import EditAdministrators from './pages/EditAdministrators.jsx'
import ViewAdministrators from './pages/ViewAdministrators.jsx'
import Address from './pages/Address.jsx'
import AddressCategory from './pages/AddressCategory.jsx'
import EditAddress from './pages/EditAddress.jsx'
import Customers from './pages/Customers.jsx'
import AddCustomers from './pages/AddCustomers.jsx'
import ViewCustomers from './pages/ViewCustomers.jsx'
import CustomersAddress from './pages/CustomersAddress.jsx'
import CustomersCategory from './pages/CustomersCategory.jsx'
import EditCustomers from './pages/EditCustomers.jsx'
import EditCustAddress from './pages/EditCustAddress.jsx'
import Employees from './pages/Employees.jsx'
import AddEmployees from './pages/AddEmployees.jsx'
import ViewEmployees from './pages/ViewEmployees.jsx'
import EmployeesAddress from './pages/EmployeesAddress.jsx'
import EmpAddCategory from './pages/EmpAddCategory.jsx'
import EditEmployees from './pages/EditEmployees.jsx'
import SalesReport from './pages/SalesReport.jsx'
import ProductsReport from './pages/ProductsReport.jsx'
import POSOrders from './pages/POSOrders.jsx'
import Settings from './pages/Settings/Settings.jsx'
import ViewPOSOrders from './pages/ViewPOSOrders.jsx'
import EditPermissions from './pages/Settings/EditPermissions.jsx'
import AddCountries from './pages/Settings/Countries/AddCountries.jsx'
import EditCountries from './pages/Settings/Countries/EditCountries.jsx'
import AddStates from './pages/Settings/States/AddStates.jsx'
import EditStates from './pages/Settings/States/EditStates.jsx'
import AddCities from './pages/Settings/Cities/AddCities.jsx'
import EditCities from './pages/Settings/Cities/EditCities.jsx'
import AddCurrencies from './pages/Settings/Currencies/AddCurrencies.jsx'
import EditCurrencies from './pages/Settings/Currencies/EditCurrencies.jsx'
import AddProductCategories from './pages/Settings/ProductCategories/AddProductCategories.jsx'
import EditProductCategories from './pages/Settings/ProductCategories/EditProductCategories.jsx'
import ParentCategory from './pages/Settings/ProductCategories/ParentCategory.jsx'
import AddProductAttributes from './pages/Settings/ProductAttributes/AddProductAttributes.jsx'
import EditProductAttributes from './pages/Settings/ProductAttributes/EditProductAttributes.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <> 


    <Route path='/' element={<Login/>}>
    </Route>


      <Route path='/admin' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/admin/products' element={<Products/>} />
        <Route path='/admin/products/addproducts' element={<AddProducts/>} />
        <Route path='/admin/products/productsCategory' element={<ProductsCategory/>} />
        <Route path='/admin/products/editproducts' element={<EditProducts/>} />
        <Route path='/admin/products/viewproducts' element={<ViewProducts/>} />
        <Route path='/admin/products/viewproducts/variation' element={<ProductsVariation/>} />
        <Route path='/admin/products/viewproducts/variation/addvariation' element={<AddVariationProducts/>} />
        <Route path='/admin/products/viewproducts/variation/editvariation' element={<EditVariationProducts/>} />
        <Route path='/admin/products/viewproducts/offer' element={<OfferAddProducts/>} />
        <Route path='/admin/purchases' element={<Purchases/>} />
        <Route path='/admin/purchases/addpurchases' element={<AddPurchases/>} />
        <Route path='/admin/purchases/purchasesCategory' element={<PurchasesCategory/>} />
        <Route path='/admin/purchases/viewpurchases' element={<ViewPurchases/>} />
        <Route path='/admin/purchases/editpurchases' element={<EditPurchases/>} />
        <Route path='/admin/damages' element={<Damages/>} />
        <Route path='/admin/damages/add' element={<AddDamages/>} />
        <Route path='/admin/damages/view' element={<ViewDamages/>} />
        <Route path='/admin/damages/edit' element={<EditDamages/>} />
        <Route path='/admin/stock' element={<Stock/>} />
        <Route path='/admin/pos' element={<POS/>} />
        <Route path='/admin/pos/addcustomers' element={<POSAddCustomers/>} />
        <Route path='/admin/posOrders' element={<POSOrders/>} />
        <Route path='/admin/posOrders/viewposorders' element={<ViewPOSOrders/>} />
        <Route path='/admin/administrators' element={<Administrators/>} />
        <Route path='/admin/administrators/addadministrators' element={<AddAdministrators/>} />
        <Route path='/admin/administrators/editadministrators' element={<EditAdministrators/>} />
        <Route path='/admin/administrators/viewadministrators' element={<ViewAdministrators/>} />
        <Route path='/admin/administrators/viewadministrators/addAddress' element={<Address/>} />
        <Route path='/admin/administrators/viewadministrators/editAddress' element={<EditAddress/>} />
        <Route path='/admin/administrators/viewadministrators/addCategory' element={<AddressCategory/>} />
        <Route path='/admin/customers' element={<Customers/>} />
        <Route path='/admin/customers/addcustomers' element={<AddCustomers/>} />
        <Route path='/admin/customers/viewcustomers' element={<ViewCustomers/>} />
        <Route path='/admin/customers/editCustomers' element={<EditCustomers/>} />
        <Route path='/admin/customers/viewcustomers/customersaddress' element={<CustomersAddress/>} />
        <Route path='/admin/customers/viewcustomers/editsaddress' element={<EditCustAddress/>} />
        <Route path='/admin/customers/viewcustomers/addcategory' element={<CustomersCategory/>} />
        <Route path='/admin/employees' element={<Employees/>} />
        <Route path='/admin/employees/addemployees' element={<AddEmployees/>} />
        <Route path='/admin/employees/viewemployees' element={<ViewEmployees/>} />
        <Route path='/admin/employees/editemployees' element={<EditEmployees/>} />
        <Route path='/admin/employees/viewemployees/employeesaddress' element={<EmployeesAddress/>} />
        <Route path='/admin/employees/viewemployees/employeesaddress/addresscategory' element={<EmpAddCategory/>} />
        <Route path='/admin/salesReport' element={<SalesReport/>} />
        <Route path='/admin/productsReport' element={<ProductsReport/>} />
        <Route path='/admin/settings' element={<Settings/>} />
        <Route path='/admin/settings/addCountries' element={<AddCountries/>} />
        <Route path='/admin/settings/editCountries' element={<EditCountries/>} />
        <Route path='/admin/settings/addStates' element={<AddStates/>} />
        <Route path='/admin/settings/editStates' element={<EditStates/>} />
        <Route path='/admin/settings/addCities' element={<AddCities/>} />
        <Route path='/admin/settings/editCities' element={<EditCities/>} />

        <Route path='/admin/settings/addCurrencies' element={<AddCurrencies/>} />
        <Route path='/admin/settings/editCurrencies' element={<EditCurrencies/>} />
        <Route path='/admin/settings/addProductCategories' element={<AddProductCategories/>} />
        <Route path='/admin/settings/editProductCategories' element={<EditProductCategories/>} />
        <Route path='/admin/settings/parentCategory' element={<ParentCategory/>} />
        <Route path='/admin/settings/addProductAttributes' element={<AddProductAttributes/>} />
        <Route path='/admin/settings/editProductAttributes' element={<EditProductAttributes/>} />


        
        <Route path='/admin/settings/permissions' element={<EditPermissions/>} />
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
