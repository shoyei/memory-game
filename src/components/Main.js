import React, { useState, useEffect } from 'react'
import Scorecard from './Scorecard'
import MemoryCard from './MemoryCard'
import paul from './images/paul.jpg'
import alia from './images/alia.jpg'
import jessica from './images/jessica.jpg'
import leto from './images/leto.jpg'
import stilgar from './images/stilgar.jpg'
import irulan from './images/irulan.jpg'
import idaho from './images/idaho.jpg'
import chani from './images/chani.jpg'

const Main = () => {
    const [currentScore, setCurrentScore] = useState(0)
    const [highScore, setHighScore] = useState(0)
    const [selections, setSelections] = useState([
        {
            id: 0,
            cardName: 'Paul Atreides',
            src: paul,
            clicked: false,
        },
        {
            id: 1,
            cardName: 'Alia Atreides',
            src: alia,
            clicked: false,
        },
        {
            id: 2,
            cardName: 'Lady Jessica',
            src: jessica,
            clicked: false,
        },
        {
            id: 3,
            cardName: 'Leto Atreides II',
            src: leto,
            clicked: false,
        },
        {
            id: 4,
            cardName: 'Stilgar',
            src: stilgar,
            clicked: false,
        },
        {
            id: 5,
            cardName: 'Princess Irulan',
            src: irulan,
            clicked: false,
        },
        {
            id: 6,
            cardName: 'Duncan Idaho',
            src: idaho,
            clicked: false,
        },
        {
            id: 7,
            cardName: 'Chani',
            src: chani,
            clicked: false,
        }
    ])

    useEffect(() => {
        if (currentScore >= highScore) {
            setHighScore(currentScore)
        }
    }, [currentScore])

    const handleClick = (event) => {
        const cardId = parseInt(event.target.id)
        const currentCardIndex = selections.findIndex(card => card.id === cardId)
        const currentCard = selections[currentCardIndex]
        if (currentCard.clicked) resetGame()
        else {
            setSelections(prevState => {
                for (const card of prevState) {
                    if (card.id === cardId) {
                        card.clicked = true
                        break
                    }
                }
                return prevState.sort(() => Math.random() - 0.5)
            })
            setCurrentScore(prevScore => prevScore + 1)
        }
    }

    const resetGame = () => {
        alert('Sorry, try again!')
        setSelections(prevState => prevState.reduce((cards, card) => {
                card.clicked = false
                cards.push(card)
                return cards
            }, []))
        setCurrentScore(0)
    }

    return (
        <div className="Main">
            <Scorecard score={currentScore} highScore={highScore} />
            <div className="cardContainer">
                {selections.map(card => {
                    return <MemoryCard
                        key={card.id}
                        data={card}
                        onClick={handleClick}
                    />
                })}
            </div>
        </div>
    )
}

export default Main