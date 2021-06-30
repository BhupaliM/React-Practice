import { connect } from 'react-redux';

import DataRow from './DataRow.js';

function Table(props) {
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
			<tbody>
				{props.dataRows.map((data, index) => (
					<DataRow
						key={data.id}
						record={data}
						handleEdit={props.handleEdit}
					/>
				))}
			</tbody>
		</table>
	)
}

const mapStateToProps = state => ({
	dataRows: state.userData.recordByIDs
})

export default connect(mapStateToProps, null)(Table)