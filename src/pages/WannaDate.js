import React, { useRef } from 'react'

const WannaDate = () => {
    const dialogRef = useRef(null)

    const handleMouseOver = (e) => {
        const randomWidth = Math.floor(Math.random() * (window.innerWidth - 100));
        const randomHeight = Math.floor(Math.random() * (window.innerHeight - 100));

        e.target.style.position = 'absolute';
        e.target.style.top = `${randomHeight}px`;
        e.target.style.left = `${randomWidth}px`;
    }

    const handleOpenDialog = () => {
        dialogRef.current.show()
    }

    return (
        <main id='WannaDate'>
            <h1>Quer namorar comigo?</h1>
            <div>
                <button onClick={handleOpenDialog}>SIM</button>
                <button onMouseOver={handleMouseOver}>NAO</button>
            </div>
            <dialog ref={dialogRef}>
                <h2>Parabéns!!!</h2>
            </dialog>
        </main>
    )
}

export default WannaDate;