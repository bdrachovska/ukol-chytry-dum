import React from 'react';
import { useState} from 'react';

import blindsClosed from './images/blinds-closed.svg';
import blindsOpen from './images/blinds-open.svg';

const Blinds= ({state}) => {
    const [stavZaluzie, setStavZaluzie]=useState(state);
    const handleClickOpen = () => {
    setStavZaluzie('open');
    }

    const handleClickClosed = () => {
        setStavZaluzie('closed');
    }
    return (
<div class="blinds">
				<div class="blinds__icon">
                    <img src={(stavZaluzie=== 'open') ? blindsOpen : blindsClosed}/>
				</div>
				<div class="blinds__name">
					Žaluzie
				</div>
				<div class="blinds__controls">
				<button className={(stavZaluzie=== 'open') ? "button button--active" : "button"} onClick={handleClickOpen}>Otevřeno</button>
				<button className={(stavZaluzie=== 'closed') ? "button button--active" : "button"} onClick={handleClickClosed}>Zavřeno</button>
				</div>
			</div>
            )
            };
export default Blinds;