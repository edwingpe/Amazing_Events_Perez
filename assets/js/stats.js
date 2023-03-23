dataPastEvents = JSON.parse(localStorage.getItem('pastEvents'))
dataUpcomingEvents = JSON.parse(localStorage.getItem('upcomingEvents'));
dataEvents = JSON.parse(localStorage.getItem('dataEvents'));

let pastEventsCategories =  new Set (dataPastEvents.map(element => element.category))
let upcomingEventsCategories = new Set (dataUpcomingEvents.map(element => element.category))

//-----Capturar elementos HTML

const eventTable= document.getElementById('eventTable');
const upcomingTable = document.getElementById('upcomingTable');
const pastTable= document.getElementById('pastTable');

//-----Porcentaje por Evento.

function assitancePerEvent (array) {
    const arrayAssistance = array.map(event => {
        return {
            attendance: ((event.assistance / event.capacity) * 100).toFixed(2),
            name: event.name
        }
    })
    arrayAssistance.sort((a, b) => b.attendance - a.attendance)
    console.log(arrayAssistance);
    return arrayAssistance
}


//-----Capacidad por Evento.

function capacityPerEvent (array) {
    const arrayCapacity = array.map(event => {
        return {
            capacity: event.capacity,
            name: event.name
        }
    })
    arrayCapacity.sort((a, b) => b.capacity- a.capacity)
    console.log(arrayCapacity);
    return arrayCapacity
}

function mainResultsData (highestPercentageData, lowestPercentageData, largerCapacity) {
    let data = [
        {
            name: highestPercentageData[0].name,
            percentage: highestPercentageData[0].attendance         
        },
        {
            name: lowestPercentageData[0].name,
            percentage: lowestPercentageData[0].attendance  
        },
        {
            name: largerCapacity[0].name,
            percentage: largerCapacity[0].capacity 
        }
    ]
    return data
}

//-----Agregar fila a tablas

function addRowMainTable(data){
    const eventTable= document.getElementById('eventTable');
    eventTable.innerHTML = `
        <tr>
            <td>${data[0].name} ${data[0].percentage}%</td>
            <td>${data[1].name} ${data[1].percentage}%</td>
            <td>${data[2].name} ${data[2].percentage}</td>
        </tr>
    `    
}

function addRowTable(data, html) {
    row = ''
    data.forEach(element => {
        row += `
        <tr>
            <td>${element}</td>
            
        </tr>
    `
    })
    html.innerHTML = row
    
}

addRowMainTable(mainResultsData(assitancePerEvent(dataPastEvents),assitancePerEvent(dataPastEvents).reverse(),capacityPerEvent(dataPastEvents)),eventTable)

addRowTable(upcomingEventsCategories,upcomingTable)
addRowTable(pastEventsCategories,pastTable)

console.log(pastEventsCategories)
console.log(upcomingEventsCategories);

console.log(dataEvents);
console.log(dataPastEvents);
console.log(dataUpcomingEvents);




