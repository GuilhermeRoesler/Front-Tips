import React from 'react'

const ImageGallery1 = () => {
    const dimensions = [
        {width: '3974', height: '5000'},
        {width: '2662', height: '3993'},
        {width: '2848', height: '4272'},
        {width: '5304', height: '7952'},
        {width: '5304', height: '7952'}
    ]

    const cards = []
    for (let i = 1; i <= 5; i++) {
        const width = dimensions[i-1].width
        const height = dimensions[i-1].height
        cards.push(
            <div key={i}>
                <div className="blur-load" style={{ backgroundImage: `url(img/people${i}-small.webp)` }}>
                    <img width={width} height={height} loading="lazy" src={`img/people${i}.webp`} alt="random person" />
                </div>
            </div>
        )
    }

    return (
        <>
            <h1>Image Gallery 1</h1>
            <section id="ImageGallery1">
                {cards}
            </section>
        </>
    )
}

export default ImageGallery1;