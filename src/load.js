import './styles.css';

function load(){
const content = document.getElementById('content');
content.classList.add('container');

const navbar = document.createElement('div');
navbar.classList.add('navbar');

const title = document.createElement('h1');
title.textContent = "YeeYeeRos";
title.classList.add('title');

const navButtons = document.createElement('div');
navButtons.classList.add('navButtonContainer');

const homeBtn = document.createElement('button'); 
homeBtn.id = 'homeBtn';
homeBtn.innerHTML = 'Home';

const menuBtn = document.createElement('button');
menuBtn.id = 'menuBtn';
menuBtn.innerHTML = 'Menu';

const contactBtn = document.createElement('button');
contactBtn.id = 'contactBtn';
contactBtn.innerHTML = 'Contact Us';

content.appendChild(navbar);
navbar.appendChild(title);
navbar.appendChild(navButtons);
navButtons.appendChild(homeBtn);
navButtons.appendChild(menuBtn);
navButtons.appendChild(contactBtn);


}
export default load;