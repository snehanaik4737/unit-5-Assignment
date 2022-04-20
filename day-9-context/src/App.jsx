import { useContext, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Navbar} from "./components/Navbar"
import {Card} from "./components/Body/Card"

import {LangContext} from "./contexts/LanguageContext"
function App() {

  const {handleLang} =useContext(LangContext)
 
  return (
    <>
        <button onClick={()=>{
         handleLang()
        }}>Change Language</button>
     <Navbar/>
      <Card/>

    </>
     
  )
}

export default App
