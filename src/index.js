import React from 'react';
import './App.css';
import ReactDOM from "react-dom";

function App(props) {
  return (
    <div className="person">
        <h1>{props.name}</h1>
        <h1>{props.age}</h1>
    </div>
  );
}

var app = (
    <div>
        <App name="Max" age="12"/>
        <App name="Didier" age="19"/>
    </div>
);

ReactDOM.render(app, document.getElementById('root'));

//ReactDOM.render(<App name="Max" age="12"/>, document.getElementById('p1'));
//ReactDOM.render(<App name="Didier" age="19"/>, document.getElementById('p2'));

