import React, { Component } from 'react';
import './App.css';
import ReactDOM from "react-dom";
import Animal from './Animal/Animal'
import Person from './Person/Person'

var app = (
    <div>
        <Person name="Max" age="12"/>
        <h1><Animal animalName="Tobby"/></h1>
        <br/>
        <Person name="Didier" age="19"/>
        <h1><Animal animalName="Buppys"/></h1>
    </div>
);

ReactDOM.render(app, document.getElementById('root'));

