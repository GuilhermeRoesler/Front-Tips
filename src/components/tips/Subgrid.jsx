import React from 'react'

const Subgrid = () => {
    return (
        <>
            <div>
                <h2>Hello, World!</h2>
                <p lang="la">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident rem incidunt laudantium
                    nostrum
                    dolores ipsa amet pariatur modi sed dicta totam consectetur voluptatum eum nemo, aspernatur
                    officiis,
                    sunt cupiditate voluptas neque adipisci id est sequi!</p>
                <div className="blur-load" style={{ backgroundImage: 'url(img/sunflower-small.webp)' }}>
                    <img width="4752" height="3168" loading="lazy" src="img/sunflower.webp" alt="sunflower" />
                </div>
            </div>
            <div>
                <h2>Hello, World!</h2>
                <p lang="la">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident rem incidunt laudantium
                    nostrum
                    dolores ipsa amet pariatur modi sed dicta totam consectetur voluptatum eum nemo, aspernatur
                    officiis,
                    sunt cupiditate voluptas neque adipisci id est sequi! Praesentium quisquam suscipit magni libero?
                    Dolor
                    blanditiis vitae placeat aperiam necessitatibus dolorem alias modi error?</p>
                <div className="blur-load" style={{ backgroundImage: 'url(img/sunflower-small.webp)' }}>
                    <img width="4752" height="3168" loading="lazy" src="img/sunflower.webp" alt="sunflower" />
                </div>
            </div>
            <div>
                <h2>Hello, World!</h2>
                <p lang="la">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident rem incidunt laudantium
                    nostrum
                    dolores ipsa amet pariatur modi sed dicta totam consectetur voluptatum eum nemo, aspernatur
                    officiis,
                    sunt cupiditate voluptas neque adipisci id est sequi! Praesentium quisquam suscipit magni libero?
                    Dolor
                    blanditiis?</p>
                <div className="blur-load" style={{ backgroundImage: 'url(img/sunflower-small.webp)' }}>
                    <img width="4752" height="3168" loading="lazy" src="img/sunflower.webp" alt="sunflower" />
                </div>
            </div>
        </>
    )
}

export default Subgrid;