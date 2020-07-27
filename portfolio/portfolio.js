const image1 = document.getElementById("image1");
let stat1 = false;
function func1() {
    if(stat1) {
        image1.classList.add('off');
        image1.classList.remove('on');
    } else {
        image1.classList.add('on');
        image1.classList.remove('off');
    }
    stat1 = !stat1;
}
const image2 = document.getElementById("image2");
let stat2 = false;
function func2() {
    if(stat2) {
        image2.classList.add('off');
        image2.classList.remove('on');
      } else {
        image2.classList.add('on');
        image2.classList.remove('off');
      }
      stat2 = !stat2;
}
const image3 = document.getElementById("image3");
let stat3 = false;
function func3() {
    if(stat3) {
        image3.classList.add('off');
        image3.classList.remove('on');
      } else {
        image3.classList.add('on');
        image3.classList.remove('off');
      }
      stat3 = !stat3;
}
const image4 = document.getElementById("image4");
let stat4 = false;
function func4() {
    if(stat4) {
        image4.classList.add('off');
        image4.classList.remove('on');
      } else {
        image4.classList.add('on');
        image4.classList.remove('off');
      }
      stat4 = !stat4;
}
const image5 = document.getElementById("image5");
let stat5 = false;
function func5() {
    if(stat5) {
        image5.classList.add('off');
        image5.classList.remove('on');
      } else {
        image5.classList.add('on');
        image5.classList.remove('off');
      }
      stat5 = !stat5;
}
const image6 = document.getElementById("image6");
let stat6 = false;
function func6() {
    if(stat6) {
        image6.classList.add('off');
        image6.classList.remove('on');
      } else {
        image6.classList.add('on');
        image6.classList.remove('off');
      }
      stat6 = !stat6;
}
const image7 = document.getElementById("image7");
let stat7 = false;
function func7() {
    if(stat7) {
        image7.classList.add('off');
        image7.classList.remove('on');
      } else {
        image7.classList.add('on');
        image7.classList.remove('off');
      }
      stat7 = !stat7;
}
const image8 = document.getElementById("image8");
let stat8 = false;
function func8() {
    if(stat8) {
        image8.classList.add('off');
        image8.classList.remove('on');
      } else {
        image8.classList.add('on');
        image8.classList.remove('off');
      }
      stat8 = !stat8;
}
function showElementAnimation() {

  var element = document.getElementsByClassName('video');
  if(!element) return;
  var showTiming = window.innerHeight > 768 ? 200 : 40;
  var scrollY = window.pageYOffset;
  var windowH = window.innerHeight;
  for(var i=0;i<element.length;i++) { var elemClientRect = element[i].getBoundingClientRect(); var elemY = scrollY + elemClientRect.top; if(scrollY + windowH - showTiming > elemY) {
      element[i].classList.add('in');
    } 
  }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);

function showElementAnimation2() {

  var element2 = document.getElementsByClassName('design');
  if(!element2) return;
  var showTiming2 = window.innerHeight > 768 ? 200 : 40;
  var scrollY2 = window.pageYOffset;
  var windowH2 = window.innerHeight;
  for(var i=0;i<element2.length;i++) { var elemClientRect2 = element2[i].getBoundingClientRect(); var elemY2 = scrollY2 + elemClientRect2.top; if(scrollY2 + windowH2 - showTiming2 > elemY2) {
      element2[i].classList.add('in');
    } 
  }
}
showElementAnimation2();
window.addEventListener('scroll', showElementAnimation2);

function showElementAnimation3() {

  var element3 = document.getElementsByClassName('sec1');
  if(!element3) return;
  var showTiming3 = window.innerHeight > 768 ? 200 : 40;
  var scrollY3 = window.pageYOffset;
  var windowH3 = window.innerHeight;
  for(var i=0;i<element3.length;i++) { var elemClientRect3 = element3[i].getBoundingClientRect(); var elemY3 = scrollY3 + elemClientRect3.top; if(scrollY3 + windowH3 - showTiming3 > elemY3) {
      element3[i].classList.add('in');
    } 
  }
}
showElementAnimation3();
window.addEventListener('scroll', showElementAnimation3);
 
/*profile*/
function showElementAnimation4() {

  var element4 = document.getElementsByClassName('js-profile');
  if(!element4) return;
  var showTiming4 = window.innerHeight > 768 ? 200 : 40;
  var scrollY4 = window.pageYOffset;
  var windowH4 = window.innerHeight;
  for(var i=0;i<element4.length;i++) { var elemClientRect4 = element4[i].getBoundingClientRect(); var elemY4 = scrollY4 + elemClientRect4.top; if(scrollY4 + windowH4 - showTiming4 > elemY4) {
      element4[i].classList.add('in');
    } 
  }
}
showElementAnimation4();
window.addEventListener('scroll', showElementAnimation4);

/*gallery*/
function showElementAnimation5() {

  var element5 = document.getElementsByClassName('js-profile');
  if(!element5) return;
  var showTiming5 = window.innerHeight > 768 ? 200 : 40;
  var scrollY5 = window.pageYOffset;
  var windowH5 = window.innerHeight;
  for(var i=0;i<element5.length;i++) { var elemClientRect5 = element5[i].getBoundingClientRect(); var elemY5 = scrollY5 + elemClientRect5.top; if(scrollY5 + windowH5 - showTiming5 > elemY5) {
      element5[i].classList.add('in');
    } 
  }
}
showElementAnimation5();
window.addEventListener('scroll', showElementAnimation5);

