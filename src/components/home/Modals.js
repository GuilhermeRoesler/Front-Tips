import React, { useRef } from 'react'

const Modals = () => {
    const dialogRef = useRef(null)

    const handleOpen = () => dialogRef.current.showModal()
    const handleClose = () => dialogRef.current.close()

    const hanleClickOutside = e => {
        const rect = dialogRef.current.getBoundingClientRect()
        const clickedOutside = 
            e.clientX < rect.left ||
            e.clientX > rect.right ||
            e.clientY < rect.top ||
            e.clientY > rect.bottom
        
        if (clickedOutside) dialogRef.current.close()
    }

    return (
        <>
            <h1>Modals</h1>
            <section id="modals">
                <button onClick={handleOpen}>Open</button>
                <dialog ref={dialogRef} onClick={hanleClickOutside} aria-labelledby="modal-title" aria-describedby="modal-content">
                    <h2>Hello, World!</h2>
                    <p lang="la">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere quas illo, quod quae
                        cupiditate
                        molestiae consequuntur quia recusandae! Laboriosam.</p>
                    <button onClick={handleClose} aria-label="Close modal" autoFocus>Close</button>
                </dialog>
            </section>
        </>
    )
    }

    export default Modals;