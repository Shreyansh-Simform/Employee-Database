import React from 'react';
import { Button, Table } from 'react-bootstrap';

const EmployeeTable = ({ employees, onEdit, onDelete }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((emp) => (
                    <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.age}</td>
                        <td>{emp.department}</td>
                        <td>{emp.salary}</td>
                        <td>
                            <Button variant="warning" onClick={() => onEdit(emp)}>
                                Edit
                            </Button>{' '}
                            <Button variant="danger" onClick={() => onDelete(emp.id)}>
                                Delete
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default EmployeeTable;
