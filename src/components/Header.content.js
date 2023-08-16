import React from 'react'

const HeaderContent = ({title}) => {
    return (
        <div className='w-full h-16 flex items-center'>
            <span className='ml-4 text-xl font-semibold'>
                {title}
            </span>
        </div>
    )
}

export default HeaderContent