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

    switchNameHandler = (newName) => {
        // DON'T DO THIS: this.state.persons[0].name = "Maximiliano";
        // DON'T DO THIS:this.state.persons[1].name = "Juan Carlos";

        this.setState({
            persons: [
                {name: newName, age: 28},
                {name: "Juan Carlos", age: 29}
            ]
        })
    }

    render(){

        const style = {
            backgroundColor: 'cyan',
            font: 'inherit',
            border: '1x solid blue',
            padding: '8px',
            cursor: 'pointer'
        }

        return (
            <div>
                <Person name={this.state.persons[0].name}
                        age={this.state.persons[0].age}
                        xclick={() => this.switchNameHandler('Max!!!')}/>
                <h1><Animal animalName="Tobby"/>guauuuu!</h1>

                <br/>

                <Person name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        xclick={() => this.switchNameHandler('Maximiliano')}/>
                <h1><Animal animalName="Buppys"/>miauuuu!</h1>

                <button style={style} onClick={() => this.switchNameHandler('MadMax')}>Switch name</button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

