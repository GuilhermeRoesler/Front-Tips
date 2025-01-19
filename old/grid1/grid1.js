function randomizeImages() {
    const images = Array.from(document.getElementsByTagName("img"))
    images.forEach(element => {
        if (element.classList.contains("ignore")) {
            return
        }
        randomNumber = Math.floor(Math.random() * 3 + 1)
        randomImage = `img/lobo${randomNumber}.jpg`
        element.setAttribute("src", randomImage)
    });
}

randomizeImages()