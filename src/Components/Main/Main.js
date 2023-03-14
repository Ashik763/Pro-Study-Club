import React from 'react';
import './Main.css';
import Header from '../Header/Header';
import Subjects from '../Subjects/Subjects';

const Main = () => {
    return (
        <div className='main'>
            <div className="main-content container">
            <Header></Header>
            <Subjects></Subjects>
            </div>
         
            
        </div>
    );
};

export default Main;