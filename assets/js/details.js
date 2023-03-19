data = JSON.parse(sessionStorage.getItem('dataEvents'))

const queryString = document.location.search

const id = new URLSearchParams(queryString).get("id")

const show = data.events.find(evento => evento._id == id)

const detailsContainer = document.getElementById('details-container')

detailsContainer.innerHTML = `
    <div class="row row-cols-1 row-cols-sm-2">
        <div class="col order-1 order-sm-0">
        <img class="card-detail-img" src="${show.image}" alt="">
    </div>
        <div class="col d-flex align-items-center">
            <ul class="card-info-details">
                <li>Name: ${show.name}</li>
                <li>date: ${show.date}</li>
                <li>description: ${show.description}</li>
                <li>category: ${show.category}</li>
                <li>place: ${show.place}</li>
                <li>capacity: ${show.capacity}</li>
                <li>assistence or estimate: ${show.estimate}</li>
                <li>price: $ ${show.price}</li>
            </ul>
        </div>
    </div>
`
