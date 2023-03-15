const divElements = document.getElementById('divCards')
const checkContainer = document.getElementById('check-container')


function createCards(array){
    let cards = ''
    for (const info of array) {
        cards +=`<div class="col">
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
        </div>`
    }
    divElements.innerHTML = cards
}

function createChecks(array){
  let checkBoxes = ''
  let categories = new Set(array.map(evento => evento.category))
  console.log(categories)
  categories.forEach(category => {
    checkBoxes += `<div class="form-check">
    <input class="form-check-input" type="checkbox" value="${category}" id="${category}">
    <label class="form-check-label" for="${category}">${category}</label>
  </div>`
  })
  checkContainer.innerHTML = checkBoxes
}

createCards(data.events)
createChecks(data.events)