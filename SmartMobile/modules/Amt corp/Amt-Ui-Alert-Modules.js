 // This document is the property of AMT Corp. ALL RIGHTS RESERVED.

const displayboxstylemodule = document.createElement('link');
displayboxstylemodule.rel = 'stylesheet';
displayboxstylemodule.href = './modules/Amt corp/Amt-Ui-Pro-Alert-Module.css';
document.head.appendChild(displayboxstylemodule);

const elementdisplaybox = document.createElement('div');
elementdisplaybox.id = 'displaybox';

const AmtUIAlertimageElement = document.createElement('img');
AmtUIAlertimageElement.src = './assets/icons/exclam2.png';
AmtUIAlertimageElement.style.maxHeight = '256px';

const spanElement = document.createElement('span');
spanElement.textContent = '';

const buttonElement = document.createElement('button');
buttonElement.id = 'closebutton';
buttonElement.textContent = 'Close';


elementdisplaybox.appendChild(AmtUIAlertimageElement);
elementdisplaybox.appendChild(spanElement);
elementdisplaybox.appendChild(buttonElement);
document.body.appendChild(elementdisplaybox);

function alert(msg) {
    const displayBox = document.querySelector('#displaybox');
AmtUIAlertimageElement.src='./assets/icons/exclam2.png';
    displayBox.classList.remove('active-info'); // Supprimez la classe 'active-info' si elle est présente
    displayBox.classList.add('active'); // Ajoutez la classe 'active'
    document.querySelector('#displaybox span').innerHTML = msg;
}

// Ajoutez la fonction alert.info comme une propriété de alert
alert.info = function(msg) {
    const displayBox = document.querySelector('#displaybox');
AmtUIAlertimageElement.src='./assets/icons/info.png'
    displayBox.classList.remove('active'); // Supprimez la classe 'active' si elle est présente
    displayBox.classList.add('active-info'); // Ajoutez la classe 'active-info'
    document.querySelector('#displaybox span').innerHTML = msg;
},

alert.discret = (msg) => {
    const displayBox = document.querySelector('#displaybox');
AmtUIAlertimageElement.src='./assets/icons/info.png'
    displayBox.classList.value ='';
    displayBox.classList.add('discret');
    document.querySelector('#displaybox span').innerHTML = msg;
},

alert.discover = function(msg) {
    const displayBox = document.querySelector('#displaybox');
AmtUIAlertimageElement.src='./assets/icons/info.png'
    displayBox.classList.remove('active'); // Supprimez la classe 'active' si elle est présente
    displayBox.classList.add('active-discover'); // Ajoutez la classe 'active-info'
    document.querySelector('#displaybox span').innerHTML = msg;
 setTimeout(() => {
displayBox.classList.add('discover2');
    }, 600);
},


document.querySelector('#displaybox #closebutton').addEventListener('click', alertclose);

function alertclose() {
//document.querySelector('#displaybox').classList.remove('active');
document.querySelector('#displaybox').className = '';
document.querySelector('#displaybox span').innerHTML = '';
}
