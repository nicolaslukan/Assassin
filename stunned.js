/**
 * Created by h205p3 on 5/18/17.
 */

var loggedIn;
var data = []
//this will save an array of objects to a local storage
function save(data, name) {
    var json = JSON.stringify(data);
    localStorage.setItem(name, json);
}

//this retrieves data from local storage
function retrieve(name) {
    var text = localStorage.getItem(name);
    var obj = JSON.parse(text);
    return obj;
}

function setDead() {
    var killer = loggedIn;
    var killed = findPlayerByName(loggedIn.target);
    killed.status = true;
    killer.target = killed.target;

    document.getElementById("targetoutput").innerHTML = killer.target.toUpperCase();

}

function findPlayerByName(name){
    for(var i = 0; i<data.length; i++){
        if(data[i].name === name){
            return data[i]
        }


    }




}



function playerStatus() {

    var playerName = document.getElementById("playerUsername").value.toLowerCase();
    var playerID = document.getElementById("playerID").value;

    for(var i = 0; i<data.length; i++){
        if(data[i].name === playerName && data[i].id === playerID){

            if(data[i].dead==false){
                console.log("alive", data[i].target)
                document.getElementById("statusoutput").innerHTML = "ALIVE";
                document.getElementById("targetoutput").innerHTML = data[i].target.toUpperCase();
                console.log(data[i].name);
                document.getElementById("playernameoutput").innerHTML = data[i].name.toUpperCase();
                loggedIn = data[i];




            }
            else {

                console.log("You're dead, you cuck. Leave.")
            }


        }


    }

}
function newplayer() {
var newplayers = new Person($("#fullname").val(),$("#fullid").val(),false,"0","0");
data.push(newplayers);
    console.log(data);
}




function start() {

    //p1 = new Person("Kellan","123", false, "0", "0");
    //p2 = new Person("Adrian", "456", false, "0", "0");
    //p3 = new Person("Bob", "789", false, "0", "0");
    //p4 = new Person("Tyrone", "186", false, "0", "0");
    //p5 = new Person("Clive", "256", false, "0", "0");
    //p6 = new Person("Beuter", "379", false, "0", "0");
    //p7 = new Person("Aberdeen", "135", false, "0", "0");
    //p8 = new Person("Billy", "246", false, "0", "0");
    //p9 = new Person("Peter", "357", false, "0", "0");
    //p10 = new Person("George", "468", false, "0", "0");

    //data = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10];


    setUp(data);
    console.log(data)
}



function setUp(data){
    var allAssigned = false;
    while(!allAssigned) {
        for (i = 0; i < data.length; i++) {
            if (data[i].target === "0") {
                random = Math.floor((Math.random() * data.length));
                if (data[random].isTarget === "0" && data[random].name != data[i].name ) {
                    // PUT IN THE IF STATEMENT DOES NOT EQUAL PERSON TARGETING YOU

                    data[i].target = data[random].name;
                    data[random].isTarget = "1";
                }
            }
        }
        var count = 0;
        for (j = 0; j < data.length; j++){
            if(data[j].target != "0"){
                count++;
            }
        }
        if(count === data.length) {
            allAssigned = true;
        }

    }
    for (i = 0; i < data.length; i++) {
        console.log(data[i].name, data[i].target);
    }
}



function test(){
    console.log(p1.dead);
    console.log("THIS WORKS DAWG");

    console.log(playerUsername);

    console.log(playerID);
    setUp(data);

}

function login(){
    for(i=0;i<data.length;i++){
        if(playerUsername === data[i].name){

        }

    }




}


function Person(name,id,status,x,y) {
    this.name = name.toLowerCase();
    this.id = id;
    this.dead = status;
    this.target = x;
    this.isTarget = y;
}

function playerPage(){





}


save(data,"assassinData");
retrieve("assassinData");

function checkKill() {

    for(i=0;i < data.length; i++)
    {
        retrieve("assassinData");

        //loop through all data
        //if status == alive and code matches
        //set user to dead

    }


    //save data
    save(data, "assassinData");
}

function findNextVictim() {

    //loop through looking for someone who is alive

}