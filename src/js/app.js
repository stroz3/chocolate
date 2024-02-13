import * as Ivanfunctions from "./modules/function.js";
import "./modules/splide.js";
import {videoHeader} from './modules/splide.js';
Ivanfunctions.isWebp()


setInterval(function() {
    var icons = document.querySelectorAll('#animated-icon');
      icons.forEach(function(icon) {
        icon.classList.remove('shake');
        void icon.offsetWidth;
        icon.classList.add('shake');
      });
  }, 6500);


var acc = document.getElementsByClassName("accordion");
var i;

var lines = document.querySelectorAll('.two');



for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    this.querySelector('.two').classList.toggle('active-minus')
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      this.style.borderRadius = null;
      
    }
  });
}

const fadeIn = (el, timeout, display) => {
  el.style.opacity = 0;
  el.style.display = display || 'block';
  el.style.transition = `opacity ${timeout}ms`;
  setTimeout(() => {
    el.style.opacity = 1;
  }, 10);
};


const fadeOut = (el, timeout) => {
  el.style.opacity = 1;
  el.style.transition = `opacity ${timeout}ms`;
  el.style.opacity = 0;

  setTimeout(() => {
    el.style.display = 'none';
  }, timeout);
};

let btn = document.getElementById("btnPlay");
let btnThree = document.getElementById("btnThree");
let flag = true;

var id = null;

let first = document.getElementById("firstBtn");
let second = document.getElementById("secondBtn");
let third = document.getElementById("thirdBtn");

function close(){
  if(!flag){
    fadeIn(btn, 300, 'block');
    flag = true;
    first.style.animation = "firstButtonReverse 0.3s forwards";
    second.style.animation = "secondButtonReverse 0.3s forwards";
    third.style.animation = "thirdButtonReverse 0.3s forwards";
    fadeOut(btnThree, 300);
  }
}

btn.addEventListener('click', (e) => {
  if (flag) {
    fadeOut(btn, 300);
    fadeIn(btnThree, 300, "block");
    first.style.animation = "firstButton 0.3s forwards";
    second.style.animation = "secondButton 0.3s forwards";
    third.style.animation = "thirdButton 0.3s forwards";
    flag = false;
  }
});

first.addEventListener('click', (e) => {
  close();
})
second.addEventListener('click', (e) => {
  close();
})
third.addEventListener('click', (e) => {
  close();
})


document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetElement = document.querySelector(this.getAttribute('href'));
      
      if (targetElement) {
        const offset = targetElement.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: offset - 100,
          behavior: 'smooth'
        });
      }
    });
  });
});

