import React, { useEffect, useState } from 'react';
import './App.css';
import Main from './Components/Main/Main';
import Sidebar from './Components/Sidebar/Sidebar';
import Subjects from './Components/Subjects/Subjects';
import Header from './Components/Header/Header';
import Subject from './Components/Subject/Subject';

function App() {
  const [subjects,setSubjects] = useState([]);
  const [studyTime,setStudyTime] = useState(0);

    useEffect(()=>{
        fetch('info.JSON')
        .then(res => res.json())
        .then(res => setSubjects(res))
    },[subjects]);

    const handleAddtoList = (obj)=> {
        setStudyTime(studyTime+obj.time_required);
        

    }
  return (
    <div className='app'> 
      <div className="main">
        <div className="main-content container">
        <Header></Header>
        <div> 
                  <div className='m-3'>
                <h5>Select today's exercise.  </h5>
                <div className='row subjects'>
                    {
                        subjects.map(subject => <Subject key={subject.id} subject={subject} handleAddtoList={handleAddtoList} ></Subject>)
                    }
               
                </div>
              
            </div>
           


        </div>
        </div>
      </div>
      <div className="sidebar">
          <Sidebar studyTime={studyTime} ></Sidebar>
      </div>
   
        {/* <Main></Main> */}
        {/* <Sidebar> </Sidebar> */}

    </div>

  
  );
}

export default App;
