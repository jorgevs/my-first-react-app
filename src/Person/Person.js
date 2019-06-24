import React from 'react';

const person = (props) => {
    return (
        <div className="person">
            <p>I'm {props.name} and I am {props.age} years old!</p>
        </div>
    );
    //When using class-based components, it's this.props
};

export default person;
