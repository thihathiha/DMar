function discoverfun(){
    document.querySelector("#discover").style.display = "block";
    document.querySelector("#room").style.display = "none";
    document.querySelector("#food").style.display = "none";
    document.querySelector("#about").style.display = "none";
    document.querySelector("#aboutlink").style.color = "#B2B2B2";
    document.querySelector("#foodlink").style.color = "#B2B2B2";
    document.querySelector("#roomlink").style.color = "#B2B2B2";
    document.querySelector("#discoverlink").style.color = "#000";
}

document.querySelector("#discoverlink").onclick = discoverfun;

function roomfun(){
    document.querySelector("#discover").style.display = "none";
    document.querySelector("#room").style.display = "block";
    document.querySelector("#food").style.display = "none";
     document.querySelector("#about").style.display = "none";
    document.querySelector("#aboutlink").style.color = "#B2B2B2";
    document.querySelector("#foodlink").style.color = "#B2B2B2";
    document.querySelector("#roomlink").style.color = "#000";
    document.querySelector("#discoverlink").style.color = "#B2B2B2";
}

document.querySelector("#roomlink").onclick = roomfun;

function foodfun(){
    document.querySelector("#discover").style.display = "none";
    document.querySelector("#room").style.display = "none";
    document.querySelector("#food").style.display = "block";
     document.querySelector("#about").style.display = "none";
    document.querySelector("#aboutlink").style.color = "#B2B2B2";
    document.querySelector("#foodlink").style.color = "#000";
    document.querySelector("#roomlink").style.color = "#B2B2B2";
    document.querySelector("#discoverlink").style.color = "#B2B2B2";
}

document.querySelector("#foodlink").onclick = foodfun;

function aboutfun(){
    document.querySelector("#discover").style.display = "none";
    document.querySelector("#room").style.display = "none";
    document.querySelector("#food").style.display = "none";
    document.querySelector("#about").style.display = "flex";
    document.querySelector("#aboutlink").style.color = "#000";
    document.querySelector("#foodlink").style.color = "#B2B2B2";
    document.querySelector("#roomlink").style.color = "#B2B2B2";
    document.querySelector("#discoverlink").style.color = "#B2B2B2";
}

document.querySelector("#aboutlink").onclick = aboutfun;

function roomtypelist(){
    if(document.querySelector(".roomtypelist").style.display === "none"){
    document.querySelector(".roomtypelist").style.display = "block";
    }else{
        document.querySelector(".roomtypelist").style.display = "none";
    } 
    document.querySelector(".roomdurationlist").style.display = "none";
    document.querySelector(".roomtenantlist").style.display = "none"
}

document.querySelector(".roomtypebtn").onclick = roomtypelist;

function roomdurationlist(){
    if(document.querySelector(".roomdurationlist").style.display === "none"){
    document.querySelector(".roomdurationlist").style.display = "block";
    }else{
        document.querySelector(".roomdurationlist").style.display = "none";
    } 
    document.querySelector(".roomtypelist").style.display = "none";
    document.querySelector(".roomtenantlist").style.display = "none"
}

document.querySelector(".roomdurationbtn").onclick = roomdurationlist;

function roomtenantlist(){
    if(document.querySelector(".roomtenantlist").style.display === "none"){
    document.querySelector(".roomtenantlist").style.display = "block";
    }else{
        document.querySelector(".roomtenantlist").style.display = "none";
    } 
    document.querySelector(".roomtypelist").style.display = "none";
    document.querySelector(".roomdurationlist").style.display = "none"
}

document.querySelector(".roomtenantbtn").onclick = roomtenantlist;