 // This document is the property of AMT Corp. ALL RIGHTS RESERVED.

let debugModeActivated = function() {
if ( AmtUiversion === "pro" & debugwindow.classList.contains('active') ) {
AmtUIAlertimageElement.src="./assets/icons/exclam2.png";
alert ("import amt alertmodule (V1.0) : peut etre incompatible avec le système D'affichage d'Amt UI PRO");
} else {

}
}

// import Qrcode module
const script2 = document.createElement('script');
script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js';
document.body.appendChild(script2);

const displayboxstylemodule = document.createElement('link');
displayboxstylemodule.rel = 'stylesheet';
displayboxstylemodule.href = './Amt-Ui-Pro-Alert-Module.css';
document.head.appendChild(displayboxstylemodule);

const elementdisplaybox = document.createElement('div');
elementdisplaybox.id = 'displaybox';

const AmtUIAlertimageElement = document.createElement('img');
AmtUIAlertimageElement.src = './assets/icons/exclam2.png';
AmtUIAlertimageElement.style.maxHeight = '256px';

const spanElement = document.createElement('span');
spanElement.textContent = 'This is a display box';

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

alert.phonenumber = function(msg) {
    const displayBox = document.querySelector('#displaybox');
AmtUIAlertimageElement.src='./assets/icons/phone-call-white.png'
    displayBox.classList.add('active'); // Supprimez la classe 'active' si elle est présente
    displayBox.classList.remove('active-info'); // Ajoutez la classe 'active-info'
    document.querySelector('#displaybox span').innerHTML = msg;
    const QrElement = document.createElement('div');
    QrElement.id = 'QRcode';
    elementdisplaybox.appendChild(QrElement);

  var qrcode = new QRCode(QRcode, {
    text: "tel:" + msg, // replace with your URL
    width: 128,
    height: 128,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });


};

document.querySelector('#displaybox #closebutton').addEventListener('click', alertclose);

function alertclose() {
//document.querySelector('#displaybox').classList.remove('active');
document.querySelector('#displaybox').className = '';
document.querySelector('#displaybox span').innerHTML = '';
}