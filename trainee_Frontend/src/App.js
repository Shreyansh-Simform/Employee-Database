
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeTable from './components/EmployeeTable';
import EmployeeForm from './components/EmployeeForm';
import { getEmployees, addEmployee, updateEmployee, deleteEmployee } from './services/api';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [employees, setEmployees] = useState([]);
    const [currentEmployee, setCurrentEmployee] = useState(null);

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = async () => {
        const res = await getEmployees();
        setEmployees(res.data);
    };

    const addOrUpdateEmployee = async (employee) => {
        if (employee.id) {
            await updateEmployee(employee.id, employee);
        } else {
            await addEmployee(employee);
        }
        loadEmployees();
        resetForm();
    };

    const handleEdit = (employee) => {
        setCurrentEmployee(employee);
    };

    const handleDelete = async (id) => {
        await deleteEmployee(id);
        loadEmployees();
    };

    const resetForm = () => {
        setCurrentEmployee(null);
    };

    return (
        <Container className="mt-5">
            <Row>
                <Col md={4}>
                    <h3>{currentEmployee ? 'Edit Employee' : 'Add Employee'}</h3>
                    <EmployeeForm addOrUpdateEmployee={addOrUpdateEmployee} currentEmployee={currentEmployee} resetForm={resetForm} />
                </Col>
                <Col md={8}>
                    <h3>Employee List</h3>
                    <EmployeeTable employees={employees} onEdit={handleEdit} onDelete={handleDelete} />
                </Col>
            </Row>
        </Container>
    );
};

export default App;
