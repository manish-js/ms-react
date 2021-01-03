import React from 'react';

const Button = ({click, text}) => {
    const handleClick = () => click();
    return <button onClick={handleClick}>{text} </button>;
}

export default Button;