import React, { useEffect, useState } from 'react';
import './Subjects.css';
import Subject from '../Subject/Subject';
import Sidebar from '../Sidebar/Sidebar';

const Subjects = () => {
   const [subjects,setSubjects] = useState([]);
    let totalStudyTime = localStorage.getItem('total-study-hours');
    useEffect(()=>{
        fetch('info.JSON')
        .then(res => res.json())
        .then(res => setSubjects(res))
    },[subjects]);

    // useEffect(()=>{
    //     fetch('info.JSON')
    //     .then( res => res.json() )
    //     .then(res => setSubjects([]))
    // },[totalStudyTime]);

    const handleAddtoList = (id) => {
        console.log(id);

    }
    return (
        <div> 
              <div className='m-3'>
            <h5>Select today's exercise.  </h5>
            <div className='row subjects'>
                {
                    subjects.map(subject => <Subject key={subject.id} subject={subject} handleAddtoList={handleAddtoList} ></Subject>)
                }
           
            </div>
          
        </div>
        {/* <div>
            <Sidebar></Sidebar>
        </div> */}


        </div>
      
    );
};

export default Subjects;