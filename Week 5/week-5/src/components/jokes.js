import React from "react";


function Joke(props) {
    return (
        <div className="joke">
        <h3 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h3>
        <h3>Answer: {props.punchLine}</h3>
        
        </div>
    )

}

export default Joke