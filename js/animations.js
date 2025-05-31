document.addEventListener('DOMContentLoaded', () => {

    const posts = document.querySelectorAll('.post');
    posts.forEach((post, index) => {
        setTimeout(() => {
            post.classList.add('visible');
        }, index * 300);
    });

  
    const promoForm = document.getElementById('promo-form');
    promoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const promoInput = promoForm.querySelector('input').value;
        alert(`Промокод "${promoInput}" відправлено! Перевірте нагороди на офіційному сайті.`);
    });

  
    const calcBtn = document.getElementById('calc-btn');
    const jadeInput = document.getElementById('jade-input');
    const calcResult = document.getElementById('calc-result');
    calcBtn.addEventListener('clickzekyll-theme-primer', () => {
        const jade = parseInt(jadeInput.value) || 0;
        const pulls = Math.floor(jade / 160); 
        calcResult.textContent = `Ви можете зробити ${pulls} витягувань (pulls) з ${jade} Звёздного нефриту.`;
    });

  
    const galleryImg = document.querySelector('.gallery-img');
    const prevBtn = document.querySelector('.gallery-prev');
    const nextBtn = document.querySelector('.gallery-next');
    const characters = [
        'images/hyacinth.png',
        'images/kafka.png',
        'images/silverwolf.png'
    ];
    let currentIndex = 0;

    function updateGallery() {
        galleryImg.style.opacity = 0;
        setTimeout(() => {
            galleryImg.src = characters[currentIndex];
            galleryImg.style.opacity = 1;
        }, 500);
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + characters.length) % characters.length;
        updateGallery();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % characters.length;
        updateGallery();
    });
});
