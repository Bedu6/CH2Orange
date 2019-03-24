import React from 'react';
import { Table } from 'react-materialize';

const UsersTable = (props) => (
    <div>
        <Table bordered hoverable>
            <thead>
                <tr>
                    <th>Apellido Paterno</th>
                    <th>Apellido Materno</th>
                    <th>Nombre(s)</th>
                    <th>Edad</th>
                    <th>Ver</th>
                    <th>Editar</th>
                    <th>Borrar</th>
                </tr>
            </thead>
            <tbody>
                { props.rows }
            </tbody>
        </Table>
    </div>
);

export default UsersTable;