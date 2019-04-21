import React from 'react';
import { Link } from 'react-router-dom';

const DependentsAddButton = (props) => (
    <div>
        <Link
            icon = "add"
            to = { `/users/${ props.userId }/dependents/new` }
            className = "btn waves-effect waves-light btn-large btn-floating left-space red"
        >
            <i className = "material-icons">add</i>
        </Link>
    </div>
);

export default DependentsAddButton;