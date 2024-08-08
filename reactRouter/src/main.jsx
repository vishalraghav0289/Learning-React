import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import{RouterProvider,createBrowserRouter} from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './About/About.jsx'
import Layout from './Layout/Layout.jsx'
import ContractUS from './Components/ContractUs/ContractUS.jsx'
import User from './Components/User/User.jsx'
import Github from './Components/Github/Github.jsx'



const router =createBrowserRouter([{
  path:'/',
  element: <Layout/>,
  children: [{
    path: "/",
    element:<Home/>
  },
{
  path:'About',
  element:<About/>
},
{
  path:'ContractUs',
  element: <ContractUS/>
},
{
  path: 'User/:id',
  element: <User/>
},
{
   path:'github',
   element:<Github/>
}
] 
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
