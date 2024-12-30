const container = document.querySelector('#auto-hide>div')
container.addEventListener('click', () => {
    container.classList.toggle('open')
})

function createNthChildPseudoElementDivs() {
    for (let i = 0; i < 15; i++) {
        const child = document.createElement("div")
        child.append(i+1)
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
    i>=6 ? i=1 : i++
}

setInterval(changeNthChildPseudoElementDivs, 1000)