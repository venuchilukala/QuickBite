import {createBrowserRouter} from 'react-router-dom'
import Main from '../layout/Main';
import Home from '../pages/home/Home';
import Menu from '../pages/shop/Menu';
import Signup from '../components/Signup';
import UpdateProfile from '../pages/dashboard/UpdateProfile';
import CartPage from '../pages/shop/CartPage';
import DashboardLayout from '../layout/DashboardLayout';
import Dashboard from '../pages/dashboard/admin/Dashboard';
import Users from '../pages/dashboard/admin/Users';
import Login from '../components/Login';
import AddMenu from '../pages/dashboard/admin/AddMenu';
import ManageItems from '../pages/dashboard/admin/ManageItems';
import UpdateMenu from '../pages/dashboard/admin/UpdateMenu';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children : [
        {
            path : "/",
            element: <Home/>
        },
        {
          path : '/menu',
          element : <Menu/>
        },
        {
          path : '/cart-page',
          element : <CartPage/>
        },
        {
          path : '/update-profile',
          element : <UpdateProfile/>
        }
      ]
    },
    {
      path : "/signup",
      element : <Signup/>
    }, 
    {
      path : "/login",
      element: <Login/>
    },
    {
      path : "/dashboard",
      element: <DashboardLayout/>,
      children : [
        {
          path: '',
          element: <Dashboard/>
        },
        {
          path: 'users',
          element: <Users/>
        },
        {
          path: 'add-menu',
          element: <AddMenu/>
        },
        {
          path: 'manage-items',
          element: <ManageItems/>
        },
        {
          path: 'update-menu/:id',
          element: <UpdateMenu/>,
          loader : ({params}) => fetch(`http://localhost:6001/menu/${params.id}`)
        }
      ]
    }
  ]);

export default router