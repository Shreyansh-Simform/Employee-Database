import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const EmployeeForm = ({ addOrUpdateEmployee, currentEmployee, resetForm }) => {
    const [employee, setEmployee] = useState({ name: '', age: '', department: '', salary: '' });

    useEffect(() => {
        if (currentEmployee) {
            setEmployee(currentEmployee);
        } else {
            resetForm();
        }
    }, [currentEmployee]);

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addOrUpdateEmployee(employee);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" value={employee.name} onChange={handleChange} required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" name="age" value={employee.age} onChange={handleChange} required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Department</Form.Label>
                <Form.Control type="text" name="department" value={employee.department} onChange={handleChange} required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Salary</Form.Label>
                <Form.Control type="number" name="salary" value={employee.salary} onChange={handleChange} required />
            </Form.Group>
            <Button type="submit" className="mt-2">
                {employee.id ? 'Update Employee' : 'Add Employee'}
            </Button>
        </Form>
    );
};

export default EmployeeForm;
