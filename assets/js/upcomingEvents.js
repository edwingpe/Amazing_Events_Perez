const divElements = document.getElementById('divCards')
const checkContainer = document.getElementById('check-container')
const input = document.getElementById('find')

data = JSON.parse(sessionStorage.getItem('dataEvents'))


//-----Eventos

input.addEventListener('input',mainFilter)

checkContainer.addEventListener('change',mainFilter)

//-----Funciones Filtros

function filterUpcomingEvents(data){
    let uEvents=[]
    for (let i = 0; i < data.events.length; i++) {
         if (data.events[i].date >= data.currentDate){
            uEvents.push(data.events[i])
         }
    }
    sessionStorage.setItem('upcomingEvents', uEvents)
    return uEvents
}

//-----Llamado a Funciones

events = filterUpcomingEvents(data)
createCards(events)
createChecks(events)