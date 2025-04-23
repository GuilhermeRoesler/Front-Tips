import React, { useRef } from 'react'

const ImageGallery2 = () => {
    const divRef = useRef([])

    const dimensions = [{ width: '4986', height: '3324' }, { width: '5065', height: '3377' }, { width: '6720', height: '4480' }]

    const cards = []
    for (let i = 0; i < 7; i++) {
        const k = (i % 3) + 6
        const l = (i % 3)
        const width = dimensions[l].width
        const height = dimensions[l].height

        cards.push(
            <div key={i} ref={el => divRef.current[i] = el}>
                <div className="blur-load" style={{ backgroundImage: `url(img/people${k}-small.webp)` }}>
                    <img width={width} height={height} loading="lazy" src={`img/people${k}.webp`} alt="random person" />
                </div>
            </div>
        )
    }

    const handleReflect = (e) => {
        let estilo = getComputedStyle(e.target)
        let textValue = estilo.getPropertyValue('--text').trim()

        if (textValue === "'Remove Reflect'") {
            e.target.style.setProperty('--text', "'Add Reflect'")
        } else if (textValue === "'Add Reflect'") {
            e.target.style.setProperty('--text', "'Remove Reflect'")
        } else {
            console.log("error")
        }

        divRef.current.forEach(div => {
            div.classList.toggle('reflect')
        }, [])
    }

    return (
        <>
            <h1 onClick={handleReflect}>Image Gallery 2</h1>
            <section id="ImageGallery2">
                {cards}
            </section>
        </>
    )
}

export default ImageGallery2;