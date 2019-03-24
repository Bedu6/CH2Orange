import React from 'react';
import { Table } from 'react-materialize';

const Tabla = (props) => (
	<div className='center-align'>
		<Table  hoverable striped>

  		<thead>
    			<tr>
			      <th>Nombre          </th>
			      <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            <th>Edad            </th>
            <th>Acciones        </th>
    			</tr>
 			</thead>

  		<tbody>
    			{ props.desplegar() };
  		</tbody>
  			
		</Table>
	</div>
);

export default Tabla;
