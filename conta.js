const form = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

let numContas = 0
let valTotal = 0
let resposta = ""

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const descricao = form.inDescricao.value
    const valor = Number(form.inValor.value)

    numContas++
    valTotal = valTotal + valor

    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n"

    resp1.innerText = `${resposta}-------------------------------`
    resp2.innerText = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`

    form.inDescricao.value = ""
    form.inValor.value = ""
    form.inDescricao.focus ()
})