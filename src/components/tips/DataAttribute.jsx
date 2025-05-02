import React from 'react'

const DataAttribute = () => {
    return (
        <>
            <h1>Data Attribute</h1>
            <section id="DataAttribute">
                <div data-label="free" data-level="basic">
                    <div className="blur-load" style={{backgroundImage: 'url(img/course1-small.webp)'}}>
                        <img width="700" height="367" loading="lazy" src="img/course1.webp" alt="course 1" />
                    </div>
                    <h2>HTML Course</h2>
                    <p>Learn the basics of web development with HTML5 as beginner-friendly as possible</p>
                </div>
                <div data-label="best selling" data-level="intermediate">
                    <div className="blur-load" style={{backgroundImage: 'url(img/course2-small.webp)'}}>
                        <img width="750" height="422" loading="lazy" src="img/course2.webp" alt="course 2" />
                    </div>
                    <h2>CSS Course</h2>
                    <p>Learn CSS3 in 7 Days completely from scratch</p>
                </div>
                <div data-label="coming soon" data-level="advanced">
                    <div className="blur-load" style={{backgroundImage: 'url(img/course3-small.webp)'}}>
                        <img width="800" height="446" loading="lazy" src="img/course3.webp" alt="course 3" />
                    </div>
                    <h2>Web Development Course</h2>
                    <p>Learn Web Development Basics and Advanced Concepts by completing pratical projects</p>
                </div>
            </section>
        </>
    )
}

export default DataAttribute;