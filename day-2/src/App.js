import "./App.css"
function App() {
  const os=["Android","Blckberry","iPhone","Windows Phone"];
  const mn =[{name:"Samsung",style:"square"},
      {name:"HTC",style:"square"},
      {name:"Micromax",style:""},
      {name:"Apple",style:"circle"}];


 const links =[{name:"Services",link:""},
 {
  name:"Projects",link:""},
  {
name:"About",link:""
  }
 ]

  
  return (
  <div className="App">

  <div className="nav">
     <div id="logo">
        <Logo/>
     </div>
     <div id="links" >
       {links.map((e)=>{
         return <Links link={e}/>
       })}
     </div>

<div>
  <Button/>
</div>
    
    </div>


    <div className="bullets">
      <h1>Mobile Operating System</h1>
      <ul>
        {os.map((e)=>{
          return <li>{e}</li>
        })}
      </ul>

    </div>
    <div className="bullets">
      <h1>Mobile Manufacturers</h1>
      <ul >
        {mn.map((e)=>{
          return <li className={e.style}>{e.name}</li>
        })}
      </ul>

    </div>
 
  </div>
  );
}



 function Logo(){
   return <p>LOGOBAKERY</p>
 }

  function Links(props){
   // console.log(props)
    return <a id="href" href={props.link.link}>{props.link.name}</a>
  }


 function Button(){
   return <button id="buttn">Contact</button>
 }
 
 


export default App;
