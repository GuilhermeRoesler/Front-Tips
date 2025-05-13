import React, { useState, useEffect } from 'react'

const Board = ({ selectedRow, selectedCol, setSelectedCol, tries, currentGuess, length, setLength, palavraSecreta, removeAccent }) => {
    const [fontSize, setFontSize] = useState('50px')

    const getLetterClass = (rowIndex, colIndex) => {
        let className = 'letter'
        if (selectedRow === rowIndex) {
            className += ' active'
        }
        if (selectedRow === rowIndex && selectedCol === colIndex) {
            className += ' selected'
        }
        if (rowIndex < tries.length) {
            const letter = tries[rowIndex][colIndex];
            if (palavraSecreta && palavraSecreta[colIndex] &&
                removeAccent(letter) === removeAccent(palavraSecreta[colIndex])) {
                className += ' correct'
            } else if (palavraSecreta && removeAccent(palavraSecreta).includes(removeAccent(letter))) {
                className += ' present';
            } else {
                className += ' absent';
            }
        }
        return className
    }

    useEffect(() => {
        const handleResize = () => {
            updateFontSize();
        };

        window.addEventListener("resize", handleResize);

        // Chama a função uma vez para registrar o valor inicial
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const updateFontSize = () => {
        let size = ''
        if (window.innerWidth < 600) {
            size = '30px'
        } else if (window.innerWidth < 900) {
            size = '30px'
        } else if (window.innerWidth < 1000) {
            size = '35px'
        } else if (window.innerWidth < 1100) {
            size = '40px'
        } else if (window.innerWidth < 1200) {
            size = '45px'
        } else if (window.innerWidth < 1300) {
            size = '45px'
        } else if (window.innerWidth < 1400) {
            size = '50px'
        } else {
            size = '60px'
        }
        setFontSize(size)
    }

    return (
        <div className='Board' style={{ fontSize: fontSize }}>
            {Array.from({ length: length * 5 }).map((_, index) => {
                const rowIndex = Math.floor(index / 5);
                const colIndex = index % 5;
                return (
                    <div
                        key={index}
                        className={getLetterClass(rowIndex, colIndex)}
                        onClick={() => setSelectedCol(colIndex)}>
                        {rowIndex < tries.length
                            ? tries[rowIndex][colIndex]
                            : (rowIndex === selectedRow && currentGuess[colIndex] !== '_'
                                ? currentGuess[colIndex]
                                : '')}
                    </div>
                )
            })}
            <button onClick={() => setLength((prev) => prev + 1)}>+</button>
        </div >
    )
}

export default Board