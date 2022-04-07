import "./App.css"
function App() {
  const os=["Android","Blckberry","iPhone","Windows Phone"];
  const mn =["Samsung","HTC","Micromax","Apple"]
  return (
  <div className="App">
    <div>
      <h1>Mobile Operating System</h1>
      <ul>
        {os.map((e)=>{
          return <li>{e}</li>
        })}
      </ul>

    </div>
    <div>
      <h1>Mobile Manufacturers</h1>
      <ul id="square">
        {mn.map((e)=>{
          return <li>{e}</li>
        })}
      </ul>

    </div>

  </div>
  );
}

export default App;
