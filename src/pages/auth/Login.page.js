import { useForm } from 'react-hook-form';
import React, { useState } from 'react'
import { useLogin } from './../../hooks/login/useLogin';
import LoadingComponent from '../../components/Loading.component';
import { api } from '../../service';
import {  useDispatch } from 'react-redux';
import { setUser } from './../../redux/features/counter';
import { useNavigate } from 'react-router-dom';
import AlertComponent from '../../components/Alert.component';

const LoginPage = () => {
    const [alert, setAlert] = useState({status:false, message:'', type: ''})
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { mutate, isLoading } = useLogin({
		onSuccess: async (response)=> {
            api.defaults.headers = {
                Authorization: `Bearer ${response?.data?.data?.data?.access_token ?? ''}`
            };
            localStorage.setItem("token", response?.data?.data?.data?.access_token ?? '');
            localStorage.setItem("user", JSON.stringify(
                {
                    name: response?.data?.data?.user?.name ?? '',
                    hp: response?.data?.data?.user?.phone_number ?? '',
                    email: response?.data?.data?.user?.email ?? '',
                }
            ));
            dispatch(setUser({
                name: response?.data?.data?.user?.name ?? '',
                hp: response?.data?.data?.user?.phone_number ?? '',
                email: response?.data?.data?.user?.email ?? '',
            }))
            navigate('/dashboard');
		},
		onError: (error) => {
			setAlert({status:true, message:`${error}`, type:'failure'})
		}
	}) 
    return (
        <section className="bg-gray-50 w-6/12 dark:bg-gray-900">
            <AlertComponent alert={alert} />
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Login
                    </h1>
                    <form onSubmit={handleSubmit((data) => mutate(data))} className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
                                Your email
                            </label>
                            <input 
                                {...register('email',
                                    {
                                        required: "Email is required",
                                        validate: {
                                            matchPattern: (v) =>
                                            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                                            "Email address must be a valid address",
                                        },
                                    }
                                )} 
                                placeholder="name@company.com"
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                                {errors.email?.message && (
                                    <small className='text-red-500'>{errors.email.message}</small>
                                )}
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
                                Password
                            </label>
                            <input 
                                {...register('password', { required: "Password is required"})
                                }
                                type="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required="" />
                            {errors.email?.message && (
                                <small className='text-red-500'>{errors.email.message}</small>
                            )}
                        </div>
                        <div className="flex items-center justify-end">
                            <span className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                            >
                                Forgot password?
                            </span>
                        </div>
                        <button
                            type="submit"
                            className="w-full flex justify-center items-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            disabled={isLoading?true:false}
                        >
                            {isLoading?<LoadingComponent />:'Login'}
                        </button>
                    </form>
                </div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage