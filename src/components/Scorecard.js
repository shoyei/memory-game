import React,{useEffect}from 'react'

const Scorecard = (props) => {


    return (
        <div className="Scorecard">
            <h5>Current Score: {props.score}</h5>
            <h5>High Score: {props.highScore}</h5>
        </div>
    )
}

export default Scorecard