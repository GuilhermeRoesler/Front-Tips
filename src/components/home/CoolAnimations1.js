import React from 'react'

const CoolAnimations1 = () => {
    return (
        <>
            <h1>Cool Animations 1</h1>

            <section id="cool-animations1">
                <div>
                    <div className="blur-load" style={{ backgroundImage: 'url(img/people3-small.webp)' }}>
                        <img width="2848" height="4272" loading="lazy" src="img/people3.webp" alt="random person" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default CoolAnimations1;