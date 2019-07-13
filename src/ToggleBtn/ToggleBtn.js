import React, { Component } from 'react';
import { ToggleButton } from '@contentful/forma-36-react-components';
import '@contentful/forma-36-react-components/dist/styles.css';

class ToggleBtn extends Component {

    /*state = {
        active: false
    };

    toggleBtn = () => {
        this.setState( {
            active: !this.state.active
        })

        console.log("Btn isActive?: " + this.state.active);
    };*/

    render(props) {
        return(
            <ToggleButton onClick={this.props.click} isActive={this.props.active}>{this.props.text}</ToggleButton>
        );
    }
}

export default ToggleBtn;
