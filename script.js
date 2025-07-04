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
let roomList = document.getElementById("room").getElementsByTagName("article");

// Filter Room Type
let roomTypeOptions = document.getElementsByClassName("roomtypeoption");

for (let i = 0; i < roomTypeOptions.length; i++) {
  roomTypeOptions[i].onclick = function () {
    let filterValue = this.getAttribute("data-filter");
    if (filterValue === "") {
      document.querySelector(".roomtypebtn span").innerText = "Room Type";
    } else {
      document.querySelector(".roomtypebtn span").innerText = this.innerText;
    }

    for (let j = 0; j < roomList.length; j++) {
      let filterType = roomList[j].getAttribute("data-type");

      if (filterValue === "" || filterValue === filterType) {
        roomList[j].style.display = "block";
      } else {
        roomList[j].style.display = "none";
      }
    }
  };
}

// Filter Room Duration
let roomDurationOptions = document.getElementsByClassName("roomdurationoption");

for (let i = 0; i < roomDurationOptions.length; i++) {
  roomDurationOptions[i].onclick = function () {
    let filterValue = this.getAttribute("data-filter");
    if (filterValue === "") {
      document.querySelector(".roomdurationbtn span").innerText =
        "Rental Duration";
    } else {
      document.querySelector(".roomdurationbtn span").innerText =
        this.innerText;
    }

    for (let j = 0; j < roomList.length; j++) {
      let filterDuration = roomList[j].getAttribute("data-duration");

      if (filterValue === "" || filterValue === filterDuration) {
        roomList[j].style.display = "block";
      } else {
        roomList[j].style.display = "none";
      }
    }
  };
}

// Filter Room Location
let roomLocationOptions = document.getElementsByClassName("roomlocationoption");

for (let i = 0; i < roomLocationOptions.length; i++) {
  roomLocationOptions[i].onclick = function () {
    let filterValue = this.getAttribute("data-filter");
    if (filterValue === "") {
      document.querySelector(".roomlocationbtn span").innerText = "Location";
    } else {
      document.querySelector(".roomlocationbtn span").innerText =
        this.innerText;
    }

    for (let j = 0; j < roomList.length; j++) {
      let filterLocation = roomList[j].getAttribute("data-location");

      if (filterValue === "" || filterValue === filterLocation) {
        roomList[j].style.display = "block";
      } else {
        roomList[j].style.display = "none";
      }
    }
  };
}

// Reset Filter
function resetRoomFilter() {
  filterType = "";
  filterDuration = "";
  filterLocation = "";

  document.querySelector(".roomtypebtn span").innerText = "Room Type";
  document.querySelector(".roomdurationbtn span").innerText = "Duration";
  document.querySelector(".roomlocationbtn span").innerText = "Location";

  for (var j = 0; j < roomList.length; j++) {
    roomList[j].style.display = "block";
  }
}
