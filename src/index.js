import load from "./load";
import loadHome from "./modules/home";
import loadMenu from "./modules/menu";
import loadContact from "./modules/contactUs";

load();

function resetPage(){
    const content = document.querySelector('.mainContent');
    content.innerHTML = '';
}

const homeBtn = document.getElementById('homeBtn');
homeBtn.addEventListener('click', () => {
    resetPage();
    loadHome();
});

const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', () => {
    resetPage();
    loadMenu();
});

const contactBtn = document.getElementById('contactBtn');
contactBtn.addEventListener('click', () => {
    resetPage();
    loadContact();
});


const buttons = document.querySelectorAll('.navButtonContainer>button');
function resetButtons() {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('clicked');
    }
  };
function handleButtonClick(event) {
    const clickedButton = event.target;
    resetButtons();
    clickedButton.classList.add('clicked');
  };
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleButtonClick);
  };

  homeBtn.click();
