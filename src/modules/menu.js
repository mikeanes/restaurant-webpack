function loadMenu(){
    const mainContent = document.querySelector('.mainContent');
    mainContent.classList.add('menu');

    const currentContent = document.createElement('div');
    currentContent.classList.add('currentContentMenu');
    
    const mainText = document.createElement('h1');
    mainText.innerText = "Menu";

    const menuItems = document.createElement('div');
    menuItems.classList.add('menuItemContainer');

    const gryoPork = document.createElement('div');
    const porkTitle = document.createElement('h2');
    const porkInfo = document.createElement('p');
    porkTitle.innerText = 'Pork Gyro';
    porkInfo.innerText = 'A tasty and juicy pork gyro, served with our signature tzatiki and house fries.'
    const gyroChicken = document.createElement('div');
    const chickenTitle = document.createElement('h2');
    const chickenInfo = document.createElement('p');
    chickenTitle.innerText = 'Chicken Gyro';
    chickenInfo.innerText = 'A fresh chicken gyro, served with our homemade secret sauce and house fries.'
    const fries = document.createElement('div');
    const friesTitle = document.createElement('h2');
    const friesInfo = document.createElement('p');
    friesTitle.innerText = 'Fries';
    friesInfo.innerText = 'A plate of our freshly homemade potato fries. Secret sauce included on the side.'
    gryoPork.classList.add('menuItem');
    gyroChicken.classList.add('menuItem');
    fries.classList.add('menuItem');

    mainContent.appendChild(currentContent);
    currentContent.appendChild(mainText);
    currentContent.appendChild(menuItems);
    menuItems.appendChild(gryoPork);
    gryoPork.appendChild(porkTitle);
    gryoPork.appendChild(porkInfo);
    menuItems.appendChild(gyroChicken);
    menuItems.appendChild(fries);
    gyroChicken.appendChild(chickenTitle);
    gyroChicken.appendChild(chickenInfo);
    fries.appendChild(friesTitle);
    fries.appendChild(friesInfo);
}

export default loadMenu;