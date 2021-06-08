import React from 'react'

class InputText extends React.Component {
    render() {
        return (
            <input type="text" placeholder="Enter name" value={this.props.name} onChange={this.props.handleInput} className="form-control" />
        );
    } 
}

export default InputText