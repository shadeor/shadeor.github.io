
var nav = document.getElementById("side-nav"); 
var currentPos; 
var endPos;
var isOpen = false;

function toggleNav(){
    if(isOpen == false){
        var nav = document.getElementById("side-nav"); 
        endPos = 50;
        for(currentPos = 0; currentPos < endPos; currentPos++){
            nav.style.marginLeft = currentPos + "px";
        }
        isOpen = true;
    }else{
        var nav = document.getElementById("side-nav"); 
        endPos = -300;
         for(currentPos = 50; currentPos > endPos; currentPos--){
            nav.style.marginLeft = currentPos + "px";
        }
        isOpen = false;
    }
}





function openInfo(evt, infoType){
var i, gameInfo, links;
gameInfo = document.getElementsByClassName("gameInfo");
for(i = 0; i < gameInfo.length; i++){
gameInfo[i].style.display = "none";
}//end of for
links = document.getElementsByClassName("links");
for(i = 0; i < links.length; i++){
links[i].className = links[i].className.replace(" active", "");
}//End of for
document.getElementById(infoType).style.display = "block";
evt.currentTarget.className += " active";
}



function displayLightMode() {

    $("#light-theme").hide();
     $("#dark-theme").show();
    $("#current-theme").attr("href", "../light-theme.css");
    localStorage.setItem('selectedTheme', 'light');

}


function displayDarkMode() {
     $("#dark-theme").hide();
    $("#light-theme").show();
    $("#current-theme").attr("href", "../dark-theme.css");
    localStorage.setItem('selectedTheme', 'dark');
    
}

function checkTheme(){
    const theme = localStorage.getItem('selectedTheme');
    
    if(theme === "dark"){
        displayDarkMode();
    }else if(theme === "light"){
        displayLightMode();
    }else{
        displayLightMode();
    }
    
}
