import React from 'react'

const DetailsAndSummary = () => {
    return (
        <>
            <h1>Details and Summary</h1>
            <section id="DetailsAndSummary">
                <div>
                    <details>
                        <summary>Can I animate details/summary elements?</summary>
                        <p>This used to be something that was impossible, but now thanks to modern CSS it's actually pretty easy
                            to
                            do!</p>
                    </details>
                    <details>
                        <summary>How is it possible?</summary>
                        <p>There are a few different ways that you can do it. One of them is using calc-size(), which has some
                            extra
                            things you could do with it, but right now the easiest way is to use a combination of
                            interpolate-size:
                            allow-keywords; and transition-behavior: allow-discrete.</p>
                    </details>
                    <details>
                        <summary>What about browser support?</summary>
                        <p>Browser support isn't great as of the time of creating this demo, but it'll only get better from
                            here.
                            Also, it is a great progressive enhancement. This means that it won't break anything for people on
                            older
                            browsers, they just won't get the fancy animation you've created, while people on newer browser will
                            get
                            it!</p>
                    </details>
                    <details>
                        <summary>What's the catch?</summary>
                        <p>There is none! It's easy to do and it works great! I feel like that's too short, and I want to use
                            this
                            demo to show the animations and need a longer box to show it properly so here's a little bit of
                            extra
                            filler text lang="la" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae totam ad minima
                            corporis
                            facilis nostrum. Et aperiam animi alias voluptatem!</p>
                    </details>
                </div>
            </section>
        </>
    )
}

export default DetailsAndSummary;