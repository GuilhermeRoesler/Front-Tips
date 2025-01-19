import React from 'react'

const Filters = () => {
    return (
        <>
            <h1>Filters</h1>
            <section id="filters">
                {/* <p>The <code>filter</code> property lets us do some interesting effects, including manipulating images and other interesting things</p> */}
                <div className="card">
                    <a href="/">Article title</a>
                    <div className="blur-load" style={{backgroundImage: 'url(img/science_rock-small.webp)'}}>
                        <img width="330" height="186" loading="lazy" src="img/science_rock.webp" alt="science rock" />
                    </div>
                    <p>Article description ipsum dolor sit amet</p>
                </div>
                <div className="card">
                    <a href="/">Article title</a>
                    <div className="blur-load" style={{backgroundImage: 'url(img/science_planet-small.webp)'}}>
                        <img width="330" height="186" loading="lazy" src="img/science_planet.webp" alt="science planet" />
                    </div>
                    <p>Article description ipsum dolor sit amet</p>
                </div>
            </section>
        </>
    )
}

export default Filters;