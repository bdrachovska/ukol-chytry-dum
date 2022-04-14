import React from 'react';
import Light from '../Light';

const Lights= ({lights}) => {

	return (
<div clasName="lights">
{
lights.map(
        light=> (
<Light key={light.name} name={light.name} state={light.state}/> ))}
</div>
);
};

export default Lights;