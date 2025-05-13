import React, { useState, useEffect } from 'react'

const GridWrapping = () => {
    const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 600px)").matches)
    // const [gridWidth, setGridWidth] = useState('75%')

    useEffect(() => {
        const handleResize = e => {
            setIsMobile(window.matchMedia("(max-width: 600px)").matches)
        }
        window.addEventListener("resize", handleResize)
    }, [])

    const cards = []
    if (isMobile) {
        for (let i = 0; i < 6; i++) {
            cards.push(
                <div key={i} className="card">
                    <h2 lang="la">Lorem Ipsum</h2>
                    <p lang="la">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem inventore fugiat sunt
                        delectus
                        itaque at recusandae animi, ea quis optio, dolores tenetur incidunt architecto cumque.</p>
                </div>
            )
        }
    } else {
        for (let i = 0; i < 12; i++) {
            cards.push(
                <div key={i} className="card">
                    <h2 lang="la">Lorem Ipsum</h2>
                    <p lang="la">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem inventore fugiat sunt
                        delectus
                        itaque at recusandae animi, ea quis optio, dolores tenetur incidunt architecto cumque.</p>
                </div>
            )
        }
    }

    const handlePreview = () => {
        if (isMobile) {
            setGridWidth('150px')
        } else {
            setGridWidth('250px')
        }

        setTimeout(() => {
            setGridWidth('75%')
        }, 3500);
    }

    return (
        <>
            {cards}
        </>
    )
}

export default GridWrapping;