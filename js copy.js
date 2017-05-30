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

function setDead(killed, killer) {
    killed.status = true;
    killer.target = killed.target

}
function start() {

    p1 = new Person("Kellan", 123, false, "0", "0");
    p2 = new Person("Adrian", 456, false, "0", "0");
    p3 = new Person("Bob", 789, false, "0", "0");
    p4 = new Person("Tyrone", 186, false, "0", "0");
    p5 = new Person("Clive", 256, false, "0", "0");
    p6 = new Person("Beuter", 379, false, "0", "0");
    p7 = new Person("Aberdeen", 135, false, "0", "0");
    p8 = new Person("Billy", 246, false, "0", "0");
    p9 = new Person("Peter", 357, false, "0", "0");
    p10 = new Person("George", 468, false, "0", "0");

    data = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10];
}



function setUp(data){
    for(i=0;i<data.length;i++) {
        if (data[i].target === "0") {
            random = Math.floor((Math.random() * data.length));
            if (data[random].isTarget === "0") {
                data[i].target = data[random].name;
                data[random].isTarget = "1"
            }
            }
        }
        console.log(data[i].name, data[i].target);
}



function test(){
    console.log(p1.dead);
    console.log("THIS WORKS DAWG");
    playerUsername = document.getElementById("playerUsername").value.toLowerCase();
    console.log(playerUsername);
    playerID = document.getElementById("playerID").value;
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




save(data,"assasinData");
retrieve("assasinData");

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


