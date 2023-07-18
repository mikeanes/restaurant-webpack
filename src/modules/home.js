function loadHome(){
    const mainContent = document.querySelector('.mainContent');

    const currentContent = document.createElement('div');
    currentContent.classList.add('currentContent');
    currentContent.innerText = 'IS this working? Greek NIg';

    mainContent.appendChild(currentContent);


}

export default loadHome;