import React from 'react';
import { Table } from 'react-materialize';

const CommentsTable = (props) => (
    <div>
        <Table bordered hoverable>
            <thead>
                <tr>
                    <th>Email</th>
                    <th>Comment</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { props.rows }
            </tbody>
        </Table>
    </div>
);

export default CommentsTable;