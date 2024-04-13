import React, { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
const SignUpForm = (props) => {
  const setisLoggedIN = props.setisLoggedIN;

    const[formData,setformData] = useState({
        firstName :"",
        lastName:"", email:"", password:"",confirmPassword:""

    })
      const[showPassword,setshowPassword] = useState(false);  
      const[showConfirmPassword,setshowConfirmPassword] = useState(false);  

      const[accountType, setaccountType] = useState("student");
      const navigate = useNavigate();
      function changeHandler(event) {
        setformData([
          (prev) => [
            {
              ...prev,
              [event.target.name]: event.target.value,
            },
          ],
        ]);
      }
      function submitHandler(event){
            event.preventDefault();
            if(formData.password !== formData.confirmPassword){
              toast.error("Password not matched");
              return;
            }
            setisLoggedIN(true);
            toast.success("Account created");
            const accountData ={
              ...formData,
            };
            const finalData = {
              ...accountData,
              accountType
            }
            console.log("Printing Final Account data");
            console.log(finalData);
            navigate("/dashboard");
      }
    
  return (
    <div>
      {/* student-instructor tab */}
      <div className='flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max'>
       <button className={`${accountType ==="student" ?
       "bg-richblack-900 text-richblack-5"
       :"bg-transparent text-richblack-200 "} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={() => setaccountType("student")}>
            Student
        </button>
        <button className={`${accountType ==="instructor" ?
       "bg-richblack-900 text-richblack-5"
       :"bg-transparent text-richblack-200 "} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={() => setaccountType("instructor")}>
            Instructor
        </button>
      </div>      
      <form onSubmit={submitHandler}>
      <div className='flex gap-x-4 mt-4'>
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First name 
            <sup className='text-pink-200'>*</sup></p>
            <input
            required
                type='text'
                name='firstname'
                onChange={changeHandler}
                placeholder='Enter First name'
                value={formData.firstName}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
        </label>
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last name 
            <sup className='text-pink-200'>*</sup></p>
            <input
            required
                type='text'
                name='lastname'
                onChange={changeHandler}
                placeholder='Enter Last name'
                value={formData.lastName}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
        </label>
        </div>
        <div className='mt-4'>
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>Email Address 
            <sup className='text-pink-200'>*</sup></p>
            <input
            required
                type='email'
                name='email'
                onChange={changeHandler}
                placeholder='Enter email id'
                value={formData.email}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
        </label>
        </div>
       <div className='flex gap-x-4 mt-4'>
       {/* Password */}
       <label className='relative w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password 
            <sup className='text-pink-200'>*</sup></p>
            <input
            required
                type={showPassword ? ("text") : ("password")}
                name='password'
                onChange={changeHandler}
                placeholder='Enter Password'
                value={formData.password}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
            <span onClick={() => setshowPassword(!showPassword)} className="absolute right-3 top-[38px] cursor-pointer ">
                    {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
                </span>
            
        </label>
       {/* Confirm Password */}
       <label className='relative w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password 
            <sup className='text-pink-200'>*</sup></p>
            <input
            required
                type={showConfirmPassword ? ("text") : ("password")}
                name='confirmPassword'
                onChange={changeHandler}
                placeholder='Enter password again'
                value={formData.confirmPassword}
                className='bg-richblack-800 rounded-[0.5rem]  w-full p-[12px]'
            />
            <span onClick={() => setshowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-[38px] cursor-pointer ">
                    {showConfirmPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
                </span>
            
        </label>
       </div>
       <button className='bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 w-full'>Create Account</button>
      </form>
    
    </div>
  )
}

export default SignUpForm
