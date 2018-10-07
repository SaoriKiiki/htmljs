
  // Initialize Firebase
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDPNl_tDQ3i-smWWouGEzfXyphRjY3DyTU",
    authDomain: "lion-ef19b.firebaseapp.com",
    databaseURL: "https://lion-ef19b.firebaseio.com",
    projectId: "lion-ef19b",
    storageBucket: "",
    messagingSenderId: "1013800637127"
  };
     firebase.initializeApp(config);
    var database = firebase.database();


 var firebaseScoreCollection = database.ref().child('score');
 function submitScore(name, number) {
    var score = {
        fullName: name, //another way you could write is $('#myForm [name="fullname"]').
        score: number, //another way you could write is $('#myForm [name="fullname"]').
    };
    firebaseScoreCollection.push(score); 
 }

$(document).ready(function() {
    lion = $("#lion");
    patn = $(".patn");
    girl = $(".girl");
    background = $("#background");
    //second_girl = $(".second_girl");
    //third_girl = $(".third_girl");

    $(document).keydown(function(event) {
        if (event.key === "ArrowUp"){
            jump();
            setTimeout(fall, 550);
        }
    });
     timer = setInterval(run,500);
     girlIndex = 0;
     girlTimer = setInterval(moveGirl, 6000);
     pointTimer = setInterval (morePoints, 500);
});

function moveCloud(){
    var p = patn.get(patnIndex);
    var obj = $(p);
    var right = parseInt(obj.css("right"));
    obj.css("right",(right + 150) + "px");
    setInterval(function(){transition(p)},100);
;}

function moveGirl (){
    var g = girl.get(girlIndex);
    var obj = $(g);
    var right = parseInt(obj.css("right"));
    obj.css("right",(right+ 2500) + "px");
    setInterval(function() {collision(g)}, 100);

    girlIndex++;
    if (girl.length <= girlIndex){
        clearInterval(girlTimer);
        }
}

function jump() {
    $("#lion").css("bottom", "1050px");
    var im = $("<img class='flor' sr='flor.png'>");
    $("body").append(im);
}

function fall(){
    $("#lion").css("bottom", "50px");
} 


function collision(colGirl){
    var colLion = lion.get(0);
    var lionPosition = colLion.getBoundingClientRect();

    var girlPosition = colGirl.getBoundingClientRect();
    if (lionPosition.right > girlPosition.left && 
        lionPosition.left < girlPosition.right &&
        lionPosition.bottom > girlPosition.top) {
        console.log("hit")
        die()
    } 
}


function run(){
    $(".patn").each(function(i, obj){
            var floor = $(obj);
            var right = parseInt(floor.css("right"));
            floor.css("right",(right + 200) + "px");
            if (right > 1000){
                floor.remove();
            }
        })
        addmore();
    }
 
    function addmore(){
        var more = $("<img class='patn' src='patn.png'>");
        $("body").append(more);
    }

function morePoints(){
    var point = parseInt($("#number").text());
    point = point + 1;
    $("#number").text(point);
}
function die() {
    alert("die")
}

