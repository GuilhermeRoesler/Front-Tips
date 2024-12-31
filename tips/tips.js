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
        child.classList.add("nth-child-pseudo-class-item")

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
    document.querySelector("#interpolate-size>div>div").classList.toggle('height-auto')
}