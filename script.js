const hamburger = document.querySelector(".hamburger");
const navmMenu = document.querySelector(".navigation-ul");
const navLink1 = document.querySelector(".nav-items-link1");
const navLink2 = document.querySelector(".nav-items-link2");
const navLink3 = document.querySelector(".nav-items-link3");
const navLink4 = document.querySelector(".nav-items-link4");
const navLink5 = document.querySelector(".nav-items-link5");
const valuesDisplay = document.querySelector(".values");
const valuesText = document.querySelector(".values-text");
const missionDisplay = document.querySelector(".mission");
const missionText = document.querySelector(".mission-text");
const qualitiesDisplay = document.querySelector(".qualities");
const qualitiesText = document.querySelector(".qualities-text");
const numbersDisplay = document.querySelector(".numbers");
const numbersText = document.querySelector(".numbers-text");
const faqdropdown = document.querySelector(".question-tick");
const answer = document.querySelector(".answer");
const questionOne = document.querySelector(".question-tick-one");
const answerOne = document.querySelector(".answer-one");
const questiontwo = document.querySelector(".question-tick-two");
const answertwo = document.querySelector(".answer-two");
const questionthree = document.querySelector(".question-tick-three");
const answerthree = document.querySelector(".answer-three");
const questionfour = document.querySelector(".question-tick-four");
const answerfour = document.querySelector(".answer-four");

faqdropdown.addEventListener("click", () => {
  answer.classList.toggle("active");
  faqdropdown.classList.toggle("active");

  answerOne.classList.remove("active");
  questionOne.classList.remove("active");
  answertwo.classList.remove("active");
  questiontwo.classList.remove("active");
  answerthree.classList.remove("active");
  questionthree.classList.remove("active");
  answerfour.classList.remove("active");
  questionfour.classList.remove("active");
});
questionOne.addEventListener("click", () => {
  answerOne.classList.toggle("active");
  questionOne.classList.toggle("active");

  answer.classList.remove("active");
  faqdropdown.classList.remove("active");
  answertwo.classList.remove("active");
  questiontwo.classList.remove("active");
  answerthree.classList.remove("active");
  questionthree.classList.remove("active");
  answerfour.classList.remove("active");
  questionfour.classList.remove("active");
});
questiontwo.addEventListener("click", () => {
  answertwo.classList.toggle("active");
  questiontwo.classList.toggle("active");

  answerOne.classList.remove("active");
  questionOne.classList.remove("active");
  answer.classList.remove("active");
  faqdropdown.classList.remove("active");
  answerthree.classList.remove("active");
  questionthree.classList.remove("active");
  answerfour.classList.remove("active");
  questionfour.classList.remove("active");
});
questionthree.addEventListener("click", () => {
  answerthree.classList.toggle("active");
  questionthree.classList.toggle("active");

  answerOne.classList.remove("active");
  questionOne.classList.remove("active");
  answertwo.classList.remove("active");
  questiontwo.classList.remove("active");
  answer.classList.remove("active");
  faqdropdown.classList.remove("active");
  answerfour.classList.remove("active");
  questionfour.classList.remove("active");
});
questionfour.addEventListener("click", () => {
  answerfour.classList.toggle("active");
  questionfour.classList.toggle("active");

  answerOne.classList.remove("active");
  questionOne.classList.remove("active");
  answertwo.classList.remove("active");
  questiontwo.classList.remove("active");
  answerthree.classList.remove("active");
  questionthree.classList.remove("active");
  answer.classList.remove("active");
  faqdropdown.classList.remove("active");
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navmMenu.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

navLink1.addEventListener("click", () => {
  navmMenu.classList.remove("active");
  document.body.classList.remove("no-scroll");
  hamburger.classList.remove("active");
});

navLink2.addEventListener("click", () => {
  navmMenu.classList.remove("active");
  document.body.classList.remove("no-scroll");
  hamburger.classList.remove("active");
});

navLink3.addEventListener("click", () => {
  navmMenu.classList.remove("active");
  document.body.classList.remove("no-scroll");
  hamburger.classList.remove("active");
});

navLink4.addEventListener("click", () => {
  navmMenu.classList.remove("active");
  document.body.classList.remove("no-scroll");
  hamburger.classList.remove("active");
});
navLink5.addEventListener("click", () => {
  navmMenu.classList.remove("active");
  document.body.classList.remove("no-scroll");
  hamburger.classList.remove("active");
});

valuesText.classList.toggle("active");
valuesDisplay.classList.add("activeval");

valuesDisplay.addEventListener("click", () => {
  valuesDisplay.classList.add("activeval");
  missionDisplay.classList.remove("activemis");
  qualitiesDisplay.classList.remove("activequl");
  numbersDisplay.classList.remove("activenum");

  missionText.classList.remove("active");
  valuesText.classList.add("active");
  qualitiesText.classList.remove("active");
  numbersText.classList.remove("active");
});
missionDisplay.addEventListener("click", () => {
  valuesDisplay.classList.remove("activeval");
  missionDisplay.classList.add("activemis");
  qualitiesDisplay.classList.remove("activequl");
  numbersDisplay.classList.remove("activenum");

  missionText.classList.add("active");
  valuesText.classList.remove("active");
  qualitiesText.classList.remove("active");
  numbersText.classList.remove("active");
});
qualitiesDisplay.addEventListener("click", () => {
  valuesDisplay.classList.remove("activeval");
  missionDisplay.classList.remove("activemis");
  qualitiesDisplay.classList.add("activequl");
  numbersDisplay.classList.remove("activenum");

  missionText.classList.remove("active");
  valuesText.classList.remove("active");
  qualitiesText.classList.add("active");
  numbersText.classList.remove("active");

  const htmlskillLevel = document.getElementById("html-skill");
  htmlskillLevel.style.width = "0%"; // Reset to 0% to allow animation
  setTimeout(() => {
    htmlskillLevel.style.width = "95%"; // Set the width to 80% after a brief moment
  }, 100); // Short timeout to ensure the transition occurs
  const cssskillLevel = document.getElementById("css-skill");
  cssskillLevel.style.width = "0%"; // Reset to 0% to allow animation
  setTimeout(() => {
    cssskillLevel.style.width = "90%"; // Set the width to 80% after a brief moment
  }, 100); // Short timeout to ensure the transition occurs
  const figmaskillLevel = document.getElementById("figma-skill");
  figmaskillLevel.style.width = "0%"; // Reset to 0% to allow animation
  setTimeout(() => {
    figmaskillLevel.style.width = "87%"; // Set the width to 80% after a brief moment
  }, 100); // Short timeout to ensure the transition occurs
  const jsskillLevel = document.getElementById("javascript-skill");
  jsskillLevel.style.width = "0%"; // Reset to 0% to allow animation
  setTimeout(() => {
    jsskillLevel.style.width = "90%"; // Set the width to 80% after a brief moment
  }, 100); // Short timeout to ensure the transition occurs
  const copyskillLevel = document.getElementById("copywriting-skill");
  copyskillLevel.style.width = "0%"; // Reset to 0% to allow animation
  setTimeout(() => {
    copyskillLevel.style.width = "80%"; // Set the width to 80% after a brief moment
  }, 100); // Short timeout to ensure the transition occurs
  const seoskillLevel = document.getElementById("seo-skill");
  seoskillLevel.style.width = "0%"; // Reset to 0% to allow animation
  setTimeout(() => {
    seoskillLevel.style.width = "85%"; // Set the width to 80% after a brief moment
  }, 100); // Short timeout to ensure the transition occurs
});
numbersDisplay.addEventListener("click", () => {
  valuesDisplay.classList.remove("activeval");
  missionDisplay.classList.remove("activemis");
  qualitiesDisplay.classList.remove("activequl");
  numbersDisplay.classList.add("activenum");

  missionText.classList.remove("active");
  valuesText.classList.remove("active");
  qualitiesText.classList.remove("active");
  numbersText.classList.add("active");
});
