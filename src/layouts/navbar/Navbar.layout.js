import React from 'react'
import { BiUser } from "react-icons/bi";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const NavbarLayout = () => {
    const navigate = useNavigate()
    const user = useSelector((state) => state.counter.username)
    return (
        <div className='w-full flex justify-between h-14 items-center bg-blue-500 px-4'>
            <span className='text-2xl font-bold text-white'>KLEDO TES ADMIN</span>
            <div title='Profile' onClick={()=> navigate('/profile')} className='flex items-center hover:cursor-pointer'>
                <span className='w-10 h-10 rounded-full bg-slate-400 flex items-center justify-center mr-2'>
                    <BiUser className='text-white h-8 w-8' />
                </span>               
                <span className='text-white text-lg'>{user??''}</span>
            </div>
        </div>   
    )
}

export default NavbarLayout