import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetails } from "./components/EmployeeDetails";
// import { Admin } from "./components/Admin";
 import { ProtectedRoute } from "./components/ProtectedRoute.jsx";
import { Navbar } from "./components/Navbar";
import { Logout } from "./components/Logout";
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="employee/:id"
        element={
          <ProtectedRoute><EmployeeDetails/></ProtectedRoute>
        }>
        </Route>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/employees" element={<EmployeeList/>}> </Route>
        <Route path="/logout" element={<Logout/>}> </Route>
        <Route path="/login" element={<Login/>}></Route>

        {/* Routes here */}</Routes>
    </div>
  );
}

export default App;