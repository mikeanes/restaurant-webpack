import './styles.css';

function load(){
const content = document.getElementById('content');

const title = document.createElement('h1');
title.textContent = "Wow this is such a good restaurant";
title.classList.add('test');

content.appendChild(title);
}
export default load;