

var roles;
var events;
var rules;
var log;


function dropDownRoles(){
    var element = document.getElementById("div2");
    roles = document.getElementById("role_cards");
    events = document.getElementById("event_cards");
     rules = document.getElementById("howToPlay");
    log = document.getElementById("developer_log");
    var title = document.getElementById("gothic");
    var menu = document.getElementById("menu");    
    roles.style.display = "block";  
    events.style.display = "none";
    element.style.display = "none";
    rules.style.display = "none";
    log.style.display = "none";
    title.parentNode.removeChild(title);
    //menu.setAttribute("class", "animation");
}//End of dropDownRoles()

function howToPlay(){
    var element = document.getElementById("div2");
    roles = document.getElementById("role_cards");
    events = document.getElementById("event_cards");
    rules = document.getElementById("howToPlay");
     log = document.getElementById("developer_log");
    var title = document.getElementById("gothic");
    var menu = document.getElementById("menu");    
    roles.style.display = "none";  
    events.style.display = "none";
    element.style.display = "none";
    rules.style.display = "block";
        log.style.display = "none";
    title.parentNode.removeChild(title);
    
}//End of dropDownCharacters()

function dropDownEvents(){
    var element = document.getElementById("div2");
    events = document.getElementById("event_cards");
    roles = document.getElementById("role_cards");
     rules = document.getElementById("howToPlay");
     log = document.getElementById("developer_log");
    var title = document.getElementById("gothic");
    var menu = document.getElementById("menu");    
    roles.style.display = "none";  
    events.style.display = "block";  
    element.style.display = "none";
    rules.style.display = "none";
        log.style.display = "none";
    title.parentNode.removeChild(title);


}//End of dropDownEvents()

function dropDownLog(){
 var element = document.getElementById("div2");
    events = document.getElementById("event_cards");
    roles = document.getElementById("role_cards");
     rules = document.getElementById("howToPlay");
     log = document.getElementById("developer_log");
    var title = document.getElementById("gothic");
    var menu = document.getElementById("menu");    
    roles.style.display = "none";  
    events.style.display = "none";  
    element.style.display = "none";
    rules.style.display = "none";
        log.style.display = "block";
    title.parentNode.removeChild(title);
}//End of dropDownLog()



