import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens:30,
  });

  // const [invent ,setInvent]= useState({
  //   inkpens:0
  // })

  // const handle=(key,value)=>{
  //   // console.log(value)
  //   if(invent[key]<=0 && value ===-1){
  //     return;
  //   }
  //    invent[key]=invent[key]+value;
  //    setInvent({ 
  //     inkpens: invent.inkpens,
   
  //    })
  //   }



  
    // Create add and remove functions here that changes the
    // state. 
  
    const handleChange=(key,value)=>{
     // console.log(value)
     if(inv[key]<=0 && value ===-1){
       return;
     }
      inv[key]=inv[key]+value;
      setInv({ books: inv.books,
      notebooks: inv.notebooks,
       pens: inv.pens,
       inkpens:inv.inkpens,
      })
     }

  
   return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
     
      <div className="items">
        <span>Books: </span>
        <button onClick={()=>handleChange("books",1)}className="circlularButton">+</button>
        <button  onClick={()=>handleChange("books",-1)}className="circlularButton">-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button onClick={()=>handleChange("notebooks",1)}className="circlularButton">+</button>
        <button onClick={()=>handleChange("notebooks",-1)} className="circlularButton">-</button>
        <span>{inv.notebooks}</span>
   
      </div>
      <div className="items">
        <span>Pen: </span>
        <button onClick={()=>handleChange("pens",1)}className="circlularButton">+</button>
        <button  onClick={()=>handleChange("pens",-1)}className="circlularButton">-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button  onClick={()=>handleChange("inkpens",1)}className="circlularButton">+</button>
        <button  onClick={()=>handleChange("inkpens",-1)} className="circlularButton">-</button>
        <span>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {inv.books+inv.notebooks+inv.pens}
    </div>
  );
};