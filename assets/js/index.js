const divElements = document.getElementById('divCards')
const checkContainer = document.getElementById('check-container')
const input = document.getElementById('find')

async function getEvents() {
    let dataEvents = await fetch('https://mindhub-xj03.onrender.com/api/amazing')
                           .then(response => response.json())
                           .then(dataEvents => {
                                return dataEvents
                           })
    console.log(dataEvents)
    createCards(dataEvents.events)
    createChecks(dataEvents.events)
    localStorage.setItem('dataEvents', JSON.stringify(dataEvents))
    filterUpcomingEvents(dataEvents)
    filterPastEvents(dataEvents)
}


//-----Eventos

input.addEventListener('input',mainFilter)

checkContainer.addEventListener('change',mainFilter)

//-----Llamada a funciones 

getEvents()
