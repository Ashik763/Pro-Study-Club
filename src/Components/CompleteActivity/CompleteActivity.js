import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CompleteActivity = ({setStudyTime,setBreakTime}) => {
    const notify = () => {toast('🎉 Successfully Completed', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    
    localStorage.setItem( 'total-study-hours',0);
    localStorage.setItem('total-time',0);
    setStudyTime(0);
    setBreakTime(0);
    
    }
    return (
        <div className='mt-3'>
           <button  onClick={notify} type="button" class="btn btn-success w-100">Activity Completed</button>
           <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <ToastContainer />

            
        </div>
    );
};

export default CompleteActivity;