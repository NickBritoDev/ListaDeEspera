const form = document.querySelector('form')
const respPet = document.querySelector('span')
const respList = document.getElementById('list')
const btnUrgencia = document.getElementById('btnUrgencia') 
const btnAtender = document.getElementById('btnAtender') 

const pacientes = []

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = form.animalName.value //seleciona o input com id "animalName"
    pacientes.push(name) //adciona o valor do input ao final da lista de vetores
 
    let list = ''
    for(let i = 0; i < pacientes.length; i++) {
        list += `${i + 1}. ${pacientes[i]}\n`
    }

    respList.innerText = list //exibe a lista de pacientes na lista
    form.animalName.value = ''
    form.animalName.focus()

})

btnUrgencia.addEventListener('click', (e) => {
    e.preventDefault()

    if(!form.checkValidity()) {
        alert('Informe o nome do Pet com urgencia!')
        form.animalName.focus()
        return
    }

    const name = form.animalName.value
    pacientes.unshift(name) //adciona o paciente para o inicio da lista

    let list = ''

    pacientes.forEach((paciente, i) => (list += `${i + 1}. ${paciente}\n`))
    respList.innerText = list
    form.animalName.value = ''
    form.animalName.focus()
})

btnAtender.addEventListener('click', () => {
    if (pacientes.length == 0) {
        respPet.innerText = 'Sem pacientes no momento'
        form.animalName.focus()
        return
    }
    const atender = pacientes.shift() //remove do inicio da lista
    respPet.innerText = atender
    let list = ''
    pacientes.forEach((paciente, i) => (list += `${i + 1}. ${paciente}\n`))
    respList.innerText = list
})