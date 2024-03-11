import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

import { countryList } from '../../../helpers'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createUserInfoAsync } from '../userSlice';
export default function UserDetails() {
    const {register, handleSubmit, formState : {errors}} = useForm();
    const dispatch = useDispatch();
    // Note : 
    // do not let user enter new email set value of email as the preveous value entered by user
    // and diasble input of email

    // const skipEventHandler = () => {
        // skip
        // navigate to home page
    // }

    // const onSubmitEventHandler = (e) => {
    //     e.preventDefault();

    //     // get data from form

    //     const userData = {
    //         firstName: e.target.firstName.value,
    //         lastName: e.target.lastName.value,
    //         email: e.target.email.value,
    //         country: e.target.country.value,
    //         streetAddress: e.target.streetAddress.value,
    //         city: e.target.city.value,
    //         state: e.target.state.value,
    //     }

    //     console.log("user data : ", userData);

        // save data in user data slice



        // post data in user data  model in backend


    
    return (
        <form className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" onSubmit={handleSubmit((data) => {
            dispatch(createUserInfoAsync({
                name : data.name,
                email : data.email,
                country : data.country,
                streetAddress : data.streetAddress,
                city : data.city,
                state : data.state
            }))
        })}>
            <div className="space-y-12">


                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                    {/* <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p> */}

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                First name
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    {
                                        ...register('name', {
                                            
                                        })
                                    }
                                    id="name"
                                   
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                       
                        <div className="sm:col-span-4">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    {
                                        ...register('email', {
                                          required: "email is required",
                                          pattern: {
                                            value: '/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi',
                                            message: 'email is not valid',
                                          },
                                        })
                                        }
                                    type="email"
                                   
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                Country
                            </label>
                            <div className="mt-2">
                                <select
                                    id="country"
                                    {
                                        ...register('country', {

                                        })
                                    }
                                   
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option disabled selected value=""> -- select country -- </option>

                                    {countryList.map((country) => (<option>{country}</option>))}

                                </select>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                Street address
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    {
                                        ...register('streetAddress',{

                                        })
                                    }
                                    id="streetAddress"
                                    
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                            <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                City
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    {
                                        ...register('city',{

                                        })
                                    }
                                    id="city"
                                    
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                State / Province
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    {
                                        ...register('state', {

                                        })
                                    }
                                    id="region"
                                    
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900" >
                    Skip
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </form>
    )
}
