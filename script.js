// Categories
function category1fun() {
  roomfun();
  document.querySelector(".roomtypebtn span").innerText = "Partition";

  filterRoomType = "partition";

  for (let i = 0; i < roomList.length; i++) {
    if (roomList[i].getAttribute("data-type") === "partition") {
      roomList[i].style.display = "flex";
    } else {
      roomList[i].style.display = "none";
    }
  }
  for (let j = 0; j < roomList.length; j++) {
    roomList[j].classList.add("opacityani");
  }
  document.querySelector(".roomlocationbtn span").innerText = "Area";
}

function category3fun() {
  roomfun();
  document.querySelector(".roomtypebtn span").innerText = "Single Room";

  filterRoomType = "single";

  for (let i = 0; i < roomList.length; i++) {
    if (roomList[i].getAttribute("data-type") === "single") {
      roomList[i].style.display = "flex";
    } else {
      roomList[i].style.display = "none";
    }
  }
  for (let j = 0; j < roomList.length; j++) {
    roomList[j].classList.add("opacityani");
  }
  document.querySelector(".roomlocationbtn span").innerText = "Area";
}

function category2fun() {
  foodfun();
  document.querySelector(".foodtypebtn span").innerText = "Monthly Meal";

  filterFoodType = "monthmeal";

  for (let i = 0; i < foodList.length; i++) {
    if (foodList[i].getAttribute("data-type") === "monthmeal") {
      foodList[i].style.display = "flex";
    } else {
      foodList[i].style.display = "none";
    }
  }
  for (let j = 0; j < foodList.length; j++) {
    foodList[j].classList.add("opacityani");
  }
}

function category4fun() {
  foodfun();
  document.querySelector(".foodtypebtn span").innerText = "Daily Curry";

  filterFoodType = "curry";

  for (let i = 0; i < foodList.length; i++) {
    if (foodList[i].getAttribute("data-type") === "curry") {
      foodList[i].style.display = "flex";
    } else {
      foodList[i].style.display = "none";
    }
  }
  for (let j = 0; j < foodList.length; j++) {
    foodList[j].classList.add("opacityani");
  }
}

document.querySelector(".category1").onclick = category1fun;
document.querySelector(".category3").onclick = category3fun;
document.querySelector(".category2").onclick = category2fun;
document.querySelector(".category4").onclick = category4fun;

// Tabs
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
  resetFoodImg();

  // Scroll top
  window.scrollTo({
    top: 0,
    // behavior: "smooth"
  });

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

  document.querySelector("#room").classList.add("opacityani");

  resetFoodFilter();
  resetImg();
  resetFoodImg();

  // Scroll top
  window.scrollTo({
    top: 0,
  });
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

  document.querySelector("#food").classList.add("opacityani");

  resetRoomFilter();
  resetImg();
  resetFoodImg();

  // Scroll top
  window.scrollTo({
    top: 0,
  });
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

  document.querySelector("#about").classList.add("opacityani");

  resetRoomFilter();
  resetFoodFilter();
  resetImg();
  resetFoodImg();

  // Scroll top
  window.scrollTo({
    top: 0,
  });
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
  let found = 0;

  for (let i = 0; i < roomList.length; i++) {
    let roomType = roomList[i].getAttribute("data-type");
    let roomDuration = roomList[i].getAttribute("data-duration");
    let roomLocation = roomList[i].getAttribute("data-location");

    let matchType = filterRoomType === "" || filterRoomType === roomType;
    let matchDuration =
      filterRoomDuration === "" || filterRoomDuration === roomDuration;
    let matchLocation =
      filterRoomLocation === "" || filterRoomLocation === roomLocation;

    let isMatch = matchType && matchDuration && matchLocation;

    roomList[i].style.display = isMatch ? "flex" : "none";

    if (isMatch) found++;
  }

  document.getElementById("noResultMessageRoom").style.display = (found === 0) ? "block" : "none";

  for (let j = 0; j < roomList.length; j++) {
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
document.querySelectorAll("#room article").forEach((article) => {
  const imgs = article.querySelectorAll('img[class^="img"]');
  const prev = article.querySelector("#prev");
  const next = article.querySelector("#next");
  let idx = 0;

  const show = () =>
    imgs.forEach(
      (img, i) => (img.style.display = i === idx ? "block" : "none")
    );
  show(); // Initial image

  prev?.addEventListener("click", () => {
    idx = (idx - 1 + imgs.length) % imgs.length;
    show();
  });

  next?.addEventListener("click", () => {
    idx = (idx + 1) % imgs.length;
    show();
  });
});

function resetImg() {
  document.querySelectorAll("#room article").forEach((article) => {
    const imgs = article.querySelectorAll('img[class^="img"]');
    let idx = 0;
    imgs.forEach((img, i) => (img.style.display = i === 0 ? "block" : "none"));
  });
}

// Reset Room Filter
function resetRoomFilter() {
  filterRoomType = "";
  filterRoomDuration = "";
  filterRoomLocation = "";

  document.querySelector(".roomtypebtn span").innerText = "Room Type";
  document.querySelector(".roomdurationbtn span").innerText = "Rental Duration";
  document.querySelector(".roomlocationbtn span").innerText = "Area";

  for (var j = 0; j < roomList.length; j++) {
    roomList[j].style.display = "flex";
  }

  document.getElementById("noResultMessageFood").style.display = "none";
  document.getElementById("noResultMessageRoom").style.display = "none";
}

// Apply Food Filter Function
let filterFoodType = "";
let filterFoodLocation = "";

let foodList = document.getElementById("food").getElementsByTagName("article");

function foodFilter() {
  let foundfood = 0;
  
  for (let i = 0; i < foodList.length; i++) {
    let foodType = foodList[i].getAttribute("data-type");
    let foodLocation = foodList[i].getAttribute("data-location");

    let matchType = filterFoodType === "" || filterFoodType === foodType;
    let matchLocation =
      filterFoodLocation === "" || filterFoodLocation === foodLocation;

    let isMatchFood = matchType && matchLocation;

    foodList[i].style.display = isMatchFood ? "flex" : "none";

    if (isMatchFood) foundfood++;
  }

  document.getElementById("noResultMessageFood").style.display = (foundfood === 0) ? "block" : "none";

  for (let j = 0; j < foodList.length; j++) {
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
      document.querySelector(".foodlocationbtn span").innerText =
        this.innerText;
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

  for (var j = 0; j < foodList.length; j++) {
    foodList[j].style.display = "flex";
  }

  document.getElementById("noResultMessageFood").style.display = "none";
  document.getElementById("noResultMessageRoom").style.display = "none";
}

// Food Image Carousel

document.querySelectorAll("#food article").forEach((article) => {
  const fimgs = article.querySelectorAll('img[class^="fimg"]');
  const prevfood = article.querySelector("#prevfood");
  const nextfood = article.querySelector("#nextfood");
  let idxfood = 0;

  const show = () =>
    fimgs.forEach(
      (fimg, i) => (fimg.style.display = i === idxfood ? "block" : "none")
    );
  show(); // Initial image

  prevfood?.addEventListener("click", () => {
    idxfood = (idxfood - 1 + fimgs.length) % fimgs.length;
    show();
  });

  nextfood?.addEventListener("click", () => {
    idxfood = (idxfood + 1) % fimgs.length;
    show();
  });
});

function resetFoodImg() {
  document.querySelectorAll("#food article").forEach((article) => {
    const fimgs = article.querySelectorAll('img[class^="fimg"]');
    let idxfood = 0;
    fimgs.forEach(
      (fimg, i) => (fimg.style.display = i === 0 ? "block" : "none")
    );
  });
}
