import "./App.css";
import { Routes, Route } from "react-router-dom";
import EmployeeDetails from "./components/EmployeeDetails";
import AddEmployee from "./components/AddEmployee";
import ViewEmployee from "./components/ViewEmployee";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "blue" }}>Employee Details </h1>
      <Routes>
        <Route path="/" element={<EmployeeDetails />} />
        <Route path="/addEmployee" element={<AddEmployee />} />
        <Route path="/Employee/:id" element={<ViewEmployee />} />
        <Route path="/updateemployee/:id" element={<UpdateEmployee />} />
      </Routes>
    </>
  );
}

export default App;
