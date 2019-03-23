import React from 'react';
import { Table } from 'react-materialize'


const Tabla = (props) => (
  <div>
    <Table hoverable striped>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Contenido</th>
          <th>Acciones</th>
        </tr>
      </thead>
    
      <tbody>
        
        {props.desplegar}
      </tbody>
    </Table>
  </div>
);

export default Tabla;