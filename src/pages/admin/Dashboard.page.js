import React from 'react'
import HeaderContent from '../../components/Header.content'
import { useSelector } from 'react-redux';

const DashboardPages = () => {
    const user = useSelector((state) => state.counter.username)
    return (
        <div className='w-full'>
            <HeaderContent title="Dashbord" />
            <div className='flex max-h-screen items-center justify-center'>
                <div className='w-6/12 h-72 bg-gray-200 flex flex-col justify-center items-center mt-24 rounded-xl'>
                    <span className='text-2xl font-bold text-gray-500'>Selamat Datang</span>
                    <span className='text-xl font-bold text-gray-400'>{user??''}</span>
                </div>
            </div>
        </div>
    )
}

export default DashboardPages