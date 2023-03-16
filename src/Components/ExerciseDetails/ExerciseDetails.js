import React from 'react';
import './ExerciseDetails.css';

const ExerciseDetails = ( {studyTime} ) => {
    return (
        <div className='mt-5'>
             <b className='m-3 '> Study Details</b>
             <div className='row mt-4 exercise-info d-flex'> 
                <div className="col-12 pt-2 ">
                    <p> <b className='me-4 fs-6'> Study Time: </b> <small> {studyTime} h</small></p>
                </div>
           
              
              

            </div>
            
        </div>
    );
};

export default ExerciseDetails;