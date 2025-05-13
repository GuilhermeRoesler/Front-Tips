import React, { useEffect, useRef } from 'react'

const EndMessage = ({ endMessage }) => {
    const dialogRef = useRef(null)

    const handleOpen = () => dialogRef.current.showModal()
    const handleClose = () => dialogRef.current.close()

    useEffect(() => {
        if (endMessage) dialogRef.current.showModal()
    }, [endMessage])

    const hanleClickOutside = (e) => {
        const rect = dialogRef.current.getBoundingClientRect()
        const clickedOutside =
            e.clientX < rect.left ||
            e.clientX > rect.right ||
            e.clientY < rect.top ||
            e.clientY > rect.bottom

        if (clickedOutside) dialogRef.current.close()
    }

    return (
        <dialog ref={dialogRef} onClick={hanleClickOutside} className='EndMessage'>
            <h3>{endMessage}</h3>
            <button className='close' onClick={handleClose}><i className="material-symbols-outlined">close</i></button>
            <button className='ok' onClick={handleClose}>OK</button>
        </dialog>
    )
}

export default EndMessage