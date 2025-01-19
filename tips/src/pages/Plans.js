import React from 'react'

const Plans = () => {
    return (
        <main id='Plans'>
            <div class="wrapper">
                <article>
                    <div class="header">
                        <h1>Get the most of of your mobile with the right subscription</h1>
                        <p>All devices come with free delivery or pickup as standard. See information on
                            available
                            shopping options for your location.</p>
                    </div>
                    <ul class="even-columns pricing">
                        <li class="plan plan--pram">
                            <svg class="plan__icon" viewBox="0 0 512 512" width="100" title="baby-carriage">
                                <path
                                    d="M144.8 17c-11.3-17.8-37.2-22.8-54-9.4C35.3 51.9 0 118 0 192h256L144.8 17zM496 96h-48c-35.3 0-64 28.7-64 64v64H0c0 50.6 23 96.4 60.3 130.7C25.7 363.6 0 394.7 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-8.9-1.8-17.2-4.4-25.2 21.6 5.9 44.6 9.2 68.4 9.2s46.9-3.3 68.4-9.2c-2.7 8-4.4 16.3-4.4 25.2 0 44.2 35.8 80 80 80s80-35.8 80-80c0-37.3-25.7-68.4-60.3-77.3C425 320.4 448 274.6 448 224v-64h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM80 464c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32zm320-32c0 17.6-14.4 32-32 32s-32-14.4-32-32 14.4-32 32-32 32 14.4 32 32z" />
                            </svg>
                            <div>
                                <h2 class="plan__title">Pram Speed</h2>
                                <p>Up to 100Mbit/s</p>
                            </div>
                            <p class="plan__price">288,- <span>/month</span></p>
                            <button class="button">Add subscription</button>
                        </li>
                        <li class="plan plan--bike">
                            <svg class="plan__icon" viewBox="0 0 640 512" width="100" title="biking">
                                <path
                                    d="M400 96a48 48 0 1 0-48-48 48 48 0 0 0 48 48zm-4 121a31.9 31.9 0 0 0 20 7h64a32 32 0 0 0 0-64h-52.78L356 103a31.94 31.94 0 0 0-40.81.68l-112 96a32 32 0 0 0 3.08 50.92L288 305.12V416a32 32 0 0 0 64 0V288a32 32 0 0 0-14.25-26.62l-41.36-27.57 58.25-49.92zm116 39a128 128 0 1 0 128 128 128 128 0 0 0-128-128zm0 192a64 64 0 1 1 64-64 64 64 0 0 1-64 64zM128 256a128 128 0 1 0 128 128 128 128 0 0 0-128-128zm0 192a64 64 0 1 1 64-64 64 64 0 0 1-64 64z" />
                            </svg>
                            <div>
                                <h2 class="plan__title">Bike Speed</h2>
                                <p>Up to 150Mbit/s</p>
                            </div>
                            <p class="plan__price">953,- <span>/month</span></p>
                            <button class="button">Add subscription</button>
                        </li>
                        <li class="plan plan--rocket">
                            <svg class="plan__icon" viewBox="0 0 512 512" width="100" title="rocket">
                                <path
                                    d="M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z" />
                            </svg>
                            <div>
                                <h2 class="plan__title">Rocket Speed</h2>
                                <p>Up to 200Mbit/s</p>
                            </div>
                            <p class="plan__price">1028,- <span>/month</span></p>
                            <button class="button">Add subscription</button>
                        </li>
                    </ul>
                    <li class="plan plan--light" style={{marginInline: 'auto'}}>
                        <svg class="plan__icon" viewBox="0 0 320 512" width="100" title="bolt">
                            <path
                                d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z" />
                        </svg>
                        <div>
                            <h2 class="plan__title">Light Speed</h2>
                            <p>Up to 500Mbit/s</p>
                        </div>
                        <p class="plan__price">2028,- <span>/month</span></p>
                        <button class="button">Add subscription</button>
                    </li>
                </article>
            </div>
        </main>
    )
}

export default Plans;