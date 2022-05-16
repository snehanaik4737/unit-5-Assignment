import { useState } from 'react'

 export const ContactCard=({id,name,last_name,phone,url,onHandle,phoneDiv})=>{

  return(
    <div style={{width:"30%",margin:"auto",padding:"1rem",border:"1px solid black",marginBottom:"0.25rem",gap:"1rem"}}>
   
  <div onClick={()=>onHandle(id)} style={{display:"flex",width:"100%"}}>

      <div style={{width:"10%",padding:"2%"}}> <img style={{width:"100%"}} src={url}></img></div>
    <div style={{marginTop:"15px"}}>{name}{" "}{last_name}</div>

  </div>
    {phoneDiv? (<div>{phone}</div>):("")}

   
    </div>
  )
}


