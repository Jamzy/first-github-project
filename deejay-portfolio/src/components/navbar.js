import React from 'react'


function navBar() {
    const [state,setState]=useState(false);
    let url="";
    let element=<a href={url}>LinkedIn handle</a>;
    return(
      <div className="App">
       {state && element}
      </div>
    );
  }
    
    export default navBar



