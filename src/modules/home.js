
function loadHome(){
    const mainContent = document.querySelector('.mainContent');

    const currentContent = document.createElement('div');
    currentContent.classList.add('currentContent');
    
    const mainText = document.createElement('h1');
    mainText.innerText = "The best Greek food in town!"

    mainContent.appendChild(currentContent);
    currentContent.appendChild(mainText);
}

export default loadHome;