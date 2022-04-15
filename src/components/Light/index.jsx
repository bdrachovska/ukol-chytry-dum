import React from 'react';
import { useState } from 'react';
import lightoff from './images/light-off.svg';
import lighton from './images/light-on.svg';

import './style.css';


const Light= ({name, state}) => {
    const [stav, setStav]=useState(state);

	const handleClick = () => {
		{(state===true) ? stav = false : stav = true}
	  }
	return (
        <>
        <div className='light' onClick={handleClick}>
					<div className="light__icon">
						<img src={(state===false) ? lightoff : lighton}/>
					</div>
					<div className="light__name">
						{name}
					</div>
				</div>
                </>
	)
};

export default Light;