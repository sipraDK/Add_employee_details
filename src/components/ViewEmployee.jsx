import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function ViewEmployee() {
    const [Employee, setEmployee] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getEmployee();
    }, [id]);

    // Get Employee
    const getEmployee = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/Employees/${id}`);
            setEmployee(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    // Back to Employee List
    const backtolist = () => {
        navigate("/", { replace: true });
    }

    return (
        <>
            <div className="container my-5 bg-secondary" >
                <div className="row">
                    <div className="col-md-6 px-4 pb-5 mx-auto text-center  text-dark" >
                        <h4 className="my-5">Employee Id</h4>
                        <table className="table table-bordered text-white">
                            <tbody >
                                <tr>
                                    <td><b>First Name</b></td>
                                    <td className="px-4">{Employee.Fname}</td>
                                </tr>
                                <tr>
                                    <td ><b>Last Name</b></td>
                                    <td className="px-4">{Employee.Lname}</td>
                                </tr>
                                <tr>
                                    <td ><b>Email Id</b></td>
                                    <td className="px-4">{Employee.Email}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="btn btn-info" onClick={backtolist}>List Display</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewEmployee
