import React from 'react'
import { FiPlus } from "react-icons/fi";

const HeaderShippingComps = (props) => {
    const { query, onChange, hanldeOpenModal } = props
    return (
        <div className='w-full h-16 flex items-center justify-between'>
            <div className='flex items-center'>
                <span className='text-xl font-semibold mr-8'>
                    Shipping Comps  
                </span>
                <span onClick={()=>hanldeOpenModal()} className='w-8 h-8 hover:cursor-pointer rounded-full flex items-center justify-center bg-blue-500'>
                    <FiPlus className='text-white h-6 w-6' />
                </span>
                
            </div>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input
                    type="text"
                    id="email-address-icon"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search..."
                    value={query}
                    onChange={onChange}
                />
            </div>
        </div>
    )
}

export default HeaderShippingComps