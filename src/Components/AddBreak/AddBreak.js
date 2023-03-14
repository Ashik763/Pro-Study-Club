import React from 'react';
import './AddBreak.css';

const AddBreak = () => {
    return (
        <div className='mt-5'>
            <b className='m-3'> Add a break</b>
            <div className='row mt-4 profile-info d-flex'> 
                <div className="col ">
                    <div className=' border p-1 bg-white rounded-4'>10</div>
                </div>
                <div className="col ">
                    <div className=' border p-1 bg-white rounded-4'>20</div>
                </div>
                <div className="col ">
                    <div className=' border p-1 bg-white rounded-4'>25</div>
                </div>
                <div className="col ">
                    <div className=' border p-1 bg-white rounded-4'>30</div>
                </div>
              

            </div>
        </div>
    );
};

export default AddBreak;