
import './App.css';
import { useState } from 'react';





function App() {


  const [inv,setInv]= useState({
    score:76,
    wicket:2,
    ball:50,
  })


   const handlechange=(key,value)=>{
     if(inv.score>100 || inv.wicket>=12){
       return;
     }
     //inv.ball.toFixed(1)
   //  inv.ball=Math.round().inv.ball
    inv[key]=inv[key]+value;
    setInv({score:inv.score,
        wicket:inv.wicket,
        ball:inv.ball,
    }
     )
   }

  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
             inv.score
              // show "score" here
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              inv.wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              `${Math.floor(inv.ball/6)}.${inv.ball-Math.floor(inv.ball/6)*6}`
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button onClick={()=>handlechange("score",1)}className="addScore1">Add 1</button>
        <button onClick={()=>handlechange("score",4)} className="addScore4">Add 4</button>
        <button onClick={()=>handlechange("score",6)} className="addScore6">Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button  onClick={()=>handlechange("wicket",1)}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>handlechange("ball",1)}>Add 1</button>
      </div>
       <h1 className="status">{inv.score>100 ?"India Won":"" }</h1>
      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;