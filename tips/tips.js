const container = document.querySelector('#auto-hide>div')
container.addEventListener('click', () => {
    container.classList.toggle('open')
})