import React from 'react';
import { Icon } from 'react-materialize';


const Fatal = (props) => (
	<div className='red-text center-align'>
		<Icon  large>error</Icon>
		<br />
		<h2>
			{ props.mensaje }
		</h2>
	</div>
);

export default Fatal;
