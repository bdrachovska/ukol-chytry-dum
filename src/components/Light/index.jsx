import React from 'react';
import { useState } from 'react';
import lightoff from './images/light-off.svg';
import lighton from './images/light-on.svg';

import './style.css';


const Light= ({name, state}) => {
    const [stav, setStav]=useState(state);
	const handleClick = () => {
		let novyStav 
		
		{stav === 'on' ? novyStav = 'off' : novyStav = 'on'}
	
		setStav(novyStav)
	  }
	return (
        <>
        <div className='light' onClick={handleClick}>
					<div className="light__icon">
						<img src={(state===off) ? lightoff : lighton}/>
					</div>
					<div className="light__name">
						{name}
					</div>
				</div>
                </>
	)
};

export default Light;