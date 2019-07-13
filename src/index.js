import React, { Component } from 'react';
import './App.css';
import ReactDOM from "react-dom";
import Animal from './Animal/Animal'
import Person from './Person/Person'
import ToggleBtn from "./ToggleBtn/ToggleBtn";

class App extends Component {

    state = {
        persons: [
            {name: 'Max', age: 28},
            {name: 'Didier', age: 29}
        ],
        otherState: 'some other value',
        toggleBtnActive1: false,
        toggleBtnActive2: false
    };

    switchNameHandler = (newName) => {
        // DON'T DO THIS: this.state.persons[0].name = "Maximiliano";
        // DON'T DO THIS:this.state.persons[1].name = "Juan Carlos";

        this.setState({
            persons: [
                {name: newName, age: 28},
                {name: "Juan Carlos", age: 29}
            ]
        })
    };

    changeToggleBtn1 = () => {
        this.setState( {
            toggleBtnActive1: !this.state.toggleBtnActive1
        })
        console.log("toggleBtnActive1: " + this.state.toggleBtnActive1);
    };
    changeToggleBtn2 = () => {
        this.setState( {
            toggleBtnActive2: !this.state.toggleBtnActive2
        })
        console.log("toggleBtnActive2: " + this.state.toggleBtnActive2);
    };

    
    render(){

        const style = {
            backgroundColor: 'cyan',
            font: 'inherit',
            border: '1x solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div>
                <Person name={this.state.persons[0].name}
                        age={this.state.persons[0].age}
                        xclick={() => this.switchNameHandler('Max!!!')}/>
                <h1><Animal name="Tobby"/>guauuuu!</h1>

                <br/>

                <Person name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        xclick={() => this.switchNameHandler('Maximiliano')}/>
                <h1><Animal name="Buppys"/>miauuuu!</h1>

                <button style={style} onClick={() => this.switchNameHandler('MadMax')}>Switch name</button>

                <ToggleBtn click={this.changeToggleBtn1} active={!this.state.toggleBtnActive1} text="Hola mundo!"/>
                <ToggleBtn click={this.changeToggleBtn2} active={!this.state.toggleBtnActive2} text="Hola mundo 2!"/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

