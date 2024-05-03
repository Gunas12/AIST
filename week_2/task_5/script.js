const imageContainer = document.getElementById('imageContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const images = [
    './images/image7.jpg',
    './images/image2.jpg',
    './images/image3.jpg',
    './images/image4.jpg',
    './images/image5.jpg',
    './images/image6.jpg',
    './images/image1.jpg',
    './images/image8.jpg',
    
]; 
let currentIndex = 0;
function showImage(index) {
    imageContainer.style.backgroundImage = `url('${images[index]}')`;
}
showImage(currentIndex);
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});
