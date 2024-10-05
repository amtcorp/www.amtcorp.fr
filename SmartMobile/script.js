welcome_message = "";
window.onload = () => {
  
  document.getElementById('container').style = "scale : 1";

}
const logo = document.createElement('svg');

fetch('https://www.amtcorp.fr/assets/logos/jojo cash/logo.svg')
  .then(response => response.text())
  .then(contenuFichier => {

    let parser = new DOMParser();
    let svgDoc = parser.parseFromString(contenuFichier, 'image/svg+xml');
    let logo = svgDoc.querySelector('svg');

    logo.style.background = '';
    logo.style.borderRadius = '%';
    logo.style.maxHeight = '3rem';
    logo.style.maxWidth = '3rem';
    logo.style.position = 'absolute';
    logo.style.left = '21px';
    logo.style.top = '8px';

    logocontainer.appendChild(logo);
  });

  logocontainer.onclick = () => { document.location ="" };


var buttons = document.querySelectorAll('button.animated2');

buttons.forEach((button , buttonsindex) => {
  var buttontextcontent = button.querySelector('span.animated');
button.onmouseenter = () => {
        buttontextcontent.scrollTo({
            top: buttontextcontent.scrollHeight,
            behavior: 'smooth'
          });
        }

        button.onmouseleave = () => {
          buttontextcontent.scrollTo({
              top: 0,
              behavior: 'smooth'
          });
            }

            button.onclick = () => {
              buttonalert = 'button number ' + ' '  + (buttonsindex + 1) + ' ' + button.textContent
            switch (buttonsindex) {
              case 0:
                alert(buttonalert)
                break;
              case 1:
                alert(buttonalert)
                break;
                case 2:
                  alert(buttonalert)
                  break;
                  case 3:
                    alert(buttonalert)
                    break;

            }
            }
    });
