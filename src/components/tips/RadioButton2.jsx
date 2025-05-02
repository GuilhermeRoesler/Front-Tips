import React, { useRef } from 'react'

const RadioButton2 = () => {
    const inputRef = useRef([])
    const titles = ["cheap", "good", "fast"]
    const limit = 2

    const handleChange = (e) => {
        const checkedCount = inputRef.current.filter(input => input.checked).length

        if (checkedCount > limit) {
            inputRef.current.map(input => input.checked = false)
            e.target.checked = true
        }
    }

    const cards = titles.map((title, index) => {
        return (
            <>
                <label htmlFor={title}>{title.charAt(0).toUpperCase() + title.slice(1)}</label>
                <div>
                    <input ref={el => inputRef.current[index] = el} onChange={handleChange} name={title} id={title} type="checkbox" />
                    <div className="check-indicator"></div>
                </div>
            </>
        )
    })

    return (
        <>
            <h1>Radio Button 2</h1>
            <section id="RadioButton2">
                <form>
                    {cards}
                </form>
            </section>
        </>
    )
}

export default RadioButton2;