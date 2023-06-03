const filtrarElemento = document.querySelector('header input')
const produtos = document.querySelectorAll('.container-produto')

filtrarElemento.addEventListener('input', filtrarProduto)

function filtrarProduto() {
    if (filtrarElemento.value != '') {
        for (let produto of produtos) {
            let title = produto.querySelector('#filtro-produto').textContent.toLowerCase()
            let filtro = filtrarElemento.value.toLowerCase()
            if (title.includes(filtro)) {
                produto.style.display = 'block'
            } else {
                produto.style.display = 'none'
            }
        }
    } else {
        for (let produto of produtos) {
            produto.style.display = 'block'
        }
    }
}