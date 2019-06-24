import React from 'react';

const animal = (props) => {
    return <p>And I'm his mascot named {props.name} and I am {Math.floor(Math.random() * 30)} years old!  =)</p>;
    //When using class-based components, it's this.props
};

export default animal;
