import React from 'react';
import { Table } from 'react-materialize';

const UsersTable = (props) => (
    <div
        s = { 12 }
        style = { { overflowX : 'auto' } }
    >
        <Table bordered hoverable>
            <thead>
                <tr>
                    <th>Apellido Paterno</th>
                    <th>Apellido Materno</th>
                    <th>Nombre(s)</th>
                    <th>Edad</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                { props.rows }
            </tbody>
        </Table>
    </div>
);

export default UsersTable;