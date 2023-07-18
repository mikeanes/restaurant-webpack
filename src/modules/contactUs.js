function loadContact(){
    const mainContent = document.querySelector('.mainContent');

    const currentContent = document.createElement('div');
    currentContent.classList.add('currentContent');
    
    const mainText = document.createElement('h1');
    mainText.innerText = "Contact us";

    mainContent.appendChild(currentContent);
    currentContent.appendChild(mainText);
}

export default loadContact;