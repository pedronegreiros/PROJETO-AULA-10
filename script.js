const descricao = document.querySelector("#descricao")
const formulario = document.querySelector("#formulario")
const resultado = document.querySelector("#resultado")

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault()
    const div = document.createElement("div")
    const nova_descricao = document.createElement("span")
    const checkboxes = document.createElement("input")
    const excluir = document.createElement("button")


    nova_descricao.textContent = descricao.value
    excluir.textContent = "Excluir"
    checkboxes.type = "checkbox"

    div.append(checkboxes, nova_descricao, excluir)

    resultado.append(div)

    descricao.value = ""
    descricao.focus()

    checkboxes.addEventListener("click", (evento)=>{
        if(evento.target.checked){
            nova_descricao.style.textDecoration = "line-through"
        }else{
            nova_descricao.style.textDecoration = ""
        }

    })

    excluir.addEventListener("click", (evento)=>{
        resultado.removeChild(div)
    })
})