import React from 'react';
import { useState} from 'react';

const Blinds= ({state}) => {
    const [stavZaluzie, setStavZaluzie]=useState(state);
    const handleClickOpen = () => {
    setStavZaluzie('open');
    }

    const handleClickClosed = () => {
        setStavZaluzie('closed');
    }
<div class="blinds">
				<div class="blinds__icon">
					<img src="./images/blinds-open.svg">
				</div>
				<div class="blinds__name">
					Žaluzie
				</div>
				<div class="blinds__controls">
					<button class="button button--active">Otevřeno</button>
					<button class="button">Zavřeno</button>
				</div>
			</div>