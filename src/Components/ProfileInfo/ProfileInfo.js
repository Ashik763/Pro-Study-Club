import React from 'react';
import './ProfileInfo.css';
import pp from './ab22.jpg';

const ProfileInfo = () => {
    return (
        <div> 
            <div className='p-2 row d-flex justify-content-center '> 
            <div className='col-md-4 col-sm-10 '> 
                <img className='img ' src={pp} alt="" />
            </div>
                
                <div className='col-md-7 pt-2'> 
                    <div><b> Ashik Ghosh</b> </div>
                    <div> <small> Sydney,Australia  </small></div>
                </div>
                
            </div>
            <div className='row mt-4 profile-info d-flex'> 
                <div className="col ">
                <div>75<small>kg</small>  </div>
                    <small> Weight</small>
                
                    
                </div>
                <div className="col border">
                   <div>6.7<small>ft</small>  </div>
                    <small> Height</small>

                    
                </div>
                <div className="col ">
                <div>22<small>yrs</small>  </div>
                    <small> Age</small>

                </div>

            </div>
        </div>
    );
};

export default ProfileInfo;