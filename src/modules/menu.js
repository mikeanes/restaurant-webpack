function loadMenu(){
    const mainContent = document.querySelector('.mainContent');

    const currentContent = document.createElement('div');
    currentContent.classList.add('currentContent');
    
    const mainText = document.createElement('h1');
    mainText.innerText = "The best Greek nigger in town!"

    mainContent.appendChild(currentContent);
    currentContent.appendChild(mainText);
}

export default loadMenu;