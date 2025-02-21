document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.image-container img');
  const carouselInner = document.querySelector(
    '#carouselImages .carousel-inner'
  );
  const modalText = document.getElementById('modalText');
  const carousel = document.getElementById('carouselImages');

  let activeImages = [];

  carousel.addEventListener('slid.bs.carousel', function () {
    const activeIndex = Array.from(carouselInner.children).findIndex((item) =>
      item.classList.contains('active')
    );

    if (activeImages[activeIndex]) {
      modalText.innerHTML = activeImages[activeIndex].caption;
    }
  });

  images.forEach((img, index) => {
    img.addEventListener('click', function () {
      carouselInner.innerHTML = '';
      activeImages = [];

      images.forEach((image, i) => {
        const src = image.getAttribute('data-bs-image');
        const caption = image.getAttribute('data-bs-caption');
        const isActive = i === index ? 'active' : '';

        activeImages.push({ src, caption });

        const carouselItem = `
          <div class="carousel-item ${isActive}">
            <img src="${src}" class="d-block w-100" alt="${caption}">
          </div>
        `;
        carouselInner.innerHTML += carouselItem;
      });

      modalText.innerHTML = activeImages[index].caption;
    });
  });
});
