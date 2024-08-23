import React from 'react'
import { useDispatch } from 'react-redux'
import Service from '../../appWrite/config'
import { Logout} from '../../../Store/authSlice'
import service from '../../appWrite/config';

function Logout() {
  const dispacth= useDispatch();
  const logoutHandler =()=>{
    service.Logout().then(()=>{
      dispacth(Logout())
    })
  }
  return (
   <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
   >Logout</button>
  )
}

export default Logout