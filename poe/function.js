

function Start() {
    var start = document.getElementById("start");
    var home = document.getElementById("home_page");   
    var anim = document.getElementById("div");
    var b1 = document.createElement("BUTTON");   
    var b2 = document.createElement("BUTTON");   
    var find = document.createTextNode("Find A Game");
    var ai = document.createTextNode("Play With AI");       
    var div = document.getElementById("div2");      

    start.parentNode.removeChild(start); //Removes start button      
    home.parentNode.removeChild(home);    
    anim.setAttribute("class", "animation"); //Runs the animation      

    div.setAttribute("class", "container");    

    //Creates new buttons and adds the to the page    
    b1.appendChild(find);
    b1.setAttribute("class", "find");   
    b1.setAttribute("id", "find");
    b1.setAttribute("onclick", "Find()");
    // b1.setAttribute("onclick", "character_cards()");    

    b2.appendChild(ai);
    b2.setAttribute("class", "ai");
    b2.setAttribute("id", "ai");
    //b2.setAttribute("onclick", "Ai()");    
    b2.setAttribute("onclick", "character_cards()");

    document.getElementById("div2").appendChild(b1); 
    document.getElementById("div2").appendChild(b2);    

    
}//End of Start()

function Find(){
    alert("This is currently unavalible!");
}

Element.prototype.setAttributes = function (attrs) {
    for (var idx in attrs) {
        if ((idx === 'styles' || idx === 'style') && typeof attrs[idx] === 'object') {
            for (var prop in attrs[idx]){this.style[prop] = attrs[idx][prop];}//End of for
        } else if (idx === 'html') {
            this.innerHTML = attrs[idx];
        } else {
            this.setAttribute(idx, attrs[idx]);
        }//End if/else
    }//End of for
};//End of function(attrs)

//Quotes
//var quote1 = document.createTextNode("I have, indeed, no abhorrence of danger, except in its absolute effect - in terror. - Edgar Allan Poe");

var quote1 = document.createTextNode("Please resize the Screen, so that the game fits!");

var test = document.createTextNode("Please resize the Screen, so that the game fits!");

//array for the quotes
var quotes = [quote1, test];

get_random = function (list) {
    return list[Math.floor((Math.random()*list.length))];
} 

var paras = [];

var morella = document.createElement("input");
var roderick = document.createElement("input");
var madeline = document.createElement("input");
var prospero = document.createElement("input");
var montresor = document.createElement("input");
var fortunato = document.createElement("input");
var auguste = document.createElement("input");
var toby = document.createElement("input");
var egaeus = document.createElement("input");
var berenice = document.createElement("input");
var ligeia = document.createElement("input");
var rowena = document.createElement("input");
var tamerlane = document.createElement("input");
var ada = document.createElement("input");

function character_cards(){
    //button variables
    var ai = document.getElementById("ai");
    var find = document.getElementById('find');
    //charcter card variables   

    morella.setAttributes({
        'type': 'image',
        //Need to change the image
        'src':'images/temp_character_cards/morella.jpg',    
        'id': 'morella',
        'class': 'character_card', 
        'onclick': 'card_bank(this.id)',
        'styles':{
            'height': '200px',
            'width': '150px'
        }

    });

    roderick.setAttributes({
        'type': 'image',
        //Need to change the image 
        'src':'images/temp_character_cards/roderick.jpg',   
        'id': 'roderick',
        'class': 'character_card', 
        'onclick': 'card_bank(this.id)',
        'styles':{
            'height': '200px',
            'width': '150px'
        }
    });

    madeline.setAttributes({
        'type': 'image',
        //Need to change the image 
        'src':'images/temp_character_cards/madeline.jpg',   
        'id': 'madeline',
        'class': 'character_card', 
        'onclick': 'card_bank(this.id)',
        'styles':{
            'height': '200px',
            'width': '150px'
        }
    });

    prospero.setAttributes({
        'type': 'image',
        //Need to change the image 
        'src':'images/temp_character_cards/prospero.jpg',   
        'id': 'prospero',
        'class': 'character_card', 
        'onclick': 'card_bank(this.id)',
        'styles':{
            'height': '200px',
            'width': '150px'
        }
    });

    montresor.setAttributes({
        'type': 'image',
        //Need to change the image 
        'src':'images/temp_character_cards/montressor.jpg', 
        'id': 'montresor',
        'class': 'character_card', 
        'onclick': 'card_bank(this.id)',
        'styles':{
            'height': '200px',
            'width': '150px'
        }
    });

    fortunato.setAttributes({
        'type': 'image',
        //Need to change the image 
        'src':'images/temp_character_cards/fortunato.jpg', 
        'id': 'fortunato',
        'class': 'character_card', 
        'onclick': 'card_bank(this.id)',
        'styles':{
            'height': '200px',
            'width': '150px'
        }
    });   

    auguste.setAttributes({
        'type': 'image',
        //Need to change the image 
        'src':'images/temp_character_cards/auguste.jpg', 
        'id': 'auguste',
        'class': 'character_card', 
        'onclick': 'card_bank(this.id)',
        'styles':{
            'height': '200px',
            'width': '150px'
        }
    });    


    toby.setAttributes({
        'type': 'image',
        //Need to change the image 
        'src':'images/temp_character_cards/toby.jpg', 
        'id': 'toby',
        'class': 'character_card', 
        'onclick': 'card_bank(this.id)',
        'styles':{
            'height': '200px',
            'width': '150px'
        }
    });  

    egaeus.setAttributes({
        'type': 'image',
        //Need to change the image 
        'src':'images/temp_character_cards/egaeus.jpg', 
        'id': 'egaeus',
        'class': 'character_card', 
        'onclick': 'card_bank(this.id)',
        'styles':{
            'height': '200px',
            'width': '150px'
        }
    });  

    berenice.setAttributes({
        'type': 'image',
        //Need to change the image 
        'src':'images/temp_character_cards/berenice.jpg', 
        'id': 'berenice',
        'class': 'character_card', 
        'onclick': 'card_bank(this.id)',
        'styles':{
            'height': '200px',
            'width': '150px'
        }
    });  

    ligeia.setAttributes({
        'type': 'image',
        //Need to change the image 
        'src':'images/temp_character_cards/ligera.jpg', 
        'id': 'ligeia',
        'class': 'character_card', 
        'onclick': 'card_bank(this.id)',
        'styles':{
            'height': '200px',
            'width': '150px'
        }
    });  

    rowena.setAttributes({
        'type': 'image',
        //Need to change the image 
        'src':'images/temp_character_cards/rowena.jpg', 
        'id': 'rowena',
        'class': 'character_card', 
        'onclick': 'card_bank(this.id)',
        'styles':{
            'height': '200px',
            'width': '150px'
        }
    });    

    tamerlane.setAttributes({
        'type': 'image',
        //Need to change the image 
        'src':'images/temp_character_cards/tamerlane.jpg', 
        'id': 'tamerlane',
        'class': 'character_card', 
        'onclick': 'card_bank(this.id)',
        'styles':{
            'height': '200px',
            'width': '150px'
        }
    });

    ada.setAttributes({
        'type': 'image',
        //Need to change the image 
        'src':'images/temp_character_cards/ada.jpg', 
        'id': 'ada',
        'class': 'character_card', 
        'onclick': 'card_bank(this.id)',
        'styles':{
            'height': '200px',
            'width': '150px'
        }
    });


    document.getElementById("div").append(get_random(quotes));
    document.getElementById("div2").appendChild(morella);
    document.getElementById("div2").appendChild(roderick);

    document.getElementById("div2").appendChild(madeline);

    document.getElementById("div2").appendChild(prospero);
    document.getElementById("div2").appendChild(montresor);

    document.getElementById("div2").appendChild(fortunato);

    document.getElementById("div2").appendChild(auguste);
    document.getElementById("div2").appendChild(toby);
    document.getElementById("div2").appendChild(egaeus);
    document.getElementById("div2").appendChild(berenice);
    document.getElementById("div2").appendChild(ligeia);
    document.getElementById("div2").appendChild(rowena);
    document.getElementById("div2").appendChild(tamerlane);
    document.getElementById("div2").appendChild(ada); 


    //removes the  buttons of of the screen
    ai.parentNode.removeChild(ai);
    find.parentNode.removeChild(find);  


    var eles3 = document.getElementsByClassName("character_card");
    Array.prototype.forEach.call(eles3,function(ele){
        ele.onclick = getCharacterCard(ele);
    });



}//End of charcter_cards()

var player_1_character;
var player_1_role;
var player_2_character;
var player_2_role;
var player_3_character;
var player_3_role;
var player_4_character;
var player_4_role;
var player_5_character;
var player_5_role;
var player_6_character;
var player_6_role;


var characterCards = ["ada", "auguste", "berenice", "egaeus", "fortunato", "ligeia", "madeline", "montresor", "morella", "prospero", "roderick", "rowena", "tamerlane", "toby"];
var characterCards2 = [ada, auguste, berenice, egaeus, fortunato, ligeia, madeline, montresor, morella, prospero, roderick, rowena, tamerlane, toby];
var i = 0;

function getCharacterCard(e){
    return function(){
        //alert(e.getAttribute("id"));
        var character_id = document.getElementById(e.getAttribute("id"));
        player_1_character = character_id;
        player_2_character = get_random_cards(characterCards2);
        player_2_role = get_random_cards(role_cards);
        player_3_character = get_random_cards(characterCards2);
        player_3_role = get_random_cards(role_cards);
        player_4_character = get_random_cards(characterCards2);
        player_4_role = get_random_cards(role_cards);
        player_5_character = get_random_cards(characterCards2);
        player_5_role = get_random_cards(role_cards);
        player_6_character = get_random_cards(characterCards2);
        player_6_role = get_random_cards(role_cards);
        
        for(i = 0; i <= characterCards.length -1; i++){
            var delete_id = document.getElementById(characterCards[i]);
            //alert(delete_id.getAttribute("id"));
            // alert(delete_id);
            if(player_1_character != delete_id){ 
                delete_id.parentNode.removeChild(delete_id);
            }
        }
        var div = document.getElementById("div2"); 
        div.setAttribute("id", "div2_inner");
        div.setAttribute("class", "card_bank_animation"); 
        player_1_role = get_random_cards(role_cards);
        document.getElementById("div2_inner").append(player_1_role);


        game_board();

    }
}           


function card_bank(clicked_id){
    //Checks the id of the card that has been clicked
    var playerCard = document.getElementById(clicked_id);
    //changes that cards id
    playerCard.setAttribute("class", "player1");
    //moves the card to the corner 
    var div = document.getElementById("div2"); 
    div.setAttribute("class", "card_bank_animation"); 

    //removes the other cards off of the screen
    var paras = document.getElementsByClassName('character_card');
    // paras[0].parentNode.removeChild(paras[0]);

    document.getElementById("div2").append(get_random_cards(role_cards));

    game_board();

}//End of card_blank



var morella_audio; 
var detective_audio;
var cat_audio;
var beauty_audio;
var braddoccio_audio;
var life_audio;
var death_audio;
var trist_audio;
var villans_audio;
var carnival_audio;

/*Event Info*/
var hasRun = false;
var heart_hasRun = false;
var painting_hasRun = false; 
var red_hasRun = false; 
var vigil_hasRun = false;
var house_hasRun = false; 
var crossroads_hasRun = false; 
var chimp_hasRun = false;
var cat_hasRun = false;
var carnival_hasRun = false;
var bridge_hasRun = false; 

//var x;
//var event_sec;
//var date;

function baptismEvent(){
    morella_audio = new Audio('audio/Morelia.m4a');
    if(hasRun == false){ 
        var baptism = document.createElement("img");
        baptism.setAttribute("src", "images/temp_event_cards/baptism.jpg");
        baptism.setAttribute("class", "events");
        document.getElementById("div6").append(baptism); 
        hasRun = true;  
        morella_audio.play();      
    } //End of if

    event_sec = 20;
    x = setInterval(function(){
        date = new Date();
        event_sec--;
        if(event_sec < 0)
        {
            //clearInterval(x);
            baptism.setAttribute("class", "eventsEnd");
            clearInterval();
         //   player2();
        }
    },500);

    // alert(hasRun);
}//End of baptismEvent()

function bridgeEvent(){
    braddoccio_audio = new Audio('audio/bradoccio.wav');
    if(bridge_hasRun == false){    
        var bridge = document.createElement("img");
        bridge.setAttribute("src", "images/temp_event_cards/bridge.jpg");
        bridge.setAttribute("class", "events");
        document.getElementById("div6").append(bridge); 
        bridge_hasRun = true;   
        braddoccio_audio.play();
    } //End of if

    event_sec = 20;
    x = setInterval(function(){
        date = new Date();
        event_sec--;
        if(event_sec < 0)
        {
            //clearInterval(x);
            bridge.setAttribute("class", "eventsEnd");
            clearInterval();
           // player2();
        }
    },500);

}//End of bridge()

function carnivalEvent(){ 
    carnival_audio = new Audio('audio/impunity.wav');
    if(carnival_hasRun == false){    
        var carnival = document.createElement("img");
        carnival.setAttribute("src", "images/temp_event_cards/carnival.jpg");
        carnival.setAttribute("class", "events");
        document.getElementById("div6").append(carnival); 
        carnival_hasRun = true;   
        carnival_audio.play();
    } //End of if

    event_sec = 20;
    x = setInterval(function(){
        date = new Date();
        event_sec--;
        if(event_sec < 0)
        {
            //clearInterval(x);
            carnival.setAttribute("class", "eventsEnd");
            clearInterval();
           // player2();
        }
    },500);
}//End of carnival()

function catEvent(){ 
    cat_audio = new Audio('audio/cat_voice.wav');
    if(cat_hasRun == false){    
        var cat = document.createElement("img");
        cat.setAttribute("src", "images/temp_event_cards/cat.jpg");
        cat.setAttribute("class", "events");
        document.getElementById("div6").append(cat); 
        cat_hasRun = true;
        cat_audio.play();
    } //End of if
    event_sec = 20;
    x = setInterval(function(){
        date = new Date();
        event_sec--;
        if(event_sec < 0)
        {
            //clearInterval(x);
            cat.setAttribute("class", "eventsEnd");
            clearInterval();
           // player2();
        }
    },500);
}//End of cat()

function chimpEvent(){ 
    detective_audio = new Audio('audio/detective_serious.mp3');
    if(chimp_hasRun == false){    
        var chimp = document.createElement("img");
        chimp.setAttribute("src", "images/temp_event_cards/chimp.jpg");
        chimp.setAttribute("class", "events");
        document.getElementById("div6").append(chimp); 
        chimp_hasRun = true;   
        detective_audio.play();
    }//End of if 

    event_sec = 20;
    x = setInterval(function(){
        date = new Date();
        event_sec--;
        if(event_sec < 0)
        {
           // clearInterval(x);
            chimp.setAttribute("class", "eventsEnd");
            clearInterval();
            //player2();
        }
    },500);
}//End of chimp()

function crossroadsEvent(){
    //Need to make audio
    if(crossroads_hasRun == false){    
        var crossroads = document.createElement("img");
        crossroads.setAttribute("src", "images/temp_event_cards/crossroads.jpg");
        crossroads.setAttribute("class", "events");
        document.getElementById("div6").append(crossroads); 
        crossroads_hasRun = true;   
    }//End of if 

    event_sec = 20;
    x = setInterval(function(){
        date = new Date();
        event_sec--;
        if(event_sec < 0)
        {
            //clearInterval(x);
            crossroads.setAttribute("class", "eventsEnd");
            clearInterval();
            //player2();
        }
    },500);
}//End of crossroads()

function heartEvent(){
    villans_audio = new Audio('audio/villans.wav');
    if(heart_hasRun == false){    
        var heart = document.createElement("img");
        heart.setAttribute("src", "images/temp_event_cards/heart.jpg");
        heart.setAttribute("class", "events");
        document.getElementById("div6").append(heart); 
        heart_hasRun = true;   
        villans_audio.play(); 
    }//End of if 

    event_sec = 20;
    x = setInterval(function(){
        date = new Date();
        event_sec--;
        if(event_sec < 0)
        {
            //clearInterval(x);
            heart.setAttribute("class", "eventsEnd");
            clearInterval();
            //player2();
        }
    },500);

}//End of heartEvent()

function house_usherEvent(){
    trist_audio = new Audio('audio/trist.wav');
    if(house_hasRun == false){    
        var house_usher = document.createElement("img");
        house_usher.setAttribute("src", "images/temp_event_cards/chimp.jpg");
        house_usher.setAttribute("class", "events");
        document.getElementById("div6").append(house_usher); 
        house_hasRun = true;   
        trist_audio.play();
    }//End of if 

    event_sec = 20;
    x = setInterval(function(){
        date = new Date();
        event_sec--;
        if(event_sec < 0)
        {
            // clearInterval(x);
            house_usher.setAttribute("class", "eventsEnd");
             clearInterval();
            //player2();
        }
    },500);
}//End of house_usher()

function paintingEvent(){ 
    life_audio = new Audio('audio/life.wav');
    if(painting_hasRun == false){    
        var painting = document.createElement("img");
        painting.setAttribute("src", "images/temp_event_cards/painting.jpg");
        painting.setAttribute("class", "events");
        document.getElementById("div6").append(painting); 
        painting_hasRun = true;   
        life_audio.play();
    }//End of if 

    event_sec = 20;
    x = setInterval(function(){
        date = new Date();
        event_sec--;
        if(event_sec < 0)
        {
            //clearInterval(x);
            painting.setAttribute("class", "eventsEnd");
            clearInterval();
            //player2();
        }
    },500);

}//End of paintingEvent()

function red_deathEvent(){
    death_audio = new Audio('audio/red_death_audio');
    if(red_hasRun == false){    
        var red_death = document.createElement("img");
        red_death.setAttribute("src", "images/temp_event_cards/red_death.jpg");
        red_death.setAttribute("class", "events");
        document.getElementById("div6").append(red_death); 
        red_hasRun = true;   
        death_audio.play();
    }//End of if  

    event_sec = 20;
    x = setInterval(function(){
        date = new Date();
        event_sec--;
        if(event_sec < 0)
        {
            //clearInterval(x);
            red_death.setAttribute("class", "eventsEnd");
            clearInterval();
            //player2();
        }
    },500);
}//End of red_deathEvent()

function vigilEvent(){
    beauty_audio = new Audio('audio/beauty.wav');
    if(vigil_hasRun == false){    
        var vigil = document.createElement("img");
        vigil.setAttribute("src", "images/temp_event_cards/vigil.jpg");
        vigil.setAttribute("class", "events");
        document.getElementById("div6").append(vigil); 
        vigil_hasRun = true;   
        beauty_audio.play();
    }//End of if 

    event_sec = 20;
    x = setInterval(function(){
        date = new Date();
        event_sec--;
        if(event_sec < 0)
        {
           // clearInterval(x);
            vigil.setAttribute("class", "eventsEnd");
            clearInterval();
            //player2();
        }
    },500);
}//End of vigilEvent()

//piper

//imp


function clearInetrval(){
    clearInterval(x);
}


var events = ["baptismEvent", "bridgeEvent", "carnivalEvent", "catEvent", "chimpEvent", "crossroadsEvent", "heartEvent", "house_usherEvent", "paintingEvent", "red_deathEvent", "vigilEvent"];



function remove_past_event(){

    document.getElementById("div6").innerHTML = "";

}//End of remove_past_event()





/*GAMEBOARD*/


function game_board(){
    var i;
    var j;
    var row = 11;
    var col = 11;
    var board1 = [];
    var board3 = [];
    var leftCounter = 0;
    var rightCounter = 0;
    var middleCounter = 0;
    //var btns1 = document.createElement("button");
    //var btns2 = document.createElement("button");


    for(i = 0; i <= row; i++){
        //board[i] = [];
        for(j = 0; j <= col; j++){
            // board[i][j] = btns;
            var btns1 = document.createElement("button");
            var btns3 = document.createElement("button");
            btns1.setAttribute("class", "btns");
            btns1.setAttribute("id", "btnLeft_" + leftCounter);
            //btns1.setAttribute("onclick", "board_index()")
            leftCounter++;
            btns3.setAttribute("class", "btns");
            btns3.setAttribute("id", "btnRight_" + rightCounter);
            // btns3.setAttribute("onclick", "board_index()");
            rightCounter++;
            board1.push(btns1);
            board3.push(btns3);
            document.getElementById("div3").append(btns1);
            document.getElementById("div4").append(btns3);
            //document.getElementById("div3").append(board1);
        }//End of for
    }//End of for

    for(i = 0; i < 3; i++){
        for(j = 0; j < 2; j++){
            var btns2 = document.createElement("button");
            btns2.setAttribute("class", "btns2");
            //btns2.setAttribute("name", "btns2");
            btns2.setAttribute("id", "btnMiddle_" + middleCounter);
            middleCounter++;
            // btns2.setAttribute("onclick", "board_index(button_clicked)");
            document.getElementById("div5").append(btns2);
        }//End of for
    }//End of for

    var eles = document.getElementsByClassName("btns");
    var eles2 = document.getElementsByClassName("btns2");
    Array.prototype.forEach.call(eles,function(ele){
        //ele.onclick = runMe(ele);
    });
    Array.prototype.forEach.call(eles2,function(ele){
        // ele.onclick = runMe(ele);
    });     

    var event_counter = 13; //Camn only go up to 13
    var leftEvents = 0;
    var rightEvents = 0;    
    var a = 0;

    //Test Code     
    //document.getElementById("btnLeft_1").setAttribute("onclick", "baptismEvent()");    
    //document.getElementById("btnLeft_1").style.backgroundColor = "green";    


    for(i = 0; i < event_counter; i++){
        var num = Math.floor(Math.random() * 143) + 0;


        if(leftEvents < 7){
            document.getElementById("btnLeft_" + num).setAttribute("name", events[a]);
            //alert(events[a]);
            document.getElementById("btnLeft_" + num).style.backgroundColor = "green";
            leftEvents++;
            a++;
        }else{
            document.getElementById("btnRight_" + num).setAttribute("name", events[a]);
            document.getElementById("btnRight_" + num).style.backgroundColor = "green";
            a++;
            //}
        }//End of for

        //document.getElementById("btnLeft_121").setAttribute("name", "baptismEvent");    
        //document.getElementById("btnLeft_121").style.backgroundColor = "green";
    }//End of for       

    playerSpawn();

    var eles = document.getElementsByClassName("btns");
    var eles2 = document.getElementsByClassName("btns2");
    Array.prototype.forEach.call(eles,function(ele){
        ele.onclick = playerMove(ele);
    });

}//End of gameboard()



/*
function runMe(e){
    return function(){
        alert(e.getAttribute("id"));
    }
}
*/


/*Spawn Players*/

var player1_move = true;
var player2_move = false;
var player3_move = false;
var player4_move = false;
var player5_move = false;
var player6_move = false;

var currentPlayer;
var currentSpot;
var playerPosition;

//var whoseTurn = [player1_move, player2_move, player3_move, player4_move, player5_move, player6_move];

var safeArea1 = document.getElementById("btnMiddle_0");
var safeArea2 = document.getElementById("btnMiddle_1");
var safeArea3 = document.getElementById("btnMiddle_2");
var safearea4 = document.getElementById("btnMiddle_4");
var safeArea5 = document.getElementById("btnMiddle_5");
var safeArea6 = document.getElementById("btnMiddle_6");


/*May need to move to database*/
var player_1_current_id;
var player_1_current_int;
var player_2_current_id;
var player_2_current_int;
var player_3_current_id;
var player_3_current_int;
var player_4_current_id;
var player_4_current_int
var player_5_current_id;
var player_5_current_int;
var player_6_current_id;
var player_6_current_int;

var playerLocations = [player_1_current_id, player_2_current_id, player_3_current_id, player_4_current_id, player_5_current_id, player_6_current_id];

var playerInts = [player_1_current_int, player_2_current_int, player_3_current_int, player_4_current_int, player_5_current_int, player_6_current_int];

var a;


function playerSpawn(){     
    player_1_current_id = document.getElementById("btnLeft_132");
    player_1_current_int = 132;
    player_2_current_id = document.getElementById("btnLeft_0");
    player_2_current_int = 0;
    player_3_current_id = document.getElementById("btnRight_0");
    player_3_current_int = 0;
    player_4_current_id = document.getElementById("btnRight_11");
    player_4_current_int = 11;
    player_5_current_id = document.getElementById("btnRight_143");
    player_5_current_int = 143;
    player_6_current_id = document.getElementById("btnLeft_143");
    player_6_current_int = 143;


    player_1_current_id.style.backgroundColor = "gold";
    //alert(player_1_current_id);
    player_2_current_id.style.backgroundColor = "red";
    player_3_current_id.style.backgroundColor = "red";
    player_4_current_id.style.backgroundColor = "red";
    player_5_current_id.style.backgroundColor = "red";
    player_6_current_id.style.backgroundColor = "red";

    a = 0;
    currentSpot = 132;   


}//End of playerSpawn()



/*AI + Player*/


var can_move_1;
var can_move_2;
var can_move_3;
var can_move_4;
var can_move_5;
var can_move_6;

var move_diagnal_1 = 13;
var move_diagonal_2 = 11;
var move_up_down = 12;
var move_left_right = 1;  

var pastSpot;
var pastSpot_2;
var pastSpot_3;
var pastSpot_4;
var pastSpot_5;
var pastSpot_6;
var hasMoved;

var ai_moves = 0;



var player_2_path = ["btnLeft_0", "btnLeft_13", "btnLeft_14", "btnLeft_15", "btnLeft_16", "btnLeft_17", "btnLeft_18", "btnLeft_19", "btnLeft_20", "btnMiddle_3"];

var player_3_path =["btnRight_0", "btnRight_12", "btnRight_24", "btnRight_36", "btnRight_48", "btnRight_60", "btnRight_72", "btnRight_84", "btnRight_96", "btnRight_108", "btnMiddle_0"];

var player_4_path = ["btnRight_11", "btnRight_22", "btnRight_33", "btnRight_44", "btnRight_55", "btnRight_66", "btnRight_77", "btnRight_88", "btnRight_99", "btnRight_110", "btnMiddle_1"];

var player_5_path = ["btnRight_143", "btnRight_130", "btnRight_129", "btnRight_128", "btnRight_127", "btnRight_126", "btnRight_125", "btnRight_124", "btnRight_123", "btnMiddle_2"];

var player_6_path = ["btnLeft_143", "btnLeft_131", "btnLeft_119", "btnLeft_107", "btnLeft_95", "btnLeft_83", "btnLeft_71", "btnLeft_59", "btnLeft_47", "btnLeft_35", "btnMiddle_5"];



function playerMove(e){

    //alert("player_1_current_id: " + player_1_current_id.getAttribute("id"));      

    return function(){
        pastSpot = player_1_current_id;      
        can_move_1 = currentSpot + move_diagnal_1;
        can_move_2 = currentSpot - move_diagonal_2;
        can_move_3 = currentSpot + move_left_right;
        can_move_4 = currentSpot - move_left_right;
        can_move_5 = currentSpot + move_up_down;
        can_move_6 = currentSpot - move_up_down;      


        //var avalibleMoves = [];

        if(player1_move == true){
            var btnPressed = e.getAttribute("id");
            // alert(e.getAttribute("id"));
            if(btnPressed == "btnLeft_" + can_move_1){
                currentSpot = can_move_1; 
                player_1_current_id = document.getElementById("btnLeft_" + currentSpot);
                hasMoved = true;
            }else if(btnPressed == "btnLeft_" + can_move_2){
                currentSpot = can_move_2;
                player_1_current_id = document.getElementById("btnLeft_" + currentSpot);
                hasMoved = true;
            }else if(btnPressed == "btnLeft_" + can_move_3){
                currentSpot = can_move_3;
                player_1_current_id = document.getElementById("btnLeft_" + currentSpot);
                hasMoved = true;
            } else if(btnPressed == "btnLeft_" + can_move_4){
                currentSpot = can_move_4;
                player_1_current_id = document.getElementById("btnLeft_" + currentSpot);
                hasMoved = true;
            } else if(btnPressed == "btnLeft_" + can_move_5){
                currentSpot = can_move_5;
                player_1_current_id = document.getElementById("btnLeft_" + currentSpot);
                hasMoved = true;
            }else if(btnPressed == "btnLeft_" + can_move_6){
                currentSpot = can_move_6;
                player_1_current_id =  document.getElementById("btnLeft_" + currentSpot);
                hasMoved = true;
            }else{
                alert("You can not move here!");
                hasMoved = false;
            }
            //  alert("pastSpot: " + pastSpot.getAttribute("id"));
            player_1_current_id.style.backgroundColor = "gold";

            var x = player_1_current_id.hasAttribute("name");

            //alert(x);
            var div6 = document.getElementById("div6");
            var pastEvents = div6.getElementsByClassName("eventsEnd");            

            if(x == true){
                while (pastEvents[0]) {
                    pastEvents[0].parentNode.removeChild(pastEvents[0]);
                }//End of while
                //remove_past_event();
                var d = player_1_current_id.getAttribute("name");
                var o = window[d];
                //alert(o);
                o();
                //player2();
            }//End of if
            //window[o]();
            if(hasMoved == true){
                pastSpot.style.backgroundColor = "transparent";
                player1_move = false;
                player2_move = true; 
                ai_moves = ai_moves+1;    
                player2();
            }//End of if

            //alert(player_2_path[ai_moves]);
        }//End of if

        //alert("player_2_current_id: " + player_2_current_id.getAttribute("id"));

        /*Player 2*/



        // alert("player_1_current_id: " + player_1_current_id.getAttribute("id"));
        //alert("current_Spot: " + currentSpot);

        //playerInts[a] = currentSpot;
        //playerLocations[a] = playerPosition;
        //Need to finish

        //alert(ai_moves);

    }
}



function player2(){

    if(player2_move == true){

        pastSpot_2 = player_2_current_id;
        player_2_current_id = document.getElementById(player_2_path[ai_moves]);


        //alert(ai_moves);

        sec = 2;
        x = setInterval(function(){
            date = new Date();
            sec--;
            if(sec < 0)
            {
                clearInterval(x);

                player_2_current_id.style.backgroundColor = "red";
                pastSpot_2.style.backgroundColor = "transparent";     
                player2_move = false;
                player3_move = true;
                player3();

            }
        },500);   


    }//End of if

}//End of player2()


function player3(){

    //alert("player_3_current_id: " + player_3_current_id.getAttribute("id"));
    if(player3_move == true){

        //alert(sec);

        pastSpot_3 = player_3_current_id;
        player_3_current_id = document.getElementById(player_3_path[ai_moves]);
        // alert("player_3_current_id: " + player_3_current_id.getAttribute("id"));

        //alert(ai_moves);

        sec = 2;
        x = setInterval(function(){
            date = new Date();
            sec--;
            if(sec < 0)
            {
                clearInterval(x);

                player_3_current_id.style.backgroundColor = "red";
                pastSpot_3.style.backgroundColor = "transparent";      
                player3_move = false;
                player4_move = true;
                player4();

            }
        },500);  

    }//End of if

}//End of player3()



function player4(){

    if(player4_move == true){

        pastSpot_4 = player_4_current_id;
        player_4_current_id = document.getElementById(player_4_path[ai_moves]);


        //alert(ai_moves);

        sec = 2;
        x = setInterval(function(){
            date = new Date();
            sec--;
            if(sec < 0)
            {
                clearInterval(x);

                player_4_current_id.style.backgroundColor = "red";
                pastSpot_4.style.backgroundColor = "transparent";     
                player4_move = false;
                player5_move = true;
                player5();

            }
        },500);   


    }//End of if

}//End of player4()


function player5(){

    if(player5_move == true){

        pastSpot_5 = player_5_current_id;
        player_5_current_id = document.getElementById(player_5_path[ai_moves]);


        // alert(ai_moves);

        sec = 2;
        x = setInterval(function(){
            date = new Date();
            sec--;
            if(sec < 0)
            {
                clearInterval(x);

                player_5_current_id.style.backgroundColor = "red";
                pastSpot_5.style.backgroundColor = "transparent";     
                player5_move = false;
                player6_move = true;
                player6();

            }
        },500);   


    }//End of if

}//End of player5()


function player6(){

    if(player6_move == true){

        pastSpot_6 = player_6_current_id;
        player_6_current_id = document.getElementById(player_6_path[ai_moves]);


        //  alert(ai_moves);

        sec = 2;
        x = setInterval(function(){
            date = new Date();
            sec--;
            if(sec < 0)
            {
                clearInterval(x);

                player_6_current_id.style.backgroundColor = "red";
                pastSpot_6.style.backgroundColor = "transparent";     
                player6_move = false;
                player1_move = true;

            }
        },500);   


    }//End of if

}//End of player6()








/*ROLE CARD GENERATOR*/


var black_cat = document.createElement("img");
var cat_card = document.createElement("img");
var changling = document.createElement("img");
var child = document.createElement("img");
var devil = document.createElement("img");
var fortune = document.createElement("img");
var heart_card = document.createElement("img");
var judge = document.createElement("img");
var mask = document.createElement("img");
var medic = document.createElement("img");
var occult = document.createElement("img");
var painter = document.createElement("img");
var piper = document.createElement("img");
var plagued = document.createElement("img");
var poe = document.createElement("img");
var raven = document.createElement("img");
var reaper = document.createElement("img");

black_cat.setAttributes({
    'src':'images/temp_role_cards/blackcat.jpg',   
    'id': 'black_cat',
    'class': 'role_card', 
    'styles':{
        'height': '200px',
        'width': '150px'
    }
});

cat_card.setAttributes({
    'src':'images/temp_role_cards/cat.jpg',   
    'id': 'cat',
    'class': 'role_card',
    'styles':{
        'height': '200px',
        'width': '150px'
    }
});

changling.setAttributes({
    'src':'images/temp_role_cards/changling.jpg',   
    'id': 'changling',
    'class': 'role_card',
    'styles':{
        'height': '200px',
        'width': '150px'
    }
});

child.setAttributes({
    'src':'images/temp_role_cards/child.jpg',   
    'id': 'child',
    'class': 'role_card',
    'styles':{
        'height': '200px',
        'width': '150px'
    }
});

devil.setAttributes({
    'src':'images/temp_role_cards/devil.jpg',   
    'id': 'devil',
    'class': 'role_card',
    'styles':{
        'height': '200px',
        'width': '150px'
    }
});

fortune.setAttributes({
    'src':'images/temp_role_cards/fortune.jpg',   
    'id': 'fortune',
    'class': 'role_card', 
    'styles':{
        'height': '200px',
        'width': '150px'
    }
});

heart_card.setAttributes({
    'src':'images/temp_role_cards/heart.jpg',   
    'id': 'heart_card',
    'class': 'role_card', 
    'styles':{
        'height': '200px',
        'width': '150px'
    }
});

judge.setAttributes({
    'src':'images/temp_role_cards/judge.jpg',   
    'id': 'judge',
    'class': 'role_card', 
    'styles':{
        'height': '200px',
        'width': '150px'
    }
});

mask.setAttributes({
    'src':'images/temp_role_cards/mask.jpg',   
    'id': 'mask',
    'class': 'role_card', 
    'styles':{
        'height': '200px',
        'width': '150px'
    }
});

medic.setAttributes({
    'src':'images/temp_role_cards/medic.jpg',   
    'id': 'medic',
    'class': 'role_card', 
    'styles':{
        'height': '200px',
        'width': '150px'
    }
});


occult.setAttributes({
    'src':'images/temp_role_cards/occult.jpg',   
    'id': 'occult',
    'class': 'role_card', 
    'styles':{
        'height': '200px',
        'width': '150px'
    }
});

painter.setAttributes({
    'src':'images/temp_role_cards/painterr.jpg',   
    'id': 'painter',
    'class': 'role_card', 
    'styles':{
        'height': '200px',
        'width': '150px'
    }
});


piper.setAttributes({
    'src':'images/temp_role_cards/piper.jpg',   
    'id': 'piper',
    'class': 'role_card', 
    'styles':{
        'height': '200px',
        'width': '150px'
    }
});

plagued.setAttributes({
    'src':'images/temp_role_cards/plagued.jpg',   
    'id': 'plagued',
    'class': 'role_card', 
    'styles':{
        'height': '200px',
        'width': '150px'
    }
});

poe.setAttributes({
    'src':'images/temp_role_cards/poe.jpg',   
    'id': 'poe',
    'class': 'role_card', 
    'styles':{
        'height': '200px',
        'width': '150px'
    }
});

raven.setAttributes({
    'src':'images/temp_role_cards/raven.jpg',   
    'id': 'raven',
    'class': 'role_card', 
    'styles':{
        'height': '200px',
        'width': '150px'
    }
});

reaper.setAttributes({
    'src':'images/temp_role_cards/reaper.jpg',   
    'id': 'reaper',
    'class': 'role_card', 
    'styles':{
        'height': '200px',
        'width': '150px'
    }
});


var role_cards = [black_cat, cat_card, child, devil, fortune, heart_card, judge, mask, medic, occult, painter, piper, poe, raven, reaper];

get_random_cards = function (list2) {
    return list2[Math.floor((Math.random()*list2.length))];
} //End of get_random_cards


/*Card Info*/

function blackcat(){

}//End of blackcat()

function cat(){

}//End of cat()

function changling(){

}//End of changling

function child(){

}//End of child()

function devil(){

}//End of devil()

function fortune(){

}//End of fortune()

function heartCard(){

}//End of heart()

function judge(){

}//End of judge()

function mask(){

}//End of mask()

function medic(){

}//End of medic()

function occult(){

}//End of occult()

function painter(){

}//End of painter()

function piper(){

}//End of piper()

function plagued(){

}//End of plagued()

function poe(){

}//End of poe()

function raven(){

}//End raven()

function reaper(){

}//End of reaper()

var playerCards = [player_1_character, player_2_character, player_3_character, player_4_character, player_5_character, player_6_character];

/*House Of Trials*/
function houseOfTrials(){
    var div7 = document.getElementById('div7');
    div7.append(player_1_character);
    div7.append(player_2_character);
    div7.append(player_3_character);
    div7.append(player_4_character);
    div7.append(player_5_character);
    div7.append(player_6_character);
    
    var condemn = document.getElementsByClassName("character_card");
    Array.prototype.forEach.call(condemn,function(ele){
        ele.onclick = trials(ele);
    });
    
    
}//End of houseOfTrials


function trials(e){
    return function(){
        //alert(e.getAttribute("id"));
        var character_id = e.getAttribute("id");
         var name = document.getElementById(e.getAttribute("id"));
        
        for(i = 0; i <= playerCards.length -1; i++){
            var delete_id = playerCards[i];
            //alert(delete_id.getAttribute("id"));
            // alert(delete_id);
            if(character_id != delete_id){ 
                delete_id.parentNode.removeChild(delete_id);
            }
        }
        var div = document.getElementById("div7");
       // div.innerHTML(name + "holds the wrong role");
    }
}           





//DATABASE TABLES

/*

CREATE TABLE character_card(
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
name VARCHAR(50),    
type VARCHAR(50),    
image_name VARCHAR(100) CHARACTER SET utf8mb4,
image_folder_path VARCHAR(1000) CHARACTER SET utf8mb4,
image_file_name VARCHAR(1000) CHARACTER SET utf8mb4,
card_id VARCHAR(50),
CONSTRAINT pk_character_card PRIMARY KEY (id)
);

CREATE TABLE players(
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
player VARCHAR(50),    
cahracter_card VARCHAR(50),    
role_card VARCHAR(50),
CONSTRAINT pk_players PRIMARY KEY (id)
);


*/
