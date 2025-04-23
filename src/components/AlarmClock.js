import React from 'react'

const AlarmClock = () => {
    return (
        <div className='alarm-clock'>
            <h2>05:00</h2>
            <div>⌄</div>
            <p>Não programado</p>
            <div>
                <input type="text" />
                <div className='check-indicator'></div>
            </div>
        </div>
    )
}

export default AlarmClock;