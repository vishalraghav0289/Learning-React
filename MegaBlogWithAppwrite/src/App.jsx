import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import authService from"./appWrite/auth.js"
import { useDispatch } from 'react-redux'
import { login, logOut } from '../Store/authSlice.js'
import { Outlet } from 'react-router-dom'
import { Header,Footer } from './Components/Index.js'


function App() {

  const[loading, setloading]= useState(true);
  const dispacth = useDispatch();

    useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{
        if(userData){
          dispacth(login({userData}));
          
        }
        else{
          dispacth(logOut());
        }
    })
    .finally(()=>setloading(false));
    }, [])



  return !loading ? (<div className='min-h-screen   flex flex-wrap  content-between bg-gray-400'>
    <div className='w-full block'>
      <Header/>
      <main>
        {/*<Outlet/>    to do*/}
      </main>
      <Footer/>
      </div>
  </div>) : null;
}

export default App
