import React from 'react'

const ElementLeftHas = () => {
    const cards = []
    for (let i = 1; i <= 10; i++) {
        cards.push(
            <div key={i} className="blur-load item" style={{ backgroundImage: `url(img/ordem${i}-small.webp)` }}>
                <img width="736" height="1308" loading="lazy" src={`img/ordem${i}.webp`} alt={`ordem${i}`} />
            </div>
        )
    }

    return (
        <>
            <h1>Element Left (Has)</h1>
            <section id="element-left-has">
                {cards}
            </section>
        </>
    )
}

export default ElementLeftHas;