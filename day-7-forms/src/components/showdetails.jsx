
import { useState, useEffect } from "react";
import "./details.css"
export const ShowDetails = () => {
  const [details, setdetails] = useState([]);

  useEffect(() => {
   
    getdata();

  }, []);

  async function getdata() {
    const data = await fetch(`http://localhost:8080/form`).then((d) =>
      d.json()
    );
    console.log(data);
    setdetails(data);
    console.log(data);
  }

  

  return (
    <div>
      {/* {console.log(student)} */}
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Merital State</th>
           
          </tr>
        </thead>
        <tbody className="tbody">
          {/* populate all rows like below: */}
          {details.map((el) => (
            <tr className="row">
              <td className="name">{el.name}</td>
              <td className="age">{el.age}</td>
              <td className="address">{el.address}</td>
              <td className="department">{el.department}</td>
              <td className="salary">{el.salary}</td>
              <td className="merital">{el.merital_state}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};




