import DataRow from './DataRow.js'

function Table(props) {
    const rows = []

    props.userData.forEach((data, i) => {
        rows.push(
            <DataRow 
                key={i}
                name={data.input}
                email={data.email}
                dob={data.selectedDate}
                gender={data.selectedRadioValue}
                edu={data.selectedValue}
                pic={data.selectedFile}
            />
        )
    });

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
            <tbody>{rows}</tbody>
        </table>
    )
}

export default Table
