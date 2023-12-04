import './App.css';
import Leftbar from './components/Leftbar/Leftbar';
import Navbar from './components/Navbar/Navbar';
import Rightbar from './components/RightBar/Rightbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider
} from "react-router-dom";
import Profile from './pages/profile/Profile';
import { useContext } from 'react';
import { AuthContext } from './context/auth';
import Sample from './pages/samples/Sample';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


function App() {
  const {cuser}=useContext(AuthContext);

  const ProtectedRoute=({children})=>{
      if(!cuser){
        return <Navigate to={'/login'} />
      }
      return children
  }

  const Layout=()=>{
    return (
      <QueryClientProvider client={queryClient}>
      <div>
        <Navbar/>
        <div style={{display:'flex'}}>
          <Leftbar />
          <div style={{flex:6}}>
          <Outlet /> 
          </div>
          <Rightbar />
        </div>
      </div>
      </QueryClientProvider>
    )
  }

  const router=createBrowserRouter([
    {
      path:'/',
      element:<ProtectedRoute><Layout /></ProtectedRoute>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/profile/:id',
          element:<Profile />
        }
      ]
    },
    {
      path:'/sample',
      element:<Sample/>
    },
    {
      path:'/login',
      element:<Login />
    },
    {
      path:'/register',
      element:<Register />
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
