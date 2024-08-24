function adicionarValor(valor) {
    const valorInput = document.querySelector('.display').value

    document.querySelector('.display').value = valorInput + valor
}

function limparTela() {
    document.querySelector('.display').value = ''
}
function Calcular() {
    const valorInput = document.querySelector('.display').value

      document.querySelector('.display').value = eval(valorInput)

}
function Converter() {
    const valorInput = document.querySelector('.display').value

       document.querySelector('.display').value = valorInput * -1
}
function raizQuadrada() {
    const valorInput = document.querySelector('.display').value

    document.querySelector('.display').value = Math.sqrt(valorInput)
}