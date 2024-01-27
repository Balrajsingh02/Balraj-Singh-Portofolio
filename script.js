// selecting whole navbar
let navbar = document.querySelector("#mobile-navbar");
let menuBarButton = document.querySelector("#bar");

//selecting buttons and courses related to that button

// education section

// select buttons using ids
let latestCourseButton = document.querySelector("#latest-course");

let javascriptButton = document.querySelector("#javascript");

let graduationButton = document.querySelector("#graduation");

let seniorSecondaryButton = document.querySelector("#senior-secondary");

let matriculationButton = document.querySelector("#matriculation");

// getting spans

let latestCourseSpan = latestCourseButton.querySelector("span");

let javascriptSpan = javascriptButton.querySelector("span");

let graduationSpan = graduationButton.querySelector("span");

let seniorSecondarySpan = seniorSecondaryButton.querySelector("span");

let matriculationSpan = matriculationButton.querySelector("span");

// select buttons related info

let latestCourseInfo = document.querySelector("#latest-course-info");

let javascriptInfo = document.querySelector("#javascript-info");

let graduationInfo = document.querySelector("#graduation-info");

let seniorSecondaryInfo = document.querySelector("#senior-secondary-info");

let matriculationInfo = document.querySelector("#matriculation-info");

// *********************************************

// logic function
function showHideNav() {
  if (navbar.style.display === "flex") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "flex";
  }
}

// button interctivity

menuBarButton.addEventListener("click", showHideNav);

// courses logic

// latest course
latestCourseButton.addEventListener("click", function () {
  if (latestCourseInfo.style.display === "block") {
    // turn on buttons
    javascriptButton.style.display = "flex";
    graduationButton.style.display = "flex";
    seniorSecondaryButton.style.display = "flex";
    matriculationButton.style.display = "flex";

    // turn off info
    latestCourseInfo.style.display = "none";

    // change the span
    latestCourseSpan.innerHTML = '<i class="fa-solid fa-chevron-down">';
  } else {
    // turn off buttons
    javascriptButton.style.display = "none";
    graduationButton.style.display = "none";
    seniorSecondaryButton.style.display = "none";
    matriculationButton.style.display = "none";

    // turn on info
    latestCourseInfo.style.display = "block";

    // change the span
    latestCourseSpan.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
  }
});

// Javascript
javascriptButton.addEventListener("click", function () {
  if (javascriptInfo.style.display === "block") {
    // turn off info
    javascriptInfo.style.display = "none";

    // turn on buttons
    latestCourseButton.style.display = "flex";
    graduationButton.style.display = "flex";
    seniorSecondaryButton.style.display = "flex";
    matriculationButton.style.display = "flex";

    // change the span
    javascriptSpan.innerHTML = '<i class="fa-solid fa-chevron-down">';
  } else {
    // turn on info
    javascriptInfo.style.display = "block";

    // turn off buttons
    latestCourseButton.style.display = "none";
    graduationButton.style.display = "none";
    seniorSecondaryButton.style.display = "none";
    matriculationButton.style.display = "none";
    console.log("javascriptButton");

    // change the span
    javascriptSpan.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
  }
});

// Graduation
graduationButton.addEventListener("click", function () {
  if (graduationInfo.style.display === "block") {
    // turn off info
    graduationInfo.style.display = "none";

    // turn on buttons
    latestCourseButton.style.display = "flex";
    javascriptButton.style.display = "flex";
    seniorSecondaryButton.style.display = "flex";
    matriculationButton.style.display = "flex";

    // change the span
    graduationSpan.innerHTML = '<i class="fa-solid fa-chevron-down">';
  } else {
    // turn on info
    graduationInfo.style.display = "block";

    // turn off buttons
    latestCourseButton.style.display = "none";
    javascriptButton.style.display = "none";
    seniorSecondaryButton.style.display = "none";
    matriculationButton.style.display = "none";

    // change the span
    graduationSpan.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
  }
});

// Senior Secondary
seniorSecondaryButton.addEventListener("click", function () {
  if (seniorSecondaryInfo.style.display === "block") {
    // turn off info
    seniorSecondaryInfo.style.display = "none";

    // turn on buttons
    latestCourseButton.style.display = "flex";
    javascriptButton.style.display = "flex";
    graduationButton.style.display = "flex";
    matriculationButton.style.display = "flex";

    // change the span
    seniorSecondarySpan.innerHTML = '<i class="fa-solid fa-chevron-down">';
  } else {
    // turn on info
    seniorSecondaryInfo.style.display = "block";

    // turn off buttons
    latestCourseButton.style.display = "none";
    javascriptButton.style.display = "none";
    graduationButton.style.display = "none";
    matriculationButton.style.display = "none";

    // change the span
    seniorSecondarySpan.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
  }
});

// Matriculation
matriculationButton.addEventListener("click", function () {
  if (matriculationInfo.style.display === "block") {
    // turn off info
    matriculationInfo.style.display = "none";

    // turn on buttons
    latestCourseButton.style.display = "flex";
    javascriptButton.style.display = "flex";
    graduationButton.style.display = "flex";
    seniorSecondaryButton.style.display = "flex";

    // change the span
    matriculationSpan.innerHTML = '<i class="fa-solid fa-chevron-down">';
  } else {
    // turn on info
    matriculationInfo.style.display = "block";

    // turn off buttons
    latestCourseButton.style.display = "none";
    javascriptButton.style.display = "none";
    graduationButton.style.display = "none";
    seniorSecondaryButton.style.display = "none";

    // change the span
    matriculationSpan.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
  }
});
