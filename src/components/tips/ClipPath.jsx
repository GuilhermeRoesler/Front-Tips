import React from 'react'
import lake from '../../assets/lake.webp'

const ClipPath = () => {
    return (
        <>
            <h1>Clip Path</h1>
            <section id="ClipPath">
                <div className="blur-load"
                    style={{backgroundImage: `url(${lake})`, clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}>
                    <img 
                        width="1000"
                        height="667" 
                        loading="lazy" 
                        src="img/lake.webp" 
                        alt="Lake landscape view" 
                    />
                </div>
            </section>
        </>
    )
}


export default ClipPath;

// width={1000} height="667" loading="lazy" src="/img/lake.webp" alt="lake image" 