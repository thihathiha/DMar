function discoverfun() {
  document.querySelector("#discover").style.display = "block";
  document.querySelector("#room").style.display = "none";
  document.querySelector("#food").style.display = "none";
  document.querySelector("#about").style.display = "none";
  document.querySelector("#aboutlink").style.color = "#B2B2B2";
  document.querySelector("#foodlink").style.color = "#B2B2B2";
  document.querySelector("#roomlink").style.color = "#B2B2B2";
  document.querySelector("#discoverlink").style.color = "#000";

  document.querySelector(".roomtypelist").style.display = "none";
  document.querySelector(".roomdurationlist").style.display = "none";
  document.querySelector(".roomlocationlist").style.display = "none";

  document.querySelector(".foodtypelist").style.display = "none";
  document.querySelector(".foodlocationlist").style.display = "none";

  resetRoomFilter();
  resetFoodFilter();
  resetImg();
  resetfoodImg()
}

document.querySelector("#discoverlink").onclick = discoverfun;

function roomfun() {
  document.querySelector("#discover").style.display = "none";
  document.querySelector("#room").style.display = "block";
  document.querySelector("#food").style.display = "none";
  document.querySelector("#about").style.display = "none";
  document.querySelector("#aboutlink").style.color = "#B2B2B2";
  document.querySelector("#foodlink").style.color = "#B2B2B2";
  document.querySelector("#roomlink").style.color = "#000";
  document.querySelector("#discoverlink").style.color = "#B2B2B2";

  document.querySelector(".foodtypelist").style.display = "none";
  document.querySelector(".foodlocationlist").style.display = "none";

  resetFoodFilter();
  resetImg();
  resetfoodImg()
}

document.querySelector("#roomlink").onclick = roomfun;

function foodfun() {
  document.querySelector("#discover").style.display = "none";
  document.querySelector("#room").style.display = "none";
  document.querySelector("#food").style.display = "block";
  document.querySelector("#about").style.display = "none";
  document.querySelector("#aboutlink").style.color = "#B2B2B2";
  document.querySelector("#foodlink").style.color = "#000";
  document.querySelector("#roomlink").style.color = "#B2B2B2";
  document.querySelector("#discoverlink").style.color = "#B2B2B2";

  document.querySelector(".roomtypelist").style.display = "none";
  document.querySelector(".roomdurationlist").style.display = "none";
  document.querySelector(".roomlocationlist").style.display = "none";

  resetRoomFilter();
  resetImg();
  resetfoodImg()
}

document.querySelector("#foodlink").onclick = foodfun;

function aboutfun() {
  document.querySelector("#discover").style.display = "none";
  document.querySelector("#room").style.display = "none";
  document.querySelector("#food").style.display = "none";
  document.querySelector("#about").style.display = "flex";
  document.querySelector("#aboutlink").style.color = "#000";
  document.querySelector("#foodlink").style.color = "#B2B2B2";
  document.querySelector("#roomlink").style.color = "#B2B2B2";
  document.querySelector("#discoverlink").style.color = "#B2B2B2";

  document.querySelector(".roomtypelist").style.display = "none";
  document.querySelector(".roomdurationlist").style.display = "none";
  document.querySelector(".roomlocationlist").style.display = "none";

  document.querySelector(".foodtypelist").style.display = "none";
  document.querySelector(".foodlocationlist").style.display = "none";

  resetRoomFilter();
  resetFoodFilter();
  resetImg();
  resetfoodImg()
}

document.querySelector("#aboutlink").onclick = aboutfun;

function roomtypelist() {
  const roomTypeList = document.querySelector(".roomtypelist");
  if (window.getComputedStyle(roomTypeList).display === "none") {
    roomTypeList.style.display = "block";
  } else {
    roomTypeList.style.display = "none";
  }
  roomTypeList.classList.add("searchbtnani");
  document.querySelector(".roomdurationlist").style.display = "none";
  document.querySelector(".roomlocationlist").style.display = "none";
}

document.querySelector(".roomtypebtn").onclick = roomtypelist;

function roomdurationlist() {
  const roomDurationList = document.querySelector(".roomdurationlist");
  if (window.getComputedStyle(roomDurationList).display === "none") {
    roomDurationList.style.display = "block";
  } else {
    roomDurationList.style.display = "none";
  }
  roomDurationList.classList.add("searchbtnani");
  document.querySelector(".roomtypelist").style.display = "none";
  document.querySelector(".roomlocationlist").style.display = "none";
}

document.querySelector(".roomdurationbtn").onclick = roomdurationlist;

function roomlocationlist() {
  const roomLocationList = document.querySelector(".roomlocationlist");
  if (window.getComputedStyle(roomLocationList).display === "none") {
    roomLocationList.style.display = "block";
  } else {
    roomLocationList.style.display = "none";
  }
  roomLocationList.classList.add("searchbtnani");
  document.querySelector(".roomtypelist").style.display = "none";
  document.querySelector(".roomdurationlist").style.display = "none";
}

document.querySelector(".roomlocationbtn").onclick = roomlocationlist;

function foodtypelist() {
  const foodTypeList = document.querySelector(".foodtypelist");
  if (window.getComputedStyle(foodTypeList).display === "none") {
    foodTypeList.style.display = "block";
  } else {
    foodTypeList.style.display = "none";
  }
  foodTypeList.classList.add("searchbtnani");
  document.querySelector(".foodlocationlist").style.display = "none";
}

document.querySelector(".foodtypebtn").onclick = foodtypelist;

function foodlocationlist() {
  const foodLocationList = document.querySelector(".foodlocationlist");
  if (window.getComputedStyle(foodLocationList).display === "none") {
    foodLocationList.style.display = "block";
  } else {
    foodLocationList.style.display = "none";
  }
  foodLocationList.classList.add("searchbtnani");
  document.querySelector(".foodtypelist").style.display = "none";
}

document.querySelector(".foodlocationbtn").onclick = foodlocationlist;

// Filter Section

// Apply Room Filter Function
let roomList = document.getElementById("room").getElementsByTagName("article");

let filterRoomType = "";
let filterRoomDuration = "";
let filterRoomLocation = "";

function roomFilter() {
  for (let i = 0; i < roomList.length; i++) {
    let roomType = roomList[i].getAttribute("data-type");
    let roomDuration = roomList[i].getAttribute("data-duration");
    let roomLocation = roomList[i].getAttribute("data-location");

    let matchType = filterRoomType === "" || filterRoomType === roomType;
    let matchDuration =
      filterRoomDuration === "" || filterRoomDuration === roomDuration;
    let matchLocation =
      filterRoomLocation === "" || filterRoomLocation === roomLocation;

    roomList[i].style.display =
      matchType && matchDuration && matchLocation ? "flex" : "none";
  }
  for(let j = 0; j < roomList.length; j++){
        roomList[j].classList.add("opacityani");
      }
}

// Filter Room Type
let roomTypeOptions = document.getElementsByClassName("roomtypeoption");

for (let i = 0; i < roomTypeOptions.length; i++) {
  roomTypeOptions[i].onclick = function () {
    
    filterRoomType = this.getAttribute("data-filter");
    if (filterRoomType === "") {
      document.querySelector(".roomtypebtn span").innerText = "Room Type";
    } else {
      document.querySelector(".roomtypebtn span").innerText = this.innerText;
    }

    roomFilter();
  };
}

// Filter Room Duration
let roomDurationOptions = document.getElementsByClassName("roomdurationoption");

for (let i = 0; i < roomDurationOptions.length; i++) {
  roomDurationOptions[i].onclick = function () {
    filterRoomDuration = this.getAttribute("data-filter");
    if (filterRoomDuration === "") {
      document.querySelector(".roomdurationbtn span").innerText =
        "Rental Duration";
    } else {
      document.querySelector(".roomdurationbtn span").innerText =
        this.innerText;
    }

    roomFilter();
  };
}

// Filter Room Location
let roomLocationOptions = document.getElementsByClassName("roomlocationoption");

for (let i = 0; i < roomLocationOptions.length; i++) {
  roomLocationOptions[i].onclick = function () {
    filterRoomLocation = this.getAttribute("data-filter");
    if (filterRoomLocation === "") {
      document.querySelector(".roomlocationbtn span").innerText = "Area";
    } else {
      document.querySelector(".roomlocationbtn span").innerText =
        this.innerText;
    }

    roomFilter();
  };
}

// Room Image Carousel 
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let count = 1;

prev.onclick = prevfun;
next.onclick = nextfun;


function nextfun(){
  document.querySelector(".img"+count).style.display = "none";
  count++;
  if(count > 3){count = 1};
  document.querySelector(".img"+count).style.display = "block";
}

function prevfun(){
  document.querySelector(".img"+count).style.display = "none";
  count--;
  if(count < 1){count = 3}
  document.querySelector(".img"+count).style.display = "block";
}

function resetImg(){
  for(let i = 1; i <= 3; i++){
    document.querySelector(".img"+count).style.display = "none";
  }
  document.querySelector(".img1").style.display = "block";
  count = 1;
}

// Reset Room Filter
function resetRoomFilter() {
  filterRoomType = "";
  filterRoomDuration = "";
  filterRoomLocation = "";

  document.querySelector(".roomtypebtn span").innerText = "Room Type";
  document.querySelector(".roomdurationbtn span").innerText = "Duration";
  document.querySelector(".roomlocationbtn span").innerText = "Location";

  for (var j = 0; j < roomList.length; j++) {
    roomList[j].style.display = "flex";
  }
}

// Apply Food Filter Function
let filterFoodType = "";
let filterFoodLocation = "";

let foodList = document.getElementById("food").getElementsByTagName("article");

function foodFilter() {
  for (let i = 0; i < foodList.length; i++) {
    let foodType = foodList[i].getAttribute("data-type");
    let foodLocation = foodList[i].getAttribute("data-location");

    let matchType = filterFoodType === "" || filterFoodType === foodType;
    let matchLocation = filterFoodLocation === "" || filterFoodLocation === foodLocation;

    foodList[i].style.display =
      matchType && matchLocation ? "flex" : "none";
  }
  for(let j = 0; j < foodList.length; j++){
        foodList[j].classList.add("opacityani");
      }
}

// Filter Food Type
let foodTypeOptions = document.getElementsByClassName("foodtypeoption");

for (let i = 0; i < foodTypeOptions.length; i++) {
  foodTypeOptions[i].onclick = function () {
    filterFoodType = this.getAttribute("data-filter");
    if (filterFoodType === "") {
      document.querySelector(".foodtypebtn span").innerText = "Food Type";
    } else {
      document.querySelector(".foodtypebtn span").innerText = this.innerText;
    }

    foodFilter();
  };
}

// Filter Food Location
let foodLocationOptions = document.getElementsByClassName("foodlocationoption");

for (let i = 0; i < foodLocationOptions.length; i++) {
  foodLocationOptions[i].onclick = function () {
    filterFoodLocation = this.getAttribute("data-filter");
    if (filterFoodLocation === "") {
      document.querySelector(".foodlocationbtn span").innerText = "Area";
    } else {
      document.querySelector(".foodlocationbtn span").innerText = this.innerText;
    }

    foodFilter();
  };
}

// Reset Food Filter 
function resetFoodFilter() {
  filterFoodType = "";
  filterFoodLocation = "";

  document.querySelector(".foodtypebtn span").innerText = "Food Type";
  document.querySelector(".foodlocationbtn span").innerText = "Area";

  for (var j = 0; j < roomList.length; j++) {
    roomList[j].style.display = "flex";
  }
}

// Food Image Carousel 

let prevfood = document.getElementById("prevfood");
let nextfood = document.getElementById("nextfood");
let countfood = 1;

prevfood.onclick = prevfoodfun;
nextfood.onclick = nextfoodfun;


function nextfoodfun(){
  document.querySelector(".fimg"+countfood).style.display = "none";
  countfood++;
  if(countfood > 3){countfood = 1};
  document.querySelector(".fimg"+countfood).style.display = "block";
}

function prevfoodfun(){
  document.querySelector(".fimg"+countfood).style.display = "none";
  countfood--;
  if(countfood < 1){countfood = 3}
  document.querySelector(".fimg"+countfood).style.display = "block";
}

function resetfoodImg(){
  for(let i = 1; i <= 3; i++){
    document.querySelector(".fimg"+countfood).style.display = "none";
  }
  document.querySelector(".fimg1").style.display = "block";
  countfood = 1;
}