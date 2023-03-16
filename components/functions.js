

function displayLightMode() {
    document.getElementById('light-mode').style.display = "none";
   document.getElementById('dark-mode').style.display = "block";
   // alert("Display Light Mode");
}


function displayDarkMode() {
    //alert("Display Dark Mode");
      document.getElementById('light-mode').style.display = "block";
        document.getElementById('dark-mode').style.display = "none";
}

/*
function toggleTheme(){
     if(document.getElementById('light-mode').style.display === "none"){
         document.getElementById('light-mode').style.display = "block";
         document.getElementById('dark-mode').style.display = "none";
     }else{
         document.getElementById('light-mode').style.display = "none";
         document.getElementById('dark-mode').style.display = "block";
     }
     
    
}
