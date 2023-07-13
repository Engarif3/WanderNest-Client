import React from 'react';
import logo from "../../../assets/images/logo.png"
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link>
        <div className='flex'>
            <img className='hidden md:block animate-spin' src={logo} alt="logo" width="30" />
            <p  className='text-xl p-0 italic pl-2 text-orange-600 font-extrabold'>Dream-Home</p>
        </div>
        </Link>
    );
};

export default Logo;