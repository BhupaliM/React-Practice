import React from 'react'
import DataRow from './DataRow.js'

class Table extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			userData: [],
			rows: []
		}
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.userData !== prevState.userData) {
			const dataRows = []
			JSON.parse(nextProps.userData).forEach((data, i) => {
				dataRows.push(
					<DataRow
						key={i}
						name={data.input}
						email={data.email}
						dob={data.selectedDate}
						gender={data.selectedRadioValue}
						edu={data.selectedValue}
						pic={data.selectedFile}
						handleAction={(e) => nextProps.handleAction(e, i)}
					/>
				)
			});
			return { rows: dataRows, userData: nextProps.userData }
		}
		else return null
	}

	render() {
		return (
			<table className="table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Date of Birth</th>
						<th>Gender</th>
						<th>Education</th>
						<th>Picture</th>
					</tr>
				</thead>
				<tbody>{this.state.rows}</tbody>
			</table>
		)
	}
}

export default Table
