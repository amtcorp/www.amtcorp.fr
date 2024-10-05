function debugmode() {
    debugwindow = document.getElementById('debugwindow');
    if ( debugwindow.classList.contains('active') ) {
           document.querySelector('#debugwindow').classList.remove('active');
    } else {
           document.querySelector('#debugwindow').classList.add('active');
           debugModeActivated();
    }
    }