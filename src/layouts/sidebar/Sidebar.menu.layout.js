import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { BsTruck, BsHouseDoor, BsArrowRightCircle } from "react-icons/bs";

const SidebarLayout = ({handleLogOut}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    const menus = [
        {
            label: 'Dasboard',
            icon: (<BsHouseDoor className='w-8 h-8' />),
            url: '/dashboard'
        },
        {
            label: 'Shipping Comps',
            icon: (<BsTruck className='w-8 h-8' />),
            url: '/shipping-comps'
        }
    ]

    return (
        <div
            className="relative  top-0 w-80 left-0 z-40 transition-transform -translate-x-full sm:translate-x-0"
            ><div className='fixed bottom-0 left-0'>
                <span
                onClick={handleLogOut}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                    <BsArrowRightCircle className='text-gray-600 w-8 h-8' />
                    <span className="flex-1 ml-3 whitespace-nowrap">Shipping Comps</span>
                </span>
            </div>
            <div className="px-3 py-4 overflow-y-auto flex flex-col justify-between h-full bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    {
                        menus.map((value, index)=>{
                            if(pathname===value.url) document.title = value.label
                            return(
                                <li key={index}>
                                    <span
                                        onClick={()=>navigate(value.url)}
                                        className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:cursor-pointer dark:hover:bg-gray-700 group ${pathname===value.url?'text-primary-600':'text-gray-600'}`}
                                    >   
                                        {value.icon}
                                        <span className="ml-3">{value.label}</span>
                                    </span>
                                </li>
                            )
                        })
                    }
                </ul>
                
            </div>
            
        </div>
    )
}

export default SidebarLayout