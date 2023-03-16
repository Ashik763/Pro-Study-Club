import React, { useEffect, useState } from 'react';
import AddBreak from '../AddBreak/AddBreak';
import BreakTime from '../BreakTime/BreakTime';
import CompleteActivity from '../CompleteActivity/CompleteActivity';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { GiHamburgerMenu } from 'react-icons/gi';
import './Sidebar.css';

const Sidebar = ({studyTime,setStudyTime}) => {  
    const [breakTime,setBreakTime] = useState(0);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAddBreak = (time) =>{
       setBreakTime(breakTime+time);
       localStorage.setItem('total-time',JSON.stringify(breakTime+time));
    }
    useEffect(()=>{
        let cur_break = localStorage.getItem('total-time');
        setBreakTime( JSON.parse(cur_break));
    },[breakTime])

    return (
        <div>
            <div className="sidebar">
                <div className="small-device">
                <Button variant="" onClick={handleShow} className="w-100 m">
                  <GiHamburgerMenu/>
                 </Button>
                <Offcanvas show={show} onHide={handleClose} placement='end' >
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <ProfileInfo></ProfileInfo>
               <AddBreak handleAddBreak={handleAddBreak}> </AddBreak>
               
               <ExerciseDetails studyTime={studyTime}></ExerciseDetails>
               <BreakTime breakTime={breakTime}></BreakTime>
               <CompleteActivity></CompleteActivity>
                    </Offcanvas.Body>
                </Offcanvas>
                </div>

                <div className="large-device">
                <ProfileInfo></ProfileInfo>
               <AddBreak handleAddBreak={handleAddBreak}> </AddBreak>
               
               <ExerciseDetails studyTime={studyTime}></ExerciseDetails>
               <BreakTime breakTime={breakTime}></BreakTime>
               <CompleteActivity setStudyTime={setStudyTime} setBreakTime={setBreakTime}  ></CompleteActivity>
                </div>
     
               
            </div>
            
        </div>
    );
};

export default Sidebar;