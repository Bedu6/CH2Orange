import React from 'react';
import { Table } from 'react-materialize'


const Tabla = (props) => (
  <div>
    <Table hoverable striped>
      <thead>
        <tr>
          <th>Apellido paterno</th>
          <th>Apellido materno</th>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Ver</th>
          <th>Editar</th>
          <th>Borrar</th>
        </tr>
      </thead>
    
      <tbody>
        
        {props.desplegar}
      </tbody>
    </Table>
  </div>
);

export default Tabla;