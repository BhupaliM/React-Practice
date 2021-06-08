import React from 'react'

class InputText extends React.Component {
    render() {
        return (
            <input type="text" name={this.props.name} placeholder={this.props.placeholder} value={this.props.input} onChange={this.props.handleInput} className="form-control" required/>
        );
    } 
}

export default InputText