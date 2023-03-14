import React from 'react';
import AddBreak from '../AddBreak/AddBreak';
import BreakTime from '../BreakTime/BreakTime';
import CompleteActivity from '../CompleteActivity/CompleteActivity';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import './Sidebar.css';

const Sidebar = ({studyTime}) => {
    return (
        <div>
            <div className="sidebar">
               <ProfileInfo></ProfileInfo>
               <AddBreak> </AddBreak>
               
               <ExerciseDetails studyTime={studyTime}></ExerciseDetails>
               <BreakTime></BreakTime>
               <CompleteActivity></CompleteActivity>
            </div>
            
        </div>
    );
};

export default Sidebar;