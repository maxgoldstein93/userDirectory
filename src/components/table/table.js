import React from "react";
import employees from "../../piedpiper.json"
import "./table.css";
import Employee from "../employeeTable"


class Employeedata extends React.Component {
    state = {
        employees: employees,
        sortOrder: "ASC",
        search: ""

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

    handleInputChange = event => {

        let value = event.target.value;
        console.log(value)
        const name = event.target.name;

        let filteredSearch = employees.filter(employee => employee.name.includes(value))
        console.log(filteredSearch)

        this.setState({
            [name]: value,
            employees: filteredSearch

        });
        // also could try .then

    };


    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        this.setState({
            search: ""
        });
    };



render(){
    // let filteredSearch = employees.filter(employee => employee.name.includes(this.state.search))
    // console.log(filteredSearch)
    return (
        <>
        <div className="jumbotron jumbotron-fluid w-75 center mb-5">
                <div className="container ">
                    <form className=" ">
                        <div className="form-group  ">
                            <p> Search Employee </p>
                            <input
                                value={this.state.search}
                                name="search"
                                onChange={this.handleInputChange}
                                className="form-control"
                                placeholder="Employee Name" />
                            <button onClick={this.handleFormSubmit} className="mt-2 btn-secondary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

        <table className="table table-striped w-75">
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
        </>
    );
}
}

export default Employeedata;