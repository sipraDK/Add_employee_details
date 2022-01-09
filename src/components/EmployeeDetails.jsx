import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function EmployeeDetails() {

    const navigate = useNavigate();
    const [search, setsearch] = useState("");
    const [Employees, setEmployees] = useState([]);
    console.log("employee", Employees);

    useEffect(() => {
        getEmployee();
    }, []);

    // Get Employees
    const getEmployee = async () => {
        try {
            const response = await axios.get("http://localhost:3001/Employees");
            console.log(response.data);
            setEmployees(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    // Navigate To Add Employee
    const adduser = () => {
        navigate("/addEmployee", { replace: true });
    }

    // Delete Employee
    const deleteEmployee = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/Employees/${id}`);
            const EmployeeDelete = Employees.filter(Employee => {
                return Employee.id !== id;
            });
            setEmployees(EmployeeDelete);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='container bg-secondary my-4 py-2' >
                <div className='row'>
                    <di className="com-md-10 mx-auto my-2 text-center">
                        <button className="btn btn-outline-warning my-3" onClick={adduser}>Add-Employee-Details</button>
                        <input type="text" className="form-control my-2 mx-auto w-50 mx-auto" onChange={(e) => { setsearch(e.target.value) }} placeholder="Search Employee" />
                        
                    </di>
                </div>
                <div className='row'>
                    <div className='col-md-10 mx-auto'>
                        <table className="table table-bordered ">
                            <thead>
                                <tr className=' bg-info text-dark'>
                                    <th scope="col">ID</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email Id</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <>
                                    {Employees.filter((Employee) => {
                                        if (search === "") {
                                            return Employee;
                                        } else if (Employee.Fname.toLowerCase().includes(search.toLowerCase()) || Employee.Lname.toLowerCase().includes(search.toLowerCase())) {
                                            return Employee;
                                        }
                                    }).map((Employee, id) => (
                                        <tr key={id}  className='bg-light text-dark'>
                                            <td>{Employee.id}</td>
                                            <td>{Employee.Fname}</td>
                                            <td>{Employee.Lname}</td>
                                            <td>{Employee.Email}</td>
                                            <td>
                                                <Link to={`/employee/${Employee.id}`} className="btn btn-success">View</Link>
                                                <button className='btn btn-danger mx-2' onClick={() => { deleteEmployee(Employee.id) }}>Delete</button>
                                                <Link to={`/updateEmployee/${Employee.id}`} className='btn btn-primary'>Edit</Link>
                                            </td>
                                        </tr>
                                    ))
                                    }
                                </>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmployeeDetails
