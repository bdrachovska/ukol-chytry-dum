import React from 'react';
import {useState} from 'react';
import './style.css';

import temperature from './images/temp.svg';

const Climate = ({temperature, humidity}) => {
    const [teplota, setTeplota] = useState(temperature)

    const handleClickPlus = () => {
      setTeplota(teplota + 1)
    }

    const handleClickMinus = () => {
      setTeplota(teplota - 1)
    }

    return (
			<div className="climate">
				<div className="climate__icon">
					<img src={temperature} />
				</div>
				<div className="climate__content">
					<div className="climate__temperature">{teplota}&deg;C</div>
					<div className="climate__humidity">Vlhost vzduchu {humidity}&nbsp;%</div>
				</div>
				<div className="climate__controls">
					<button className="button" onClick={handleClickPlus}>+</button>
					<button className="button" onClick={handleClickMinus}>-</button>
				</div>
			</div>
  );
};

export default Climate;