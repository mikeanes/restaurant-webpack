function loadMenu(){
    const mainContent = document.querySelector('.mainContent');
    mainContent.classList.add('menu');

    const currentContent = document.createElement('div');
    currentContent.classList.add('currentContentMenu');
    
    const mainText = document.createElement('h1');
    mainText.innerText = "Menu"

    mainContent.appendChild(currentContent);
    currentContent.appendChild(mainText);
}

export default loadMenu;