for (let index = 0; index < 2; index++) {
    let node = document.getElementById('prioridade');
    let clone = node.cloneNode(true);

    if (index != 0) {
        clone.classList.add('noright');
    }

    document.getElementById('caixa_prioridades').appendChild(clone);
}

var full_image = document.getElementById('single_image');
var image_clone = full_image.cloneNode(true);
document.getElementById('double_image').appendChild(image_clone);

function printImage() {
    var button = document.getElementById('print_button');

    button.classList.add('hidden');
    window.print()
    button.classList.remove('hidden');
};