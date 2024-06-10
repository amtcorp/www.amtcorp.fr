//import the amt alertmodule (V1.0)
const script = document.createElement('script');
script.src = './Amt-Ui-Alert-Modules.js';
document.body.appendChild(script);

window.onload = function () {
document.querySelector('.container1').classList.add('animate');
 setTimeout(() => {
document.querySelector('header').classList.remove('reduce');
document.querySelector('#interactivebackground').classList.add('animate');
    }, 500);
 setTimeout(() => {
document.querySelector('#bottommsg').classList.add('animate');
    }, 700);
 setTimeout(() => {
alert.discover('Bienvenue dans la nouvelle version d\'Amt Repair');
AmtUIAlertimageElement.src='./assets/logos/version/newlogo.webp';
AmtUIAlertimageElement.style.borderRadius='22.5px';
elementdisplaybox.classList.add('discover');
    }, 1700);
}



  function callback(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

 setTimeout(() => {
        entry.target.classList.add('animate');
document.querySelector('.container1').style.backdropFilter = "blur(3px)";
document.querySelector('.container1').style['-webkit-backdrop-filter'] = "blur(3px)";
    }, 300);
 setTimeout(() => {
document.querySelector('#interactivebackground .text #text1').classList.add('active');
    }, 700);
      }
    });
  }

  const observer = new IntersectionObserver(callback);

  const container2 = document.querySelector('.container2');

  observer.observe(container2);

document.querySelector('section').addEventListener('scroll', function() {
BottomMsg = document.querySelector('#bottommsg');
if (BottomMsg.classList.contains('animate')) {
document.querySelector('#bottommsg img').classList.add('animate');
BottomMsg.classList.remove('animate');
} else {

}
header = document.querySelector('header');
header.classList.add('reduce');
if (header.classList.contains('extand')) {
header.classList.remove('reduce');
} else {
header.classList.add('reduce');
}
});

header = document.querySelector('header');
navbaropenbtn = document.querySelector('header #logo');
navbaropenbtn.addEventListener('click', () => {
if (header.classList.contains('reduce')) {
header.classList.remove('reduce');
} else {
header.classList.add('reduce');
}

});

  function callback1(entries, observer2) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
		initMap();

      } else {


}
    });
  }

  const observer2 = new IntersectionObserver(callback1);

  const container3 = document.querySelector('.container3 #text2');

  observer2.observe(container3);

  const section1 = document.querySelector("#section1");



let animation1Done = false;
let animation2Done = false;
let animation3Done = false;
let animation4Done = false;
let animation5Done = false;
let animation6Done = false;

section1.addEventListener("scroll", () => {
  const scrollPosition = section1.scrollTop;

  if (!animation1Done && scrollPosition > section1.offsetHeight * 0.5) {
    document.querySelector('#interactivebackground').classList.value='';
    document.querySelector('#interactivebackground').classList.add('animate1');
    animation1Done = true;
  } else if (animation1Done && scrollPosition <= section1.offsetHeight * 0.5) {
    document.querySelector('#interactivebackground').classList.remove('animate1');
    animation1Done = false;
    document.querySelector('#interactivebackground').classList.add('animate');
  }

  if (!animation2Done && scrollPosition > section1.offsetHeight * 1.5) {
    document.querySelector('#interactivebackground').classList.value='';
    document.querySelector('#interactivebackground').classList.add('animate2');
    animation2Done = true;
    document.querySelector('#interactivebackground .text #text1').classList.value = '';
    document.querySelector('#interactivebackground .text #text2').classList.add('active');
  } else if (animation2Done && scrollPosition <= section1.offsetHeight * 1.5) {
    document.querySelector('#interactivebackground').classList.remove('animate2');
    animation2Done = false;
    document.querySelector('#interactivebackground').classList.add('animate1');
  }

  if (!animation3Done && scrollPosition > section1.offsetHeight * 2) {
    document.querySelector('#interactivebackground').classList.value='';
    document.querySelector('#interactivebackground').classList.add('animate3');
    animation3Done = true;
  } else if (animation3Done && scrollPosition <= section1.offsetHeight * 2) {
    document.querySelector('#interactivebackground').classList.remove('animate3');
    animation3Done = false;
    document.querySelector('#interactivebackground').classList.add('animate2');
  }

  if (!animation4Done && scrollPosition > section1.offsetHeight * 2.5) {
    document.querySelector('#interactivebackground').classList.value='';
    document.querySelector('#interactivebackground').classList.add('animate4');
    animation4Done = true;
  } else if (animation4Done && scrollPosition <= section1.offsetHeight * 2.5) {
    document.querySelector('#interactivebackground').classList.remove('animate4');
    animation4Done = false;
    document.querySelector('#interactivebackground').classList.add('animate3');
  }

  if (!animation5Done && scrollPosition > section1.offsetHeight * 3) {
    document.querySelector('#interactivebackground').classList.value='';
    document.querySelector('#interactivebackground').classList.add('animate5');
    animation5Done = true;
  } else if (animation5Done && scrollPosition <= section1.offsetHeight * 3) {
    document.querySelector('#interactivebackground').classList.remove('animate5');
    animation5Done = false;
    document.querySelector('#interactivebackground').classList.add('animate4');
  }

  if (!animation6Done && scrollPosition > section1.offsetHeight * 4.5) {
    document.querySelector('#interactivebackground').classList.add('animate6');
    animation6Done = true;
  } else if (animation6Done && scrollPosition <= section1.offsetHeight * 4.5) {
    document.querySelector('#interactivebackground').classList.remove('animate6');
    animation6Done = false;
    document.querySelector('#interactivebackground').classList.add('animate5');
  }
});
