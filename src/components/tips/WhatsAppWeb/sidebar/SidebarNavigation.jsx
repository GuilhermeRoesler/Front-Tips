import React from 'react'
import { config_top, config_bottom } from '../../../../data/WhatsAppWebData'

const SidebarNavigation = ({ setSecondaryTabIndex }) => {
    return (
        <div className="SidebarNavigation">
            <div className="top">
                {config_top.map((item, index) => (
                    <button key={index} onClick={() => setSecondaryTabIndex(index)}>
                        <i className="material-symbols-outlined">{item}</i>
                    </button>
                ))}
            </div>
            <div className="bottom">
                {config_bottom.map((item, index) => (
                    <button key={index} onClick={() => setSecondaryTabIndex(index + config_top.length)}>
                        <i className="material-symbols-outlined">{item}</i>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default SidebarNavigation