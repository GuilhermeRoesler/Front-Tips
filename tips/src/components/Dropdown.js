import React from 'react'

const Dropdown = ({options, name, link}) => {
    const renderSubMenu = (subOptions) => {
        return (
            <div className='dropdown-content'>
                {subOptions.map((option, index) => (
                    <div className='submenu' key={index}>
                        <a href={option.link} onClick={option.onClick}>{option.name}</a>
                        {option.subOptions && renderSubMenu(option.subOptions)}
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div tabIndex={0} className='dropdown'>
            <a href={link}>{name} ⮟</a>
            {options && renderSubMenu(options)}
        </div>
    )
}

export default Dropdown;