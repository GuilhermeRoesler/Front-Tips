import React from 'react'

const AccentAndCaretColor = () => {
    return (
        <>
            <div className="checkbox-radio">
                <input type="checkbox" id="checkbox" />
                <input type="radio" name="radio" id="radio" />
            </div>
            <div className="slider">
                <input type="range" min="0" max="100" />
            </div>
            <div className="slider">
                <input type="range" min="0" max="100" />
            </div>
            <input type="text" className="text-box" placeholder="Enter Text" spellCheck="false" />
        </>
    )
}

export default AccentAndCaretColor;