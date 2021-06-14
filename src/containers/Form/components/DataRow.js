function DataRow(props) {
	return (
		<tr>
			<td>{props.name}</td>
			<td>{props.email}</td>
			<td>{props.dob}</td>
			<td>{props.gender}</td>
			<td>{props.edu}</td>
			<td><img className="box-image" src={props.pic} alt='' /></td>
			<td><button name="edit" onClick={props.handleAction}>Edit</button></td>
			<td><button name="delete" onClick={props.handleAction}>Delete</button></td>
		</tr>
	);
}

export default DataRow
