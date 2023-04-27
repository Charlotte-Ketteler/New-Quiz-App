const bookmarkToggle = document.querySelector('[data-js="bookmarkToggle"]');

bookmarkToggle.addEventListener("click", () => {
    bookmarkToggle.classList.toggle("active-choice")
});

const bookmarkToggleTwo = document.querySelector('[data-js="bookmarkToggleTwo"]');

bookmarkToggleTwo.addEventListener("click", () => {
    bookmarkToggleTwo.classList.toggle("active-choice")
});

const bookmarkToggleThree = document.querySelector('[data-js="bookmarkToggleThree"]');

bookmarkToggleThree.addEventListener("click", () => {
    bookmarkToggleThree.classList.toggle("active-choice")
});
const body = document.querySelector('body');
const darkMode = document.getElementById('toggle');
darkMode.onclick = function(){
    darkMode.classList.toggle('active')
    body.classList.toggle('active');
}

/*const htmlButton = document.querySelector('[data-js="htmlbutton"]');
const flexboxButton = document.querySelector('[data-js="flexboxButton"]');
const cssButton = document.querySelector('[data-js="cssButton"]');

htmlButton.addEventListener("click", () => {
  htmlButton.classList.add("active-choice");

  flexboxButton.classList.remove("active-choice");
  cssButton.classList.remove("active-choice");
});

flexboxButton.addEventListener("click", () => {
  flexboxButton.classList.add("active-choice");

  htmlButton.classList.remove("active-choice");
  cssButton.classList.remove("active-choice");
});

cssButton.addEventListener("click", () => {
  cssButton.classList.add("active-choice");

  htmlButton.classList.remove("active-choice");
  flexboxButton.classList.remove("active-choice");
});

const buttonRibbon = document.querySelector('[data-js="button_ribbon"]');

buttonRibbon.addEventListener("click", () => {
    buttonRibbon.classList.toggle("active-choice")
});

const buttonRibbonSecond = document.querySelector('[data-js="button_ribbon_second"]');

buttonRibbonSecond.addEventListener("click", () => {
    buttonRibbonSecond.classList.toggle("active-choice")
});

const buttonRibbonThird = document.querySelector('[data-js="button_ribbon_third"]');

buttonRibbonThird.addEventListener("click", () => {
    buttonRibbonThird.classList.toggle("active-choice")
});

/*function toggle() {
    let x = document.getElementById("showAnswerText");
    if(x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}*/
/*
function toggle() {
  let x = document.getElementById("showAnswerText").style.opacity='1';
  if(x.style.display === "none") {
      x.style.display = "block";
  }
  else {
      x.style.display = "none";
  }}*/