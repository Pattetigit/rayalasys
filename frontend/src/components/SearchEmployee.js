import React, { useState } from 'react';
import axios from 'axios';

function SearchEmployee() {
    const [name, setName] = useState('');
    const [employees, setEmployees] = useState([]);

    const handleSearch = () => {
        axios.get(`http://localhost:8080/api/employees/search?name=${name}`)
            .then(response => {
                setEmployees(response.data);
            })
            .catch(error => {
                console.error("There was an error searching the employees!", error);
            });
    };

    return (
        <div className="search-employee">
            <h2>Search Employee</h2>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter employee name"
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>{employee.name} - {employee.position} - ${employee.salary}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchEmployee;