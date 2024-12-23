function addItems() {
    const container = document.getElementById("container")

    for (let i = 0; i < 25; i++) {
        let child = document.createElement("div")
        child.append(i + 1)
        child.classList.add("item")

        container.appendChild(child)
    }

}

addItems()