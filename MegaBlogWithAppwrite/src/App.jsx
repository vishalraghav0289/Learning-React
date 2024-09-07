import { useState, useEffect } from 'react';
import './App.css';
import authService from "./appWrite/auth.js";
import { useDispatch } from 'react-redux';
import { login, logOut } from '../Store/authSlice.js';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from './Components/Index.js';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logOut());
        }
      })
      .catch((error) => {
        console.error('Error getting current user:', error);
      })
      .finally(() => setLoading(false));
  }, [authService, dispatch]);

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;