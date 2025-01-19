import React, { useRef } from 'react'

const InterpolateSize1 = () => {
    const divRef = useRef(null)
    const handleOpen = () => divRef.current.classList.toggle('height-auto')

    return (
        <>
            <h1>Interpolate Size 1</h1>
            <section id="interpolate-size1">
                <div>
                    <button onClick={handleOpen}>Click me</button>
                    <div ref={divRef}>
                        <h2>Transitioning to height auto</h2>
                        <p>It's easy to animate and transition to height auto now!</p>
                        <p>Who would have thought it would be so easy!</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default InterpolateSize1;