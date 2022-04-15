import React from 'react';
import {useState} from 'react';
import './style.css';

import temp from './images/temp.svg';

const Climate = ({temperature, humidity}) => {
    const [tempChange, setTempChange] = useState(temperature)

    return (
			<div className="climate">
				<div className="climate__icon">
					<img src={temp} />
				</div>
				<div className="climate__content">
					<div className="climate__temperature">{tempChange}&deg;C</div>
					<div className="climate__humidity">Vlhost vzduchu {humidity}&nbsp;%</div>
				</div>
				<div className="climate__controls">
					<button onClick={() => {setTempChange(tempChange + 1)}} className="button" >+</button>
					<button onClick={() => {setTempChange(tempChange - 1)}} className="button" >-</button>
				</div>
			</div>
  );
};

export default Climate;