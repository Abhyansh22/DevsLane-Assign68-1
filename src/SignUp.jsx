import { useFormik } from 'formik'
import React from 'react'
import { PiShoppingCartThin } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import * as Yup from 'yup';

const SignUp = () => {
    function callSignUpApi(values){
        console.log("Sign in Api called with", values.username, values.email, values.password)
    }
    
    const Schema = Yup.object().shape({
        username: Yup.string()
            .min(5, 'Username must be at least 5 characters')
            .required('Username is required'),
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters long')
            .required('Password is required'),
        confirmPassword: Yup.string() 
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Please confirm your password')
    })
    
    const {handleBlur, touched, handleChange, handleSubmit, values, errors} = useFormik({
        initialValues: {
            email: "",
            username: "",
            password: "",
            confirmPassword: "" 
        },
        onSubmit: callSignUpApi,
        validationSchema: Schema
    })
    
    return (
        <div className='flex justify-center items-center w-full h-full bg-purple-700 py-20'>
            <form onSubmit={handleSubmit}>
                <div className='w-auto flex flex-col'>
                    <PiShoppingCartThin className='text-white text-[150px] ml-10 md:ml-18' />
                    
                    <input 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        name="email" 
                        type="email" 
                        placeholder='Email' 
                        className='border border-white mt-3 rounded bg-transparent text-white pl-3 h-12 w-80 placeholder-white/70'
                    />
                    {touched.email && errors.email && (
                        <div className='text-red-300 text-sm mt-1'>{errors.email}</div>
                    )}
                    
                    <input 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        name="username" 
                        type="text" 
                        placeholder='Username' 
                        className='border border-white mt-3 rounded bg-transparent text-white pl-3 h-12 w-80 placeholder-white/70' 
                    />
                    {touched.username && errors.username && (
                        <div className='text-red-300 text-sm mt-1'>{errors.username}</div>
                    )}
                    
                    <input 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        name="password" 
                        type="password" 
                        placeholder='Password' 
                        className='border border-white mt-3 rounded bg-transparent text-white pl-3 h-12 w-80 placeholder-white/70' 
                    />
                    {touched.password && errors.password && (
                        <div className='text-red-300 text-sm mt-1'>{errors.password}</div>
                    )}
                    
                    <input 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        name="confirmPassword" 
                        type="password" 
                        placeholder='Confirm Password' 
                        className='border border-white mt-3 rounded bg-transparent text-white pl-3 h-12 w-80 placeholder-white/70' 
                    />
                    {touched.confirmPassword && errors.confirmPassword && (
                        <div className='text-red-300 text-sm mt-1'>{errors.confirmPassword}</div>
                    )}
                    
                    <button 
                        type="submit"
                        className='bg-white hover:shadow-2xl hover:transition-shadow shadow-red-500/50 mb-5 w-80 h-10 rounded text-blue-700 mt-6 hover:bg-gray-100' 
                    >
                        Sign Up
                    </button>
                    
                    <div className='self-center text-white text-sm'>
                        <p>Already have an account? <Link to={"/login"} className='underline'>Login</Link></p>
                    </div>
                    
                    <Link to={'/'} className='text-white underline self-center mt-3'>Back to home!</Link>
                </div>
            </form>
        </div>
    )
}

export default SignUp