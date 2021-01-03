import React from 'react';

const Input = ({countMultiple, onChange}) => {

    // Emitting onchange of parent
    const onChangeHandler = onChange();

    return <input type="text" value={countMultiple} onChange={onChangeHandler}/>;
}

export default Input;