// Declarative function exercise
var factor = "love"
var fplayer = "VLC"
var fmovie = "Dude"
function fav(){
    console.log(factor);
    console.log(fplayer)
    console.log(fmovie);
}
fav()

// Parameter function exercise
function area(length, breadth) {
    console.log(length * breadth);
}
area(12,12)

// Conditional statement exercise
function traffic(a) {
    if (a=="red") {
        console.log("Stop");
    }
    else if (a=="orange") {
        console.log("Ready");
    }
    else if (a=="green") {
        console.log("go");
        
    }
    else{
        console.log("invalid")
    }
}
traffic("pink")

