import React from 'react'

const MemoryCard = (props) => {
    return (
        <div
            className='MemoryCard'
            id={props.data.id}
            onClick={props.onClick}
        >
            <img
                src={props.data.src}
                alt=''
                className="tile"
                id={props.data.id}
            ></img>
            <h4 id={props.data.id}>{props.data.cardName}</h4>
        </div>
    )
}

export default MemoryCard