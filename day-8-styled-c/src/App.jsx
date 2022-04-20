

import './App.css'

import { Buttons } from "./component/Button"

function App() {
 
  return (
    <div className="App">
    


    <Buttons type={"primary"}>Primary Button</Buttons>
      <Buttons type={"default"}>Default Button</Buttons>
      <Buttons type={"dashed"}>Dashed Button</Buttons>
      <br/>
      <Buttons type={"text"}>Text Button</Buttons>
      <Buttons type={"link"}>Link Button</Buttons>
    </div>
  )
}

export default App
