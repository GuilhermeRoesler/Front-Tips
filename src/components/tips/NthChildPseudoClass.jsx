import React, { useState, useEffect } from 'react'

const NthChildPseudoClass = () => {
    const [activeClass, setActiveClass] = useState('active1')
    let TOTAL_CLASSES = 6

    const dives = []
    for (let i = 1; i <= 15; i++) {
        dives.push(
            <div key={i} className='item'>{i}</div>
        )
    }

    useEffect(() => {
        let contador = 0
        const interval = setInterval(() => {
            contador = (contador % TOTAL_CLASSES) + 1
            setActiveClass(`active${contador}`)
        }, 1000);

        return () => clearInterval(interval)
    }, [TOTAL_CLASSES])

    return (
        <div className={activeClass}>
            {[...Array(15)].map((_, i) => (
                <div key={i} className='item'>{i + 1}</div>
            ))}
        </div>
    )
}

export default NthChildPseudoClass;