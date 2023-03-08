function filterUpcomingEvents(data){
    let uEvents=[]
    for (let i = 0; i < data.events.length; i++) {
         if (data.events[i].date >= data.currentDate){
            uEvents.push(data.events[i])
         }
    }
    return uEvents
}

function createCards(events){
    let cards = ''
    for(const info of events){
        cards += `
        <div class="col">
        <div class="card shadow">
            <img src=${info.image}>
            <div class="card-body d-flex flex-column justify-content-center">
            <h1 class="card-title">${info.name}</h1>
            <p class="card-sub-title">${info.date}</p>
            <p class="card-info">${info.description}</p>
            <p class="card-sub-title">$${info.price}</p>
            <a class="card-btn" href="./details.html" target="_self">More Info</a>
            </div>
        </div>
        </div>
        `
    }
    return cards
}

const divElements = document.getElementById('divCards')

events = filterUpcomingEvents(data)
divElements.innerHTML = createCards(events)