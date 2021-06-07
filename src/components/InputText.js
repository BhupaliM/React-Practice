import React from 'react'

class InputText extends React.Component {
    render() {
        return (
            <div>
                <label>
                    Name : <input type="text" placeholder="Enter input" value={this.props.name} onChange={this.props.handleInput} required />
                </label>
            </div>
        );
    } 
}

export default InputText