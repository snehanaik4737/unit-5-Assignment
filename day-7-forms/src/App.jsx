import { useEffect, useRef, useState } from 'react'

import './App.css'
import {Form} from "./components/form"
import { ShowDetails } from './components/showdetails';
function App() {
 

   
  return (
    <div className="App">
    <Form/>
    <ShowDetails/>
    </div>
  );
}

export default App;