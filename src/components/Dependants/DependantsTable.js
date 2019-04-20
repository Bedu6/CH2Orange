import React from 'react';
import { Table } from 'react-materialize';

const DependantsTable = (props) => (
    <div>
        <Table bordered hoverable>
            <thead>
                <tr>
                    <th>Nombre Completo</th>
                    <th>Edad</th>
                    <th>Dependencia</th>
                    <th>Editar</th>
                    <th>&nbsp; &nbsp; &nbsp; Borrar</th>
                </tr>
            </thead>
            <tbody>
                { props.rows }
            </tbody>
        </Table>
    </div>
);

export default DependantsTable;