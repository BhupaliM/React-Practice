import React from 'react'

class SelectField extends React.Component {
	render() {
		return (
			<select name={this.props.name} value={this.props.value} onChange={this.props.handleSelect} className="form-control">
				<option value="10th">10th</option>
				<option value="12th">12th</option>
				<option value="Graduate">Graduate</option>
				<option value="Masters">Masters</option>
			</select>
		);
	}
}

export default SelectField
