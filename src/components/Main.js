import React from 'react';
import Text from './Text.js';
import InputText from './InputText.js';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            message: "Hello World"
        }
    }

    handleChange(value) {
        this.setState({message: value})
    }

    render() {
        return(
            <div>
                <Text message={this.state.message}></Text>
                <InputText placeholder="Enter something" value='' handleChange={this.handleChange} />
            </div>
        );
    }
}

export default Main