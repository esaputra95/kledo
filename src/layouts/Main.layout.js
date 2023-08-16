
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import SidebarLayout from './sidebar/Sidebar.menu.layout'
import NavbarLayout from './navbar/Navbar.layout'
import { useDispatch } from 'react-redux'
import { setUser } from './../redux/features/counter';

const MainLayout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("user")??'')
        dispatch(setUser(user))
    }, [])
    
    const handleLogOut = () => {
        dispatch(setUser(''))
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        navigate('/login')
    }

    return (
        <div className='bg-slate-300'>
            <NavbarLayout />
            <div className='w-full bg-gray-300 h-full flex'>
                <SidebarLayout handleLogOut={handleLogOut} />
                <div className='mx-4 mt-4 rounded-t-3xl w-full bg-white'>
                    <Outlet />
                </div>
                
            </div>
        </div>
    )
}

export default MainLayout