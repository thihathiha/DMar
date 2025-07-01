function discoverfun(){
    document.querySelector("#discover").style.display = "block";
    document.querySelector("#room").style.display = "none";
    document.querySelector("#roomlink").style.color = "grey";
    document.querySelector("#discoverlink").style.color = "#000";
}

document.querySelector("#discoverlink").onclick = discoverfun;

function roomfun(){
    document.querySelector("#discover").style.display = "none";
    document.querySelector("#room").style.display = "block";
    document.querySelector("#roomlink").style.color = "#000";
    document.querySelector("#discoverlink").style.color = "grey";
}

document.querySelector("#roomlink").onclick = roomfun;