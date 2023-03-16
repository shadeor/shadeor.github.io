const lightMode = document.getElementById('light-mode');
const darkMode = document.getElementById('dark-mode');


function displayLightMode(){
    lightMode.hidden = true;
    darkMode.style.display = "block";
}


function displayDarkMode(){
        darkMode.style.display = "none";
        /*lightMode.style.display = "block";*/
}
