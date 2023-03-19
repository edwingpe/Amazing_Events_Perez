const divElements = document.getElementById('divCards')
const checkContainer = document.getElementById('check-container')
const input = document.getElementById('find')

data = JSON.parse(sessionStorage.getItem('dataEvents'))

//-----Eventos
input.addEventListener('input',mainFilter)

checkContainer.addEventListener('change',mainFilter)

//-----Funciones Filtro

function filterPastEvents (data){
    let pEvents = []
    for (let i = 0; i < data.events.length; i++) {
        if (data.events[i].date < data.currentDate){
            pEvents.push(data.events[i])
        }
    }
    sessionStorage.setItem('pastEvents', JSON.stringify(pEvents))
    return pEvents
}


//-----Llamado a Funciones

events = filterPastEvents(data)
createCards(events)
createChecks(events)

