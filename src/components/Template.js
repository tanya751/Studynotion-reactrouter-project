import React from 'react'
import frameImage from '../assets/frame.png'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import { FcGoogle } from "react-icons/fc";

const Template = ({title, desc1, desc2, image, formtype, setisLoggedIN}) => {
  return (
    <div className='flex w-11/12 max-w-[960px] py-12 mx-auto gap-x-12 gap-y-0 justify-between h-[100px]'>
      <div className='w-11/12 max-w-[450px] mx-0 text-white -mt-6 '>
         <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
         <p className='text-[1.125rem] leading-[1.625rem]'>
            <span className='text-richblack-100'>{desc1}</span><br/>
            <span className='text-blue-100 italic'>{desc2}</span>
         </p>
         {formtype === "signup"
         ? <SignUpForm setisLoggedIN={setisLoggedIN}/> :
         <LoginForm setisLoggedIN={setisLoggedIN}/>}
         <div className='flex w-full items-center my-4 gap-x-2'>
         <div className='h-[1px] w-full bg-richblack-700 '></div>
         <div className='text-richblack-700 font-medium leading-[1.375rem]'>OR</div>
         <div className='h-[1px] w-full bg-richblack-700 '></div>
         </div>
         <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border 
         border-richblack-700 px-[12px] gap-x-2 py-[8px] mt-4'>
         <FcGoogle/>
            <p>Sign Up with Google</p>
         </button>
         </div>
         <div className='relative w-11/12 max-w-[350px]'>
            <img src={frameImage} height={504} width={558} loading='lazy'></img>
            <img src={image} height={504} width={558} loading='lazy'
             className='absolute -top-4 right-4'></img>

         </div>
      </div>
  )
}

export default Template


