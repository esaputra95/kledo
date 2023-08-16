import React from 'react'

const TableShippingComps = ({data, isFetching, hanldeOpenModal}) => {
    return (
        <div className='w-full mt-8'>
            <table className='w-full'>
                <thead>
                    <tr>
                        <th className='w-full text-left bg-neutral-200 text-xl font-semibold p-4 rounded-lg'>
                            Name
                        </th>
                    </tr>
                </thead>
                {
                    isFetching ? (
                        <div role="status" className="animate-pulse mt-4 w-full">
                            <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                            <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                            <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                        </div>
                    ):<tbody>
                    {
                        data && data.map((value)=>(
                            <tr key={value.id}>
                                <td  onClick={()=>hanldeOpenModal(value.id)} className='w-full hover:cursor-pointer  text-left border-b text-lg font-semibold text-neutral-500 p-4 rounded-lg'>
                                    {value.name}
                                </td>
                            </tr>
                        ))
                    }
                    
                </tbody>
                }
                
            </table>
        </div>
    )
}

export default TableShippingComps