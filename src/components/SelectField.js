import React from 'react'

class SelectField extends React.Component {
    render() {
        return (
            <select name={this.props.name} value={this.props.value} onChange={this.props.handleSelect} className="form-control">
                <option value="ten">10th</option>
                <option value="twelve">12th</option>
                <option value="graduate">Graduate</option>
                <option value="masters">Masters</option>
            </select>
        );
    } 
}

export default SelectField