import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function AddEmployee() {
    const navigate = useNavigate();
    const [Fname, setFname] = useState("");
    const [Lname, setLname] = useState("");
    const [Email, setEmail] = useState("");


    // Add Employee
    const AddEmployee = async () => {
        try {
            if (Fname === "") {
                alert("Please Fill First Name");
                return false;
            }
            if (Lname === "") {
                alert("Please Fill Last Name");
                return false;
            }
            if (Email === "") {
                alert("Please Fill Email");
                return false;
            }  else {
                let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                var validEmail = regEx.test(Email);
                if (!validEmail) {
                    alert("Enter a valid email");
                    return false;
                }
            }
            const response = await axios.post("http://localhost:3001/Employees", { Fname, Lname, Email });
            console.log(response);
            navigate("/", { replace: true });
            return false

        } catch (error) {
            console.log(error);
        }
    }

    // Back To Employee Details
    const backToList = () => {
        navigate("/", { replace: true });
    }

    return (
        <>
            <div className="container my-5" >
                <div className="row p-4 bg-secondary text-light AddEmployee">
                    <h4 className="text-center text-white">ADD - USER</h4>
                    <div className="col-md-6 mx-auto">
                        <div className="form-group my-2">
                            <label htmlFor="fname">First Name</label>
                            <input type="text" className="form-control" onChange={(e) => { setFname(e.target.value) }} id="fname" name="fname" placeholder="Enter First Name" />
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" className="form-control" onChange={(e) => { setLname(e.target.value) }} id="lname" name="lname" placeholder="Enter Last Name" />
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" onChange={(e) => { setEmail(e.target.value) }} id="email" name="email" placeholder="Enter Email" />
                        </div>

                        <div className="form-group my-2">
                            <button className="btn btn-info" onClick={AddEmployee}>Add Employee</button>
                            <button className='btn btn-info mx-2' onClick={backToList}>Employee List</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddEmployee
