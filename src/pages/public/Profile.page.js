import React from 'react'
import { AiOutlineUser } from "react-icons/ai";
import { useSelector } from 'react-redux';

const ProfilePage = () => {
    const user = useSelector((state) => state.counter)
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <div className='w-6/12 flex flex-col justify-center'>
                <div className='w-full flex justify-center p-8'>
                    <label className='text-2xl font-bold text-center'>Profile</label>
                </div>
                <div className='w-full flex bg-neutral-200 rounded-2xl p-8'>
                    <div className='w-full flex flex-col space-y-2'>
                        <div className='flex flex-col'>
                            <label className='font-semibold text-lg text-gray-600'>Name</label>
                            <label className='font-bold text-xl text-gray-800'>{user.username}</label>
                        </div>
                        <div className='flex flex-col'>
                            <label className='font-semibold text-lg text-gray-600'>Alamat</label>
                            <label className='font-bold text-xl text-gray-800'>Pekanbaru</label>
                        </div>
                        <div className='flex flex-col'>
                            <label className='font-semibold text-lg text-gray-600'>No. Hp</label>
                            <label className='font-bold text-xl text-gray-800'>{user.hp}</label>
                        </div>
                        <div className='flex flex-col'>
                            <label className='font-semibold text-lg text-gray-600'>Email</label>
                            <label className='font-bold text-xl text-gray-800'>{user.email}</label>
                        </div>
                        <div className='flex flex-col'>
                            <label className='font-semibold text-lg text-gray-600'>Motto</label>
                            <label className='font-bold text-xl text-gray-800'>always trying to be better</label>
                        </div>
                    </div>
                    <div>
                        <div className='w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center'>
                            <AiOutlineUser className='w-10 h-10' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage