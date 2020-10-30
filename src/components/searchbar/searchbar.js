import React from "react";
import employees from "../../piedpiper.json"

const styles = {
    margin: "auto"
    
    
    
}


class Search extends React.Component {
    state = {
        search: "",
        employees: employees
    };
    handleInputChange = event => {

        let value = event.target.value;
        console.log(value)
        const name = event.target.name;
        this.setState({
            [name]: value
        });

        const filteredSearch = this.state.employees.filter(employee => employee.name.includes(this.state.search))
        console.log(filteredSearch)




    };


    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        if (this.state.search) {
            alert(`employee ${this.state.search}`);
        }

        this.setState({
            search: ""
        });
    };



    render() {
        return (
            <div className="jumbotron jumbotron-fluid w-75 mt-3 col-lg-6 col-md-6 col-sm-6 col-xs-6 offset-3 float-md-center">
                <div className="container text-center">
                    <form style={styles}className="text-center">
                        <div className="form-group w-50 ">
                            <p> Search Employee </p>
                            <input
                                value={this.state.search}
                                name="search"
                                onChange={this.handleInputChange}
                                className="form-control text-center"
                                placeholder="Employee Name" />
                            <button onClick={this.handleFormSubmit} className="mt-2">SEARCH</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}






export default Search;