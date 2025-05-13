import React from 'react'

const ChatHeader = ({ isLogged, selectedContact }) => {
    return (
        <div className="ChatHeader">
            {!isLogged ? (<>
                <div className='no-profile-picture'></div>
                <div className="profile-info">
                    <p>João</p>
                    <p>Online</p>
                </div>
                <button><i className="material-symbols-outlined">more_vert</i></button>
            </>) : (<>
                <div className='no-profile-picture'></div>
                <div className="profile-info">
                    <p>{selectedContact.name}</p>
                    <p>Online</p>
                </div>
                <button><i className="material-symbols-outlined">more_vert</i></button>
            </>)}
        </div>
    )
}

export default ChatHeader