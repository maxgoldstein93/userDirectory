import React from "react";
import employees from "../../piedpiper.json"
import "./table.css";
import Employee from "../employeeTable"

class Employeedata extends React.Component {
    state = {
        employees: employees,
        sortOrder: "ASC"

    };

    sortName() {
        const eName = this.state.employees.sort(this.compare);
        this.setState({ employees: eName })
        const order = this.state.sortOrder ? 'ASC' : 'DESC';
        this.setState({ sortOrder: order })
        console.log("CLICK")

    };

    compare(a, b) {
        if (a.name > b.name) return 1;
        if (b.name > a.name) return -1;

        return 0;
    }






render(){
    return (
        <table>
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col" onClick={() => { this.sortName() }}>Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>
                {this.state.employees.map(person =>
                    <Employee
                        id={person.id}
                        key={person.id}
                        name={person.name}
                        image={person.image}
                        email={person.email}
                        phone={person.phone}
                        dob={person.DOB}
                    />
                )}
            </tbody>
        </table>
    );
}
}

export default Employeedata;