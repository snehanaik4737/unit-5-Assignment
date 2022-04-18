import { useState ,useEffect} from "react";
import axios from "axios"
export const Form=()=>{

 
const [formdata,setformdata]=useState({
    name:"",
    age:"",
    address:"",
    department:"",
    salary:"",
    marrital_state:"",

})

//const [form,setForm] =useState([]);

const handlechange=(e)=>{
  
    const {id, value} =e.target;
    
    setformdata({
        ...formdata,
        [id]:value
    });
}


useEffect(()=>{
 
     getData(); 

   },[]);

const getData= async ()=>{
  const data = await fetch("http://localhost:8080/form").then((d)=>
        d.json());
        console.log(data);
        setformdata(data);
         // setLoading(false)
}

   const handleSubmit=(e)=>{
    
    
    e.preventDefault();

    
      fetch("http://localhost:8080/form",{
               method:"POST",
               headers:{
                   "content-type":"application/json"
               },
               body:JSON.stringify(formdata)
           })
//   const payload={
//     title:formdata,
//     status:false
// };
//   axios.post("http://localhost:8080/form",payload).then(()=>{ getData()
// })
 // console.log(formdata);
  getData()

}

  return (
    <form onSubmit={handleSubmit}>

        <input onChange={handlechange} type="text" placeholder=" enter username" id="name"/>
        

        <input onChange={handlechange}  type="number" placeholder="enter age" id="age"/>

        <input onChange={handlechange}  type="text" placeholder="enter address" id="address"/>

        <select
          onChange={handlechange}
          value={""} 
          name="department"
          id="department"
        >
 
          <option value="">Select Department</option>
            <option value="marketing">Marketing Department</option>
            <option value="finance">Finance Department</option>
            <option value="sales">Sales Department</option>
            <option value="human_resource">Human Resource Department</option>
            <option value="purchase">Purchase Department</option>
          </select>

        <input onChange={handlechange}  type="number" placeholder="enter salary" id="salary"/>

        <input  onChange={handlechange}  type="checkbox" name="Married" id="marrital_state"/>
        <label for="married">Married</label>
        <input  onChange={handlechange}   type="checkbox" name="Single" id="marrital_state"/>
        <label for="single">Single</label>

        <input type="submit" value="submit"></input>


       

    </form>

  )




}