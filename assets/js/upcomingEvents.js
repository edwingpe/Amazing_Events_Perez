const divElements = document.getElementById('divCards')
const checkContainer = document.getElementById('check-container')
const input = document.getElementById('find')

events = JSON.parse(localStorage.getItem('upcomingEvents'))


//-----Eventos

input.addEventListener('input',mainFilter)

checkContainer.addEventListener('change',mainFilter)

createCards(events)
createChecks(events)