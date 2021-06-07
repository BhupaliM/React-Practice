import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        this.props.onClick(e)
    }

    render() {
        return (
            <button onClick={this.onClick}>Click Me</button>
        );
    }
}

export default Button