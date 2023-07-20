
function loadHome(){
    const mainContent = document.querySelector('.mainContent');

    const currentContent = document.createElement('div');
    currentContent.classList.add('currentContent');
    
    const mainText = document.createElement('h1');
    mainText.innerText = "The best Greek food in town!"

    const orderNow = document.createElement('button');
    orderNow.innerHTML = "Order Now";

    const infoBubble = document.createElement('div');
    infoBubble.classList.add('infoBubble');

    const address = document.createElement('div');
    const locationIcon = document.createElement('i');
    locationIcon.classList.add('fa', 'fa-location-dot');
    const addressText = document.createElement('h2');
    addressText.innerText = 'Kantanou 37, Chania 731 31, Greece'
    const hours = document.createElement('div');
    const hoursIcon = document.createElement('i');
    hoursIcon.classList.add('fa', 'fa-clock');
    const hoursText = document.createElement('h2');
    hoursText.innerText = 'Mon - Sun: 11am - 11pm';

    mainContent.appendChild(currentContent);
    currentContent.appendChild(mainText);
    currentContent.appendChild(orderNow);
    currentContent.appendChild(infoBubble);
    infoBubble.appendChild(address);
    address.appendChild(locationIcon);
    address.appendChild(addressText);
    infoBubble.appendChild(hours);
    hours.appendChild(hoursIcon);
    hours.appendChild(hoursText);
}

export default loadHome;