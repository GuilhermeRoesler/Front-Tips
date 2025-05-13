import React from 'react'
import SidebarNavigation from './sidebar/SidebarNavigation'

import ConversationList from './sidebar/ConversationList'
import AddContact from './sidebar/AddContact'
import Settings from './sidebar/Settings'
import UserProfile from './sidebar/UserProfile'

const Sidebar = ({ secondaryTabIndex, setSecondaryTabIndex, isLogged, user, setSelectedContact }) => {
    return (
        <div className='Sidebar'>
            <SidebarNavigation setSecondaryTabIndex={setSecondaryTabIndex} />
            {secondaryTabIndex == 0 && <ConversationList isLogged={isLogged} user={user} setSelectedContact={setSelectedContact} />}
            {secondaryTabIndex == 1 && <AddContact user={user} />}
            {secondaryTabIndex == 2 && <Settings />}
            {secondaryTabIndex == 3 && <UserProfile user={user} />}
        </div>
    )
}

export default Sidebar