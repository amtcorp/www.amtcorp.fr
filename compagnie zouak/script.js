 // This document is the property of AMT Corp. ALL RIGHTS RESERVED.

var AmtUiversion = "pro";

window.onload = function() {
scrollToTop();
debugmode();
scrollFunction1();
loader.classList.remove('active');
};

    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

document.querySelector('#scrolltotop').addEventListener('click', () => {
scrollToTop();
}); 

let index = 1;
  let intervalId;

  const indexofimage = document.querySelectorAll('#animationcontroller #imageindexer #imageindex');
  const caroussel = document.getElementById('caroussel');
  const playbutton = document.getElementById('playbutton');
  const playImage = playbutton.querySelector('img');

  function SetCarousselImage() {
    indexofimage.forEach((element, i) => {
      if (i === index) {
        element.classList.add('selected');
      } else {
        element.classList.remove('selected');
      }
    });

    const imageUrl = `./assets/images/${index + 1}.jpg`;
    caroussel.style.backgroundImage = `url(${imageUrl})`;

    index = (index + 1) % indexofimage.length;
  }

  function startCaroussel() {
    intervalId = setInterval(SetCarousselImage, 4500);
  }

  function stopCaroussel() {
    clearInterval(intervalId);
    intervalId = null;
  }

  playbutton.addEventListener('click', () => {
    if (intervalId) {
      stopCaroussel();
      playImage.src = './assets/icons/play.png';
    } else {
      startCaroussel();
      playImage.src = './assets/icons/pause.png';
    }
  });

  let section1 = document.getElementById('section1');

  function checkSection() {
    if (window.scrollY + window.innerHeight >= section1.offsetTop && window.scrollY + window.innerHeight <= section1.offsetTop + section1.offsetHeight) {
      if (!intervalId) {
        startCaroussel();
        playImage.src = './assets/icons/pause.png';
      }
    } else {
      stopCaroussel();
      playImage.src = './assets/icons/play.png';
    }
  }

  window.addEventListener('scroll', checkSection);

  startCaroussel();

  function callback(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
    window.onscroll = function() {
scrollFunction1();

};


      }
    });
  }

document.querySelector('#slidecontroller.continue').addEventListener('click', () => {
  stopCaroussel();
  if (index === 9) {
    index = 1;
  } else {
    index++;
  }
  const imageUrl = `./assets/images/${index}.jpg`;
  caroussel.style.backgroundImage = `url(${imageUrl})`;
  playImage.src = './assets/icons/play.png';


indexofimage.forEach((element, i) => {
    if (i === index - 1) { // Adjust the index by subtracting 1 to match the actual image index
      element.classList.add('selected');
    } else {
      element.classList.remove('selected');
    }
  });


});

document.querySelector('#slidecontroller.previous').addEventListener('click', () => {
  stopCaroussel();
  if (index === 1) {
    index = 9;
  } else {
    index--;
  }
  const imageUrl = `./assets/images/${index}.jpg`;
  caroussel.style.backgroundImage = `url(${imageUrl})`;
  playImage.src = './assets/icons/play.png';


indexofimage.forEach((element, i) => {
    if (i === index - 1) { // Adjust the index by subtracting 1 to match the actual image index
      element.classList.add('selected');
    } else {
      element.classList.remove('selected');
    }
  });



});



  const observer = new IntersectionObserver(callback);

  const container2 = document.querySelector('#section2');

  observer.observe(container2);

    function scrollFunction1() {
      var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
if ( scrollPosition > document.querySelector('#section1').scrollHeight + window.innerHeight - 45) {
        section2.classList.add('active'); // Ajoutez une classe CSS pour l'animation
        document.querySelector('#animationcontroller').classList.add('scrollTotop');
        document.querySelector('header').classList.add('reduce');
  
} else {
        section2.classList.remove('active'); // Ajoutez une classe CSS pour l'animation
        document.querySelector('#animationcontroller').classList.remove('scrollTotop');
        document.querySelector('header').classList.remove('reduce');

}
}

  let currentIndex = 0;
  const sectionButton = document.querySelectorAll('header #catcontainer button');
  const sections = document.querySelectorAll('section');

  sectionButton.forEach((button, i) => {
    button.addEventListener('click', () => {
      currentIndex = i;
      sections[i].scrollIntoView({ behavior: 'smooth' });
      updateButtonClasses();
    });
  });

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2 - 15;
    sections.forEach((section, i) => {
      if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
        currentIndex = i;
      }
    });
    updateButtonClasses();
  });

  function updateButtonClasses() {
    sectionButton.forEach((button, i) => {
      button.classList.toggle('selected', i === currentIndex);
    });
  }

  function callback1(entries, observer2) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
		 initMap();

      } else {


}
    });
  }

  const observer2 = new IntersectionObserver(callback1);

  const section5 = document.querySelector('#section5');

  observer2.observe(section5);


  function callback0(entries, observer0) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
       document.querySelector('#animationcontroller').classList.remove('scrollTotop');
       document.querySelector('#copyrights').classList.remove('hide');
       document.querySelector('#animationcontroller').classList.add('hide');


const copyrights = document.getElementById('copyrights');
const firstSpan = copyrights.firstElementChild;
const secondSpan = copyrights.lastElementChild;

// Set the first span as the default selected span
copyrights.scrollLeft = firstSpan.offsetLeft;

// Scroll to the second span after 5 seconds with smooth behavior
setTimeout(() => {
  copyrights.scrollLeft = secondSpan.offsetLeft;
  copyrights.style.scrollBehavior = 'smooth';
  copyrights.scroll({
    left: secondSpan.offsetLeft,
    behavior: 'smooth'
  });
}, 5000);

// Scroll back to the first span after 10 seconds with smooth behavior
setTimeout(() => {
  copyrights.scrollLeft = firstSpan.offsetLeft;
  copyrights.style.scrollBehavior = 'smooth';
  copyrights.scroll({
    left: firstSpan.offsetLeft,
    behavior: 'smooth'
  });
}, 10000);


      } else {
       document.querySelector('#animationcontroller').classList.remove('hide');
       document.querySelector('#animationcontroller').classList.add('scrollTotop');
       document.querySelector('#copyrights').classList.add('hide');
}
    });
  }

  const observer0 = new IntersectionObserver(callback0);

  const footer = document.querySelector('footer');

  observer0.observe(footer);


const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function reportWindowSize() {
  document.getElementById('heightOutput').textContent = "height : " + window.innerHeight + " px";
  document.getElementById('widthOutput').textContent = "width : " + window.innerWidth + " px";
document.documentElement.style.setProperty('--doc-height', window.innerHeight + "px");
document.documentElement.style.setProperty('--doc-width', window.innerWidth + "px");
       document.querySelector('header #logo img').style.height = Math.round(innerHeight / 2 - 73) + "px" ;
       document.querySelector('#infosprod #img-desc').style.width = Math.round(innerHeight / 2 - 13) + "px" ;
}

// Get window size on page load
reportWindowSize();

// Get window size on window resize
window.addEventListener("resize", reportWindowSize);

document.querySelector('#debugwindow #close').addEventListener('click', () => { debugmode(); });

function debugmode() {
debugwindow = document.getElementById('debugwindow');
if ( debugwindow.classList.contains('active') ) {
       document.querySelector('#debugwindow').classList.remove('active');
} else {
       document.querySelector('#debugwindow').classList.add('active');
       debugModeActivated();
}
}

// Récupération des éléments du DOM
const imgContainer = document.getElementById('imgcontainer');
const pictures = document.querySelectorAll('#selector > div[id^="picture"]');

// Définition des images à afficher
const images = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg'
];

// Initialisation de l'image courante
let currentIndex2 = 0;
imgContainer.style.backgroundImage = `url(${"./assets/images/gallery/" + images[currentIndex2]})`;

// Événement click sur les éléments picture
pictures.forEach((picture, index) => {
  picture.addEventListener('click', () => {
    // Mise à jour de l'image courante
    currentIndex2 = index;
    imgContainer.style.backgroundImage = `url(${"./assets/images/gallery/" + images[currentIndex2]})`;

    // Suppression de la classe hide des autres éléments picture
    pictures.forEach((picture, index) => {
      if (index !== currentIndex2) {
        picture.classList.remove('hide');
      }
    });

    // Ajout de la classe hide à l'élément picture cliqué
    picture.classList.add('hide');
  });
});

document.querySelector('#contact-item #buttonspannel button').addEventListener('click', () => {
AmtUIAlertimageElement.src="./assets/icons/phone-call-white.png";
alert('cc');
});

//import the amt alertmodule (V1.0) peut etre incompatible avec le système de couleur D'AMT UI PRO ceci sera corrigé plus tard
const script = document.createElement('script');
script.src = './Amt-Ui-Alert-Modules.js';
document.body.appendChild(script);

