import React, { Component } from 'react';
import './App.css';
import ReactDOM from "react-dom";
import Animal from './Animal/Animal'
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            {name: 'Max', age: 28},
            {name: 'Didier', age: 29}
        ],
        otherState: 'some other value'
    }

    switchNameHandler = () => {
        // DON'T DO THIS: this.state.persons[0].name = "Maximiliano";
        // DON'T DO THIS:this.state.persons[1].name = "Juan Carlos";

        this.setState({
            persons: [
                {name: "Maximiliano", age: 28},
                {name: "Juan Carlos", age: 29}
            ]
        })
    }

    render(){
        return (
            <div>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <h1><Animal animalName="Tobby"/>guauuuu!</h1>
                <br/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <h1><Animal animalName="Buppys"/>miauuuu!</h1>
                <button onClick={this.switchNameHandler}>Switch name</button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

