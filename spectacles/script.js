const data = [
    {
        "imageName": "image 1",
        "imageSrc": "./assets/images/Spectacles/1.jpg",
        "title": "spectacle 1",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu ex scelerisque, fringilla quam ut, laoreet nisi. Fusce blandit metus sit amet semper elementum. Pellentesque in enim sed felis placerat molestie at ac quam. Praesent in erat quis mauris hendrerit sagittis. Morbi bibendum mauris ac ultricies pretium. Suspendisse posuere est eget eleifend maximus. Maecenas eleifend neque in blandit congue. Nunc porttitor ligula a leo malesuada elementum. Praesent mollis ipsum ac enim elementum, nec pellentesque quam pellentesque. <p></p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu ex scelerisque, fringilla quam ut, laoreet nisi. Fusce blandit metus sit amet semper elementum. Pellentesque in enim sed felis placerat molestie at ac quam. Praesent in erat quis mauris hendrerit sagittis. Morbi bibendum mauris ac ultricies pretium. Suspendisse posuere est eget eleifend maximus. Maecenas eleifend neque in blandit congue. Nunc porttitor ligula a leo malesuada elementum. Praesent mollis ipsum ac enim elementum, nec pellentesque quam pellentesque. ",
        "audience": "tout public",
        "duration": "24min",
        "date": "26/03/25",
        "imagesSlider": "./assets/images/Spectacles/1.jpg, ./assets/images/Spectacles/2.jpg"
    },
    {
        "imageName": "image 2",
        "imageSrc": "./assets/images/Spectacles/2.jpg",
        "title": "spectacle 2",
        "description": "text 2",
        "audience": "tout public",
        "duration": "40min",
        "date": "27/03/25",
        "imagesSlider": "./assets/images/Spectacles/3.jpg, ./assets/images/Spectacles/4.jpg"
    },
    {
        "imageName": "image 3",
        "imageSrc": "./assets/images/Spectacles/3.jpg",
        "title": "spectacle 3",
        "description": "text 3",
        "audience": "tout public",
        "duration": "55min",
        "date": "27/03/25",
        "imagesSlider": "./assets/images/Spectacles/5.jpg, ./assets/images/Spectacles/6.jpg"
    }
];

let currentIndex = 0;
let sliderInterval;
let currentImages = [];

const imageElement = document.getElementById('current-image');
const titleElement = document.getElementById('title');
const descriptionElement = document.getElementById('description');
const audienceElement = document.getElementById('audience');
const durationElement = document.getElementById('duration');
const dateElement = document.getElementById('date');
const spectacleSelect = document.getElementById('spectacle-select');
const imageListElement = document.querySelector('.image-list');
const pauseButtonImage = document.querySelector('.pausebutton img');

function updateSpectacle(index) {
    const item = data[index];
    titleElement.textContent = item.title;
    descriptionElement.innerHTML = item.description.replace(/\n/g, '<br>');
    audienceElement.textContent = item.audience;
    durationElement.textContent = item.duration;
    dateElement.textContent = item.date;

    currentImages = item.imagesSlider.split(', ');
    currentIndex = 0;
    updateSlider(currentIndex);
    generateImageList();
}

function updateSlider(index) {
    imageElement.style.backgroundImage = `url(${currentImages[index]})`;
    updateSelectedThumbnail(index);
}

function updateSelectedThumbnail(index) {
    const thumbnails = imageListElement.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumbnail, i) => {
        if (i === index) {
            thumbnail.classList.add('selected');
        } else {
            thumbnail.classList.remove('selected');
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateSlider(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    updateSlider(currentIndex);
}

function startSlider() {
    sliderInterval = setInterval(nextImage, 5000);
}

function stopSlider() {
    clearInterval(sliderInterval);
    sliderInterval = null;
}

function toggleSlider() {
    pauseButtonImage.classList.remove('bounce');
    void pauseButtonImage.offsetWidth; // Trigger reflow to restart the animation
    pauseButtonImage.classList.add('bounce');
    if (sliderInterval) {
        pauseButtonImage.src = "https://www.amtcorp.fr/assets/icons/play.png";
        stopSlider();
    } else {
        pauseButtonImage.src = "https://www.amtcorp.fr/assets/icons/pause.png";
        startSlider();
    }
}

function populateSpectacleButtons() {
    data.forEach((item, index) => {
        const button = document.createElement('button');
        button.value = index;
        button.textContent = item.title;
        button.onclick = () => {
            updateSpectacle(index);
            document.querySelectorAll('#spectacle-select button').forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
        };
        if (index === 0) button.classList.add('selected'); // Set the first button as selected by default
        spectacleSelect.appendChild(button);
    });
}

function generateImageList() {
    imageListElement.innerHTML = '';
    currentImages.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Image du spectacle';
        img.classList.add('thumbnail');
        img.addEventListener('click', () => {
            currentIndex = index;
            updateSlider(currentIndex);
            if (sliderInterval) {
                stopSlider();
                startSlider();
            }
        });
        imageListElement.appendChild(img);
    });
    updateSelectedThumbnail(currentIndex); // Set the selected thumbnail initially
}

// Initial load
populateSpectacleButtons();
updateSpectacle(0);
startSlider();
