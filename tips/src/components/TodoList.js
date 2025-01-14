import React, { useState, useRef, useEffect } from 'react'

const TodoList = () => {
    const [checkedItems, setCheckedItems] = useState({})
    const [texts, setTexts] = useState(['Tomar água', 'Escovar os dentes', 'Tomar banho'])
    const [items, setItems] = useState([])
    const [openMenuIndex, setOpenMenuIndex] = useState(null);
    const dialogRef = useRef(null)
    const inputRef = useRef(null)

    const handleCheckboxClick = (index) => {
        // access to the previous state
        setCheckedItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }))
    }

    const handleOptionsClick = (index) => {
        setOpenMenuIndex(openMenuIndex === index ? null : index);
    };

    const handleRemoveItem = (index) => {
        setTexts(prev => prev.filter((_, i) => i !== index))
        handleOptionsClick(index)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (openMenuIndex !== null && !event.target.closest('.options-menu')) {
                setOpenMenuIndex(null);
            }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [openMenuIndex]);

    useEffect(() => {
        const newItems = texts.map((item, index) => (
            <li className={checkedItems[index] ? 'checked' : ''} key={index}>
                <p>{item}</p>
                <div>
                    {/* creates a wrapper */}
                    {/* arrow function useful for creating closures */}
                    <input checked={checkedItems[index] || false} onChange={() => handleCheckboxClick(index)} type='checkbox'></input>
                    <svg onClick={() => handleOptionsClick(index)} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#c9c9c9">
                        <path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" />
                    </svg>
                    <ul className="options-menu" style={{display: openMenuIndex === index ? 'block' : 'none'}}>
                        <li onClick={() => handleCheckboxClick(index)}>{checkedItems[index] ? 'Uncompleted' : 'Completed'}</li>
                        <li>Edit</li>
                        <li onClick={() => handleRemoveItem(index)}>Remove</li>
                    </ul>
                </div>
            </li>
        ))
        setItems(newItems)
    }, [texts, checkedItems, openMenuIndex])

    const handleAdding = () => {
        const text = inputRef.current.value;
        if (text.trim()) {
            setTexts([...texts, text]);
            inputRef.current.value = '';
            handleClose();
        }
    };

    const handleOpen = () => dialogRef.current.showModal()
    const handleClose = () => {
        dialogRef.current.close()
        inputRef.current.value = '';
    }

    const handleClickOutside = (e) => {
        const rect = dialogRef.current.getBoundingClientRect()
        const clickedOutside =
            e.clientX < rect.left ||
            e.clientX > rect.right ||
            e.clientY < rect.top ||
            e.clientY > rect.bottom

        if (clickedOutside) handleClose()
    }

    return (
        <>
            <h1>TODO List</h1>
            <section id='todo-list'>
                <div className='card'>
                    <ul>
                        {items}
                    </ul>
                    <button onClick={handleOpen}><svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 -960 960 960" width="2rem" fill="#c9c9c9"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg></button>
                    <dialog onClick={handleClickOutside} ref={dialogRef}>
                        <input ref={inputRef} type='text'></input>
                        <button onClick={handleAdding}><svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 -960 960 960" width="2rem" fill="#c9c9c9"><path d="M759.74-450.92 183.85-208.77q-15.77 6.41-29.81-2.45T140-237.05V-723.2q0-16.72 14.04-25.58t29.81-2.71l575.89 242.41q18.92 8.11 18.92 29.08t-18.92 29.08ZM190.26-266.87 698.36-480l-508.1-214.62v161.24L408.25-480l-217.99 52.31v160.82Zm0 0v-427.75 427.75Z" /></svg></button>
                    </dialog>
                </div>
            </section>
        </>
    )
}

export default TodoList;