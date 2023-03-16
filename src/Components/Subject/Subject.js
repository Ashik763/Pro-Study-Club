import React from 'react';
import './Subject.css';
import phy from '../../images/physics.jpg'
const Subject = ({subject,handleAddtoList}) => {
    console.log(subject.img);
    return (
        <div className='col-md-4  p-2'>
            <div className="card" >
                {/* <img src={phy} className="card-img-top" alt="..."/> */}
                <img src={subject.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className='subject-name fw-bold'>{subject.name} </h4>
                    <div className="card-text subject-description">
                       {subject.description}
                    </div>
                    <p> <span className='fw-bold'>Time required:  </span> {subject.time_required} hours</p>
                    <button onClick={()=>handleAddtoList(subject)} type="button" class="btn btn-primary w-100">Add to list</button>

                </div>
            </div>
        </div>
    );
};

export default Subject;