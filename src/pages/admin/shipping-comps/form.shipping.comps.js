import React from 'react'
import { Modal } from 'flowbite-react';
import { BsFillTrash3Fill, BsXLg } from "react-icons/bs";
import LoadingComponent from '../../../components/Loading.component';

const FormShippingComps = ({openModal, hanldeOpenModal, handleOnSave, register, handleSubmit, errors, isLoading, handleOnDelete, idDelete}) => {
    return (
        
        <Modal show={openModal} onClose={() => hanldeOpenModal(false)}>
            <form onSubmit={handleSubmit((data)=> handleOnSave(data))}>
                <div className='flex justify-between items-center'>
                    <div className='flex px-4 py-2 mx-2'>
                        <span className='font-bold text-xl'>Create Shipping Comps</span>
                        <span onClick={()=>handleOnDelete(idDelete)} className='w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white ml-4 hover:cursor-pointer'><BsFillTrash3Fill /></span>
                    </div>
                    <span className='hover:cursor-pointer hover:bg-gray-200 h-6 w-6 flex items-center justify-center rounded-md mr-4' onClick={()=>hanldeOpenModal(false)}>
                        <BsXLg className='text-gray-600' />
                    </span>
                </div>
                <Modal.Body>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Name 
                            </label>
                            <input {...register('name',
                                    {
                                        required: "Name is required"
                                    }
                                )} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                            {errors.name?.message && (
                                    <small className='text-red-500'>{errors.name.message}</small>
                                )}
                        </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className='flex w-full justify-between items-center'>
                        <button type={`${isLoading??'submit'}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Save
                        </button>
                        {
                            isLoading ? <LoadingComponent /> : null
                        }
                    </div>
                </Modal.Footer>
            </form>
        </Modal>
  )
}

export default FormShippingComps