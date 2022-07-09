import React from "react";
import Joke from "./jokes";
import './style.css';


function MyApp() {
   

  return (
    
    <div className="todo--list">
        <Joke question="" punchLine="A spelling bee."/>
        <Joke question="What’s more amazing than a talking dog?" punchLine="A spelling bee."/>
        
    </div>
  )
}

export default MyApp;
