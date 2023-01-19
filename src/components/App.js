import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
 const[hide, setHide]=useState(true)
 const click=()=>{
   if(hide==true){
    setHide(false)
   }
   else{
    setHide(true)
   }
 }
  return (
    <div id="main">
      {hide ? (<div id="welcome-div">
        <h1>Welcome to Newton School!!</h1>
      </div>):(<div id="about-div">
        <h1>
          Newton School is a neo-university providing highly immersive tech
          learning to millions of students, to tap into new-age tech
          opportunities.
        </h1>
      </div>)}
     
      
      <button id="toggle" onClick={click}>Toggle</button>
    </div>
  );
};

export default App;
