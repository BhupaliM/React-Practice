import React from 'react'

class SelectGender extends React.Component {
    render() {
        return (
            <div>
                <label>
                    Gender : 
                    <select value={this.props.value} onChange={this.props.handleSelect} required>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>
            </div>
        );
    } 
}

export default SelectGender