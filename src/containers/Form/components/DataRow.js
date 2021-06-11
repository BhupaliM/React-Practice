function DataRow(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
            <td>{props.gender}</td>
            <td>{props.edu}</td>
            <td><img className="box-image" src={props.pic} alt='' /></td>
        </tr>
    );
}

export default DataRow
