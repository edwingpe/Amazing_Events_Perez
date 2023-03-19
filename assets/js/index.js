const divElements = document.getElementById('divCards')
const checkContainer = document.getElementById('check-container')
const input = document.getElementById('find')

data = JSON.parse(sessionStorage.getItem('dataEvents'))

//-----Eventos

input.addEventListener('input',mainFilter)

checkContainer.addEventListener('change',mainFilter)

//-----Llamada a funciones 

createCards(data.events)
createChecks(data.events)