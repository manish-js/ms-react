import React, {Fragment} from 'react';

const Display = ({value = 0, msg = ''}) => {
    return (
        <Fragment>
            <p>{msg}</p>
            <h1> { value || '' } </h1>
        </Fragment>
    );
}

export default Display;