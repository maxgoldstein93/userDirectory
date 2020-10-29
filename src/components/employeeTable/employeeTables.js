import React from "react";


function EmployeeTable(props) {
    return (
        <tr>
            <td  scope="row"><img className="img-thumbnail"src={props.image} /></td>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
        </tr>
    );
}

export default EmployeeTable;