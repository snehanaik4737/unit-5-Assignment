import { useState } from 'react'
import styles from "./ContactCard.module.css"
 export const ContactCard=({id,name,last_name,phone,url,onHandle,phoneDiv,flag})=>{

  return(
    <div className={styles.maindiv}>
   
   <div onClick={()=>onHandle(id)} className={styles.subdiv} >

      <div className={styles.image} > <img style={{width:"100%"}} src={url}></img></div>
    <div style={{marginTop:"15px"}}>{name}{" "}{last_name}</div>

  </div>
    
    {phoneDiv===id && flag ? (<p>{phone}</p>):("")}

   
    </div>
  )
}


