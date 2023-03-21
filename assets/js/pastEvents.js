const divElements = document.getElementById('divCards')
const checkContainer = document.getElementById('check-container')
const input = document.getElementById('find')

events = JSON.parse(localStorage.getItem('pastEvents'))

//-----Eventos
input.addEventListener('input',mainFilter)

checkContainer.addEventListener('change',mainFilter)

//-----Llamado a Funciones

createCards(events)
createChecks(events)

