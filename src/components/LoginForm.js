import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';
const LoginForm = ({setisLoggedIN}) => {
    const[formData, setformData] = useState({email:"", password:""})
    const[showPassword, setshowPassword] = useState(false);
    const navigate = useNavigate();
    
      function changeHandler(event){
           setformData((prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value,
            }
           ))
      }

      function submitHandler(event){
        event.preventDefault();
        setisLoggedIN(true);
        navigate("/dashboard");
    }

    return (
   <form onSubmit={submitHandler}
   className='flex flex-col w-full gap-y-4 mt-6'>
    <label className='w-full'>
        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Email Address <sup className='text-pink-200'>*</sup>
        </p>
        <input
        required
        type='email'
        value={formData.email}
        onChange={changeHandler}
        placeholder='Enter email id'
        name='email' className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
        />
    </label>
    <label>
        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Password <sup className='text-pink-200'>*</sup>
        </p>
        <input
        required
        type={showPassword ? "text": "password"}
        value={formData.password}
        onChange={changeHandler}
        placeholder='Enter Password'
        name='password'  className='bg-richblack-800 rounded-[0.75rem] text-richblack-5 w-full p-[12px]'
        />
       
          <Link to ="#">
            <p className='text-xs mt-1 text-blue-100 ml-auto max-w-max'> Forgot Password </p>
          </Link>
    </label>
    <button type="submit" className=' bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[15px] py-[8px]' >
        Sign In
    </button>

   </form>
  )
}

export default LoginForm
