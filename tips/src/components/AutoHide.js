import React from 'react'

const AutoHide = () => {
    function click(e) {
        e.currentTarget.classList.toggle('open')
    }

    return (
        <>
            <h1>Auto Hide</h1>
            <section id="auto-hide">
                <div onClick={click}>
                    <div>Hello World</div>
                    <div>
                        <p lang="la">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente in aliquid non aliquam
                            repellendus,
                            illo ducimus temporibus enim voluptates obcaecati, d lang="la"oloremque eum quis maiores at, natus
                            quidem
                            necessitatibus. Quos quasi earum quidem omnis, quibusdam ducimus magni inventore. Est consequatur
                            nihil sunt asperiores! Molestiae officia commodi nulla ipsa eveniet! Natus voluptatum cum totam
                            blanditiis deleniti error. Sit vitae ratione soluta voluptatem ea nesciunt error, consequuntur eius.
                            Cumque eveniet amet recusandae exercitationem officia placeat architecto, assumenda eligendi quam
                            ullam atque incidunt. Distinctio consectetur, dolores facilis nobis ut repellat, tempora earum fuga
                            nisi quo amet eveniet incidunt, qui et deleniti nihil dignissimos! Autem!</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AutoHide;