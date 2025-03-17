import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Employee() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/employees')
            .then(response => {
                setEmployees(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the employees!", error);
            });
    }, []);

    return (
        <div className="employee">
            <h2>Employee List</h2>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>{employee.name} - {employee.position} - ${employee.salary}</li>
                ))}
            </ul>
        </div>
    );
}

export default Employee;