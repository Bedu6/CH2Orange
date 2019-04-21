import React from 'react';
import { Table } from 'react-materialize';

const DependentsTable = (props) => (
    <div
        s = { 12 }
        style = { { overflowX : 'auto' } }
    >
        <Table bordered hoverable>
            <thead>
                <tr>
                    <th>Nombre Completo</th>
                    <th>Edad</th>
                    <th>Tipo de Dependencia</th>
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

export default DependentsTable;