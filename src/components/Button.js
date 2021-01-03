import React from 'react';

const Button = (props) => {
    const handleClick = () => props.click();
    return <button onClick={handleClick}>{props.text} </button>;
}

export default Button;