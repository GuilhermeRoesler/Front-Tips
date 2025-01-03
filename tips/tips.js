// GLOBAL IMAGES

const blurLoads = document.querySelectorAll(".blur-load")
blurLoads.forEach(div => {
    const img = div.querySelector("img")

    function loaded() {
        div.classList.add("loaded")
    }

    if (img.complete) {
        loaded()
    } else {
        img.addEventListener("load", loaded)
    }
})

// AUTO HIDE

const container = document.querySelector('#auto-hide>div')
container.addEventListener('click', () => {
    container.classList.toggle('open')
})

// NTH CHILD PSEUDO ELEMENT

function createNthChildPseudoElementDivs() {
    for (let i = 0; i < 15; i++) {
        const child = document.createElement("div")
        child.append(i + 1)
        child.classList.add("item")

        document.querySelector("#nth-child-pseudo-class>div").appendChild(child)
    }
}

createNthChildPseudoElementDivs()

let i = 1;
function changeNthChildPseudoElementDivs() {
    let element = document.getElementById("nth-child-pseudo-class")
    element.classList.remove('active1', 'active2', 'active3', 'active4', 'active5', 'active6')
    element.classList.add('active' + i)
    i >= 6 ? i = 1 : i++
}

setInterval(changeNthChildPseudoElementDivs, 1000)

// MODALS

const openModalsButton = document.querySelector("#modals>button")
const modals = document.querySelector("#modals>dialog")
const closeModalsButton = document.querySelector("#modals>dialog>button")

openModalsButton.addEventListener("click", () => modals.showModal())

closeModalsButton.addEventListener("click", () => modals.close())

modals.addEventListener("click", (event) => {
    const rect = modals.getBoundingClientRect();
    if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
    ) {
        modals.close();
    }
});

// INTERPOLATE SIZE

function openInterpolateSize() {
    document.querySelector("#interpolate-size1>div>div").classList.toggle('height-auto')
}

// GRID WRAPPING

const gridWrapping = document.getElementById("grid-wrapping")

// for (let i = 0; i < 11; i++) {
//     let card = document.createElement("div")
//     card.classList.add("card")

//     let child = document.querySelector("#grid-wrapping>div:first-child")
//     card.innerHTML = child.innerHTML

//     gridWrapping.appendChild(card)
// }

if (window.matchMedia("(max-width: 600px)").matches) {
    for (let i = 0; i < 6; i++) {
        document.querySelector("#grid-wrapping").removeChild(document.querySelector("#grid-wrapping .card:last-child"))
    }
}

const h1_grid_wrapping = document.querySelector("h1:has(+ section#grid-wrapping)")
h1_grid_wrapping.addEventListener("click", () => {
    if (window.matchMedia("(max-width: 600px)").matches) {
        gridWrapping.style.width = '150px'
    } else {
        gridWrapping.style.width = '250px'
    }

    setInterval(() => {
        gridWrapping.style.width = '75%'
    }, 3800);
})

// IMAGE GALLERY 2

const h1_image_gallery2 = document.querySelector("h1:has(+ section#image-gallery2)")
h1_image_gallery2.addEventListener("click", () => {
    let estilo = getComputedStyle(h1_image_gallery2)
    textValue = estilo.getPropertyValue('--text').trim()
    console.log(textValue)

    if (textValue == "'Remove Reflect'") {
        console.log("re")
        h1_image_gallery2.style.setProperty('--text', "'Add Reflect'")
    } else if (textValue == "'Add Reflect'") {
        console.log("add")
        h1_image_gallery2.style.setProperty('--text', "'Remove Reflect'")
    } else {
        console.log("error")
    }

    const dives = document.querySelectorAll("#image-gallery2>div")

    dives.forEach(div => {
        div.classList.toggle("reflect")
        // div.style.setProperty("-webkit-box-reflect", "below 4px linear-gradient(transparent, rgba(0, 0, 0, .15))")
    })
})
