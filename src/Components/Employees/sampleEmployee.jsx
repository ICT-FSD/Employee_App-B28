
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useEmployeeContext } from "./EmployeeContext";


export default function SampleDashboard() {
    const[employeeData,setEmployeeData]=useState([
        {id:1,name:'Anand John' ,designation:'chiefmanager'},
        {id:2,name:'Anandi h' ,designation: 'salesmanager'},
        {id:3,name:'nandi g' ,designation:'creditsmanager'},
        {id:4,name:'chandu Jo' ,designation:'accountsmanager'},
        {id:5,name:'Ananthan ' ,designation:'inventorymanager'},

    ])
const handleDelete=(id)=>{
setEmployeeData(employeeData.filter(employee=>employee.id!==id))
}
  return (
    <div>
      <h2>Employee Dashboard</h2>
      <table className="employee-table-container">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            employeeData.map(employee=>(
                <tr key={employee.id}>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.designation}</td>
                    <td>
                        <button onClick={()=>handleDelete(employee.id)}>Delete</button>
                    </td>
                </tr>
            ))
          }
        </tbody>
      </table>
      <div className="button-container">
        <button>Add</button>
        <button>Save</button>
      </div>
    </div>
  );
}