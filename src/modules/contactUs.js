function loadContact(){
    const mainContent = document.querySelector('.mainContent');

    const currentContent = document.createElement('div');
    currentContent.classList.add('currentContent');
    
    const mainText = document.createElement('h1');
    mainText.innerText = "Contact us";

    const googleMap = document.createElement('iframe');
    googleMap.src = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3247.798138400841!2d24.00550807534867!3d35.509269339402046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDMwJzMzLjQiTiAyNMKwMDAnMjkuMSJF!5e0!3m2!1sen!2sca!4v1689713270211!5m2!1sen!2sca";
    googleMap.width = '600';
    googleMap.height = '450';
    googleMap.style.border = '0';
    googleMap.allowFullscreen = true;
    googleMap.loading = 'lazy';

    mainContent.appendChild(currentContent);
    currentContent.appendChild(mainText);
    currentContent.appendChild(googleMap);
}

export default loadContact;