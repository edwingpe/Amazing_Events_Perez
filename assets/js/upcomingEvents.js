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
        cards +=`
        <div class="col">
          <div class="card shadow">
            <img class="card-img" src=${info.image}>
            <div class="card-body row g-0">
              <div class="col-12">
                <h1 class="card-title">${info.name}</h1>
              </div>
              <div class="col-12">
                <p class="card-sub-title">${info.date}</p>
              </div>
              <div class="col-12">
                <p class="card-info">${info.description}</p>
              </div>
              <div class="col-4">
              <p class="card-sub-title">$${info.price}</p>
              </div>
              <div class="col-8">
                <a class="card-btn" href="./details.html" target="_self">More Info</a>
              </div>
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