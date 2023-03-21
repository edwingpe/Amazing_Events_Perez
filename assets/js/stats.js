dataPastEvents = JSON.parse(localStorage.getItem('pastEvents'))
dataUpcomingEvents = JSON.parse(localStorage.getItem('upcomingEvents'));
dataEvents = JSON.parse(localStorage.getItem('dataEvents'));

//-----Capturar elementos HTML

const eventTable= document.getElementById('eventTable');
const upcomingTable = document.getElementById('upcomingTable');
const pastTable= document.getElementById('pastTable');


console.log(dataEvents);
console.log(dataPastEvents);


console.log(dataUpcomingEvents);

let row= ''

dataPastEvents.forEach(element => {
    row += `

    `   
    
});



console.log(eventTable);
console.log(upcomingTable);
console.log(pastTable);
