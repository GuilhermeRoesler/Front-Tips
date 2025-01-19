import React from 'react'

const Dropdown3 = () => {
    return (
        <>
            <h1>Dropdown 3</h1>
            <section id='Dropdown3'>
                <nav>
                    <ul class="menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Tutorial<span class="arrow arrowDown"></span></a>
                            <ul class="submenu">
                                <li><a href="/">Link 1</a></li>
                                <li><a href="/">Link 2<span class="arrow arrowRight"></span></a>
                                    <ul class="submenu2">
                                        <li><a href="/">Link 2.1</a></li>
                                        <li><a href="/">Link 2.2</a></li>
                                        <li><a href="/">Link 2.3</a></li>
                                        <li><a href="/">Link 2.4</a></li>
                                    </ul>
                                </li>
                                <li><a href="/">Link 3</a></li>
                                <li><a href="/">Link 4<span class="arrow arrowRight"></span></a>
                                    <ul class="submenu2">
                                        <li><a href="/">Link 4.1</a></li>
                                        <li><a href="/">Link 4.2<span class="arrow arrowRight"></span></a>
                                            <ul class="submenu3">
                                                <li><a href="/">Link 4.2.1</a></li>
                                                <li><a href="/">Link 4.2.2</a></li>
                                                <li><a href="/">Link 4.2.3</a></li>
                                                <li><a href="/">Link 4.2.4</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/">Link 4.3</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="/">Article</a></li>
                        <li><a href="/">Contacts</a></li>
                    </ul>
                </nav>
            </section>
        </>
    )
}

export default Dropdown3;