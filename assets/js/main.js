//-----Funcion Async para obtener datos desde la API
let dataEvents;
const getEvents = async () => {
    try {
        const response = await fetch('https://mindhub-xj03.onrender.com/api/amazing')
        dataEvents = await (response.json())
        sessionStorage.setItem('dataEvents', JSON.stringify(dataEvents))
    }
    catch (error) {
        alert('Failed to get dataEvents')
    }
}

//----Funciones Principales
function createCards(array) {
    if (array.length == 0) {
        divElements.innerHTML = `<h2>Not Matches</h2>`
        return
    }
    let cards = ''
    for (const info of array) {
        cards += `<div class="col">
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
                  <a class="card-btn" href="./details.html?id=${info._id}" target="_self">More Info</a>
                </div>
              </div>
            </div>
          </div>`
    }
    divElements.innerHTML = cards
}

function createChecks(array) {
    let checkBoxes = ''
    let categories = new Set(array.map(evento => evento.category))
    categories.forEach(category => {
        checkBoxes += `<div class="form-check">
      <input class="form-check-input" type="checkbox" value="${category}" id="${category}">
      <label class="form-check-label" for="${category}">${category}</label>
    </div>`
    })
    checkContainer.innerHTML = checkBoxes
}

//-----Funciones Filtro
function mainFilter() {
    let initialFilter = textFilter(data.events, input.value)
    let filter = checkFilter(initialFilter)
    createCards(filter)

}

function textFilter(array, text) {
    let filterArray = array.filter(element => element.name.toLowerCase().includes(text.toLowerCase()))
    return filterArray
}

function checkFilter(array) {
    let options = document.querySelectorAll("input[type='checkbox']")
    let arrayCheck = Array.from(options)
    arrayCheck = arrayCheck.filter(option => option.checked)
    arrayCheck = arrayCheck.map(option => option.value)
    filterArray = array.filter(elemento => arrayCheck.includes(elemento.category))
    if (arrayCheck.length > 0) {
        return filterArray
    }
    return array
}

getEvents()