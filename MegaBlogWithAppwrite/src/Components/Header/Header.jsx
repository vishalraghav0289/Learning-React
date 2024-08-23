import React from 'react'
import {Logo,Logout, Contaner,   } from "../Index"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function Header() {
  const authStatus = useSelector((state)=>
    state.auth.status)

  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]
  return (
    <Header className="py-3 shadow bg-gray-500 ">
      <Contaner>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
            <Logo/>
            </Link>
            
          </div>
        </nav>

      </Contaner>
    </Header>
  )
}

export default Header