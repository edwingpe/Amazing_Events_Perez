dataPastEvents = JSON.parse(localStorage.getItem('pastEvents'))
dataUpcomingEvents = JSON.parse(localStorage.getItem('upcomingEvents'));
dataEvents = JSON.parse(localStorage.getItem('dataEvents'));

/* let pastEventsCategories = Array.from(new Set (dataPastEvents.map(element => element.category))) 

let prueba = pastEventsCategories.map(cate => dataPastEvents.filter(event => event.category === cate))

console.log(prueba); */

/* let upcomingEventsCategories = Array.from(new Set (dataUpcomingEvents.map(element => element.category))) */

//-----Capturar elementos HTML

const eventTable= document.getElementById('eventTable');
const upcomingTable = document.getElementById('upcomingTable');
const pastTable= document.getElementById('pastTable');


//----- Datos de eventos pasados y futuros

function dataStatistics(array) {
    let eventsCategories = Array.from( new Set (array.map(element => element.category)))
    let filterEventsCategories = eventsCategories.map(cate => array.filter(event => event.category === cate))
    let statistic = filterEventsCategories.map (eventCat => {
        let calculate = eventCat.reduce((acc, event) => {
            console.log(event)
            console.log(acc)
            acc.category = event.category;
            acc.revenues += event.price * (event.assistance || event.estimate);
            acc.attendance += (((event.assistance || event.estimate) * 100) / event.capacity)
            return acc
        } ,{
            category: "",
            revenues: 0,
            attendance: 0
        })
        calculate.attendance = calculate.attendance / eventCat.length
        return calculate
    })
    console.log(eventsCategories);
    console.log(filterEventsCategories);
    console.log(statistic)
    return statistic
    


}
//-----Porcentaje por Evento.

function assitancePerEvent (array) {
    const arrayAssistance = array.map(event => {
        return {
            attendance: ((event.assistance / event.capacity) * 100).toFixed(2),
            name: event.name
        }
    })
    arrayAssistance.sort((a, b) => b.attendance - a.attendance)
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
            <td>${element.category}</td>
            <td>${element.revenues}</td>
            <td>${element.attendance.toFixed(2)}%</td>
            
        </tr>
    `
    })
    html.innerHTML = row
    
}

addRowMainTable(mainResultsData(assitancePerEvent(dataPastEvents),assitancePerEvent(dataPastEvents).reverse(),capacityPerEvent(dataPastEvents)),eventTable)

addRowTable(dataStatistics(dataUpcomingEvents),upcomingTable)
addRowTable(dataStatistics(dataPastEvents),pastTable)

/* console.log(pastEventsCategories)
console.log(upcomingEventsCategories); */

/* console.log(dataEvents);
console.log(dataPastEvents);
console.log(dataUpcomingEvents); */




