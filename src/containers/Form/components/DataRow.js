import { connect } from 'react-redux';
import { deleteRecord } from '../../../actions/TableActions.js'

function DataRow(props) {
	function onClick(e) {
		if (e.target.name === "delete") {
			props.dispatch(deleteRecord(props.record.id))
		}
		else if (e.target.name === "edit") {
			props.handleEdit(props.record.id)
		}
	}

	return (
		<tr>
			<td>{props.record.input}</td>
			<td>{props.record.email}</td>
			<td>{props.record.selectedDate}</td>
			<td>{props.record.selectedRadioValue}</td>
			<td>{props.selectedValue}</td>
			<td><img className="box-image" src={props.record.selectedFile} alt='' /></td>
			<td><button name="edit" onClick={onClick}>Edit</button></td>
			<td><button name="delete" onClick={onClick}>Delete</button></td>
		</tr>
	);
}

export default connect(null, null)(DataRow)
