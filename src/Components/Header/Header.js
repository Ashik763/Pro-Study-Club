import React from 'react';
import './Header.css';
import { FcReading } from 'react-icons/fc';
const Header = () => {
    return (
        <div className='header'>
           <h2>  <FcReading className='me-2'/>  Pro Study Club </h2>
        </div>
    );
};

export default Header;