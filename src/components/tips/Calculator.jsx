import React, { useState } from 'react'
import { evaluate } from 'mathjs'

const Calculator = () => {
    const [inputValue, setInputValue] = useState('')

    const appendToDisplay = (value) => {
        setInputValue((prev) => prev + value)
    }

    const calculate = () => {
        try {
            setInputValue(evaluate(inputValue).toString())
        } catch (error) {
            setInputValue('Error')
        }
    }

    const clearDisplay = () => {
        setInputValue('')
    }

    return (
        <>
            <h1>Calculator</h1>
            <section id='Calculator'>
                <div>
                    <input type="text" readOnly value={inputValue} />
                    <div className='keys'>
                        <button onClick={() => appendToDisplay('+')}>+</button>
                        <button onClick={() => appendToDisplay('7')}>7</button>
                        <button onClick={() => appendToDisplay('8')}>8</button>
                        <button onClick={() => appendToDisplay('9')}>9</button>
                        <button onClick={() => appendToDisplay('-')}>-</button>
                        <button onClick={() => appendToDisplay('4')}>4</button>
                        <button onClick={() => appendToDisplay('5')}>5</button>
                        <button onClick={() => appendToDisplay('6')}>6</button>
                        <button onClick={() => appendToDisplay('*')}>*</button>
                        <button onClick={() => appendToDisplay('1')}>1</button>
                        <button onClick={() => appendToDisplay('2')}>2</button>
                        <button onClick={() => appendToDisplay('3')}>3</button>
                        <button onClick={() => appendToDisplay('/')}>/</button>
                        <button onClick={() => appendToDisplay('0')}>0</button>
                        <button onClick={() => appendToDisplay('.')}>.</button>
                        <button onClick={calculate}>=</button>
                        <button onClick={clearDisplay}>C</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Calculator
