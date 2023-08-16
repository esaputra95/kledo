import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom'
import { setUser } from '../redux/features/counter';

const PublicLayout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("user")??'')
        console.log({user});
        dispatch(setUser(user))
    }, [])
    return (
        <div className='w-full flex-col flex justify-center items-center'>
            <div className='w-full  flex justify-between h-14 items-center bg-blue-500 px-4'>
                <span className='text-2xl font-bold text-white'>KLEDO TES</span>
                <div className='flex h-full space-x-2'>
                    <div className='flex items-center justify-center px-4 h-full bg-black text-lg text-white'>
                        Profile
                    </div>
                    <div title='Dashbord' onClick={()=> navigate('/dashboard')} className='flex items-center justify-center h-full text-lg text-white hover:cursor-pointer hover:bg-blue-700 px-4'>
                    Dashbord
                    </div>
                </div>
            </div>   
            <Outlet />
        </div>
    )
}

export default PublicLayout