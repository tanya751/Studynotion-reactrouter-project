import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

function Navbar({ isLoggedIN, setisLoggedIN }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        setisLoggedIN(false);
        toast.success("Logged Out Successfully");
        // Redirect to the home page after logout
        navigate('/');
    };

    return (
        <div className='flex flex-row justify-evenly items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
            <Link to="/">
                <img src={logo} width={160} height={32} alt="Logo" loading='lazy' />
            </Link>
            <nav className='flex gap-5 text-richblack-100 gap-x-6'>
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
            </nav>
            <div className='flex gap-x-4 text-richblack-100'>
                {!isLoggedIN && (
                    <>
                        <Link to='/login'>
                            <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Log in</button>
                        </Link>
                        <Link to='/signup'>
                            <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Sign up</button>
                        </Link>
                    </>
                )}
                {isLoggedIN && (
                    <>
                        <button onClick={handleLogout} className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Log Out</button>
                        <Link to='/dashboard'>
                            <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Dashboard</button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}

export default Navbar;
