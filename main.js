var w = window.innerWidth;

menusize(w);

function menusize(w){
    if (w < 404){
    document.getElementById("menu").style = "font-size:10px";
    
    }
    else{
    document.getElementById("menu").style = "font-size:inital";
    }
}
console.log("be");