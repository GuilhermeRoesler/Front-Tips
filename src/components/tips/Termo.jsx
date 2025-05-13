import React, { useState, useEffect } from 'react'
import { carregarPalavras } from '../../utils/palavraUtils';

import Menu from './Termo/Menu';
import Board from './Termo/Board';
import Keyboard from './Termo/Keyboard';
import EndMessage from './Termo/EndMessage';

const Termo = () => {
    const [selectedRow, setSelectedRow] = useState(0);
    const [selectedCol, setSelectedCol] = useState(0);
    const [palavraSecreta, setPalavraSecreta] = useState([]);
    const [tries, setTries] = useState([])
    const [currentGuess, setCurrentGuess] = useState('_____');
    const [length, setLength] = useState(9);
    const [endMessage, setEndMessage] = useState('');
    const [amount, setAmount] = useState(4)

    // carrega palavras
    useEffect(() => {
        const loadSecretWord = async () => {
            const lista = await carregarPalavras();
            let palavras = []
            Array.from({ length: amount }).forEach((_, index) => {
                palavras[index] = lista[Math.floor(Math.random() * lista.length)];
            });
            console.log(palavras)
            setPalavraSecreta(palavras);
        }
        const resetConfig = () => {
            setTries([])
            setCurrentGuess('_____')
            setSelectedRow(0)
            setSelectedCol(0)
            setEndMessage('')
        }
        loadSecretWord();
        resetConfig();
    }, [amount]);

    // adiciona efeito de keydown
    // useEffect(() => {
    //     window.addEventListener('keydown', handleKeyDown);
    //     return () => window.removeEventListener('keydown', handleKeyDown);
    // }, [currentGuess, selectedRow, selectedCol, tries, palavraSecreta]);

    const countCaracter = (str, char) => {
        return str.split(char).length - 1;
    }

    const removeAccent = (str) => {
        const regex = /[\u0300-\u036f]/g;
        return str.normalize('NFD').replace(regex, '');
    }

    // valida a tentativa
    useEffect(() => {
        const validateAttempt = () => {
            const allWordsGuessed = palavraSecreta.every((word) =>
                tries.some((attempt) => removeAccent(attempt) === removeAccent(word))
            );

            if (palavraSecreta.length > 0 && tries.length > 0) {
                if (allWordsGuessed) {
                    setEndMessage('Parabéns, você acertou todas as palavras!');
                    setSelectedRow(-1);
                    return
                }

                if (selectedRow >= length) {
                    setEndMessage('Foi quase!');
                }
            }
        }
        validateAttempt();
    }, [tries])

    const handleEnter = () => {
        // se não conseguir acertar nenhum
        if (countCaracter(currentGuess, '_') === 0) {
            setTries((prev) => [...prev, currentGuess])
            setCurrentGuess('_____');
            setSelectedCol(0);
            setSelectedRow(selectedRow + 1);
        }
    }

    const handleDelete = () => {
        let str = currentGuess.split("")
        if (currentGuess[selectedCol] === '_' || selectedCol === 5) {
            str[selectedCol - 1] = '_'
            if (selectedCol > 0) {
                setSelectedCol((prev) => prev - 1)
            } else return
        } else {
            str[selectedCol] = '_'
        }
        setCurrentGuess(str.join(""));
    }

    const handleKey = (key) => {
        let str = currentGuess.split("")
        str[selectedCol] = key
        setCurrentGuess(str.join(""));
        if (selectedCol < 5) {
            setSelectedCol((prev) => prev + 1)
        }
    }

    const handleKeyDown = (e) => {
        if (endMessage !== '') return

        const gameKeys = ['ArrowRight', 'ArrowLeft', 'Enter', 'Backspace'];
        const isAlphaKey = /^[a-zA-Z]$/.test(e.key);

        if (gameKeys.includes(e.key) || isAlphaKey) {
            e.preventDefault();
        } else return

        if (e.key === 'ArrowRight') {
            if (selectedCol < 4) {
                setSelectedCol((prev) => prev + 1)
            }
        }
        if (e.key === 'ArrowLeft') {
            if (selectedCol > 0) {
                setSelectedCol((prev) => prev - 1)
            }
        }
        if (e.key === 'Enter') {
            handleEnter()
        }
        if (e.key === 'Backspace' && selectedCol <= 5) {
            handleDelete()
        }
        if (/^[a-zA-Z]$/.test(e.key) && selectedCol < 5) {
            handleKey(e.key)
        }
    };

    return (
        <>
            <Menu setAmount={setAmount} setLength={setLength} />
            <div className='main'>
                {Array.from({ length: amount }).map((_, index) => (
                    <Board
                        key={index}
                        selectedRow={selectedRow}
                        selectedCol={selectedCol}
                        setSelectedCol={setSelectedCol}
                        tries={tries}
                        currentGuess={currentGuess}
                        length={length}
                        setLength={setLength}
                        palavraSecreta={palavraSecreta[index] || ''}
                        removeAccent={removeAccent} />
                ))}
            </div>
            <Keyboard
                endMessage={endMessage}
                handleEnter={handleEnter}
                handleDelete={handleDelete}
                handleKey={handleKey} />
            <EndMessage endMessage={endMessage} />
        </>
    )
}

export default Termo