import React from 'react';
import { Table } from 'react-materialize';

const Tabla = (props) => (
	<div className='center-align'>
		<Table centered hoverable striped>

  		<thead>
    			<tr>
			      <th>Email</th>
			      <th>Contenido</th>
            <th>Acciones</th>
    			</tr>
 			</thead>

  		<tbody>
    			{ props.desplegar() };
  		</tbody>
  			
		</Table>
	</div>
);

export default Tabla;
