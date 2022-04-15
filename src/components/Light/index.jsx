import React from 'react';
import { useState } from 'react';
import lightoff from './images/light-off.svg';
import lighton from './images/light-on.svg';

import './style.css';


const Light= ({name, state}) => {
    const [stateOn, setStateOn]=useState(state);

	const handleClick = () => {
		if (stateOn===('off'))
		{setStateOn('on')
	} else {
		setStateOn('off') 
	}
	  }
	return (
        <>
        <div className='light' onClick={handleClick}>
					<div className="light__icon">
						<img src={(stateOn===('off')) ? lightoff : lighton}/>
					</div>
					<div className="light__name">
						{name}
					</div>
				</div>
                </>
	)
};

export default Light;