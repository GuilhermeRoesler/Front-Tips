function randomizeImages() {
    const images = Array.from(document.getElementsByTagName("img"))
    images.forEach(element => {
        randomNumber = Math.floor(Math.random() * 3 + 1)
        randomImage = `1img/lobo${randomNumber}.jpg`
        element.setAttribute("src", randomImage)
    });
}

randomizeImages()