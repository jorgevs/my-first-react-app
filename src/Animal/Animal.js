import React from 'react';

const animal = (props) => {
    return (
        <div>
        <p>And I'm his mascot named {props.name} and I am
        {Math.floor(Math.random() * 30)} years old!  =)</p>
        <p>{props.children}</p>
        </div>
    );
    //When using class-based components, it's this.props
};

export default animal;
