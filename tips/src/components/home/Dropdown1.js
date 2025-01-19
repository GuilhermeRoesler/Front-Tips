import React from 'react'

const Dropdown2 = () => {
    return (
        <>
            <h1>Dropdown 1</h1>
            <section id='Dropdown2'>
                <div>
                    <div class="dropdown">
                        <button>Food</button>
                        <div class="dropdown-content">
                            <a href="/">Apple</a>
                            <a href="/">Orange</a>
                            <a href="/">Banana</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button>Drink</button>
                        <div class="dropdown-content">
                            <a href="/">Water</a>
                            <a href="/">Soda</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button>Animal</button>
                        <div class="dropdown-content">
                            <a href="/">Lion</a>
                            <a href="/">Zebra</a>
                            <a href="/">Girafa</a>
                            <a href="/">Alligator</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button>Plant</button>
                        <div class="dropdown-content">
                            <a href="/">Rose</a>
                            <a href="/">Camelia</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dropdown2;