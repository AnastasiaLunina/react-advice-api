import React from "react";

import empty from '../../img/heartempty.png';
import heart from '../../img/heart.png';


function Toggle({ active, handleChangeActive }) {
  return (
      <div>
        {active ? (<div>
                        <button
                        className='btn btn-like'
                        onClick={() => handleChangeActive()}>
                          <img src={heart} alt='heart' className='img-btn-small'/>
                        </button>
                    </div>) 
                : 
                  (<button className='btn btn-like'
                       onClick={() => handleChangeActive()}>
                        <img src={empty} alt='heart' className='img-btn-small'/>
                    </button>)}
      </div>
  );
}

export default Toggle;