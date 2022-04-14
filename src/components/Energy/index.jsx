import React from 'react';



const Energy= ({electricity, water}) => {

	return (
<div class="energy">
				<div class="energy__source">
					<div class="energy__icon">
						<img src="./images/electricity.svg"/>
					</div>
					<div class="energy__consumption">
						<div class="energy__description">Elektřina</div>
						<div class="energy__value">{electricity} kW</div>
					</div>
				</div>
				<div class="energy__source">
					<div class="energy__icon">
						<img src="./images/water.svg"/>
					</div>
					<div class="energy__consumption">
						<div class="energy__description">Voda</div>
						<div class="energy__value">{water} m<sup>3</sup></div>
					</div>
				</div>
                </div>
	)
};



export default Header;