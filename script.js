document.addEventListener('DOMContentLoaded', () => {
    const imagesContainer = document.getElementById('imagesContainer');

    fetch('https://api.unsplash.com/photos/random?count=6&client_id=YOUR_ACCESS_KEY')
        .then(response => response.json())
        .then(data => {
            data.forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = image.urls.small;
                imagesContainer.appendChild(imgElement);
            });
        })
        .catch(error => console.log('Error fetching images:', error));
});
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
