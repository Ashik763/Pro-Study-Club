import React from 'react';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import './BreakTime.css';

const BreakTime = ({breakTime,...props}) => {
    console.log(typeof(props));
    return (
        <div className='mt-1'>
      
        <div className='row exercise-info d-flex'> 
           <div className="col-12 pt-2 ">
               <p> <b className='me-4 fs-6'> Break Time: </b> <small> {breakTime } min</small></p>
           </div>
      
         
         

       </div>
       
   </div>

      
    );
};

export default BreakTime;