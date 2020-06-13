// Opening
// TweenMax.staggerFrom(".o-logo div", 1.5, {
//     opacity: 0,
//     y: 50,
//     ease: Expo.easeInOut
// }, 0.2)
// TweenMax.to(".o-image", 1.5, {
//     height: '60vh',
//     delay: 1.6,
//     ease: Expo.easeInOut
// })
// TweenMax.to(".o-image img", 1.5, {
//     height: '100%',
//     delay: 2.3,
//     ease: Expo.easeInOut
// })
// TweenMax.to(".s-opening", 2, {
//     y: '-100vh',
//     height: 0,
//     delay: 2.7,
//     ease: Expo.easeInOut
// })
// TweenMax.to("main", 2, {
//     overflow: 'visible',
//     height: '100%',
//     delay: 3,
//     ease: Expo.easeInOut
// })
//Autoplay Carousel
const carousel = document.querySelector('.carousel-track');
const carouselImg = document.querySelectorAll('.carousel-track li');
const nextBtn = document.querySelector('.right-button');
const prevBtn = document.querySelector('.left-button');
let index = 1;
const size = carouselImg[0].clientWidth;

const autoPlay = () => {
    const startSlide = setInterval(() => {
        index++;
        carousel.style.transform = 'translateX(' + (-size *index) + 'px)';
        carousel.style.transition = 'transform 1s ease-in-out';
    }, 5000)
}

carousel.addEventListener('transitionend', () => {
    if (carouselImg[index].id === 'lastClone') {
        carousel.style.transition = 'none';
        index = carouselImg.length - 2;
        carousel.style.transform = 'translateX(' + (-size *index) + 'px)';
    }
    if (carouselImg[index].id === 'firstClone') {
        carousel.style.transition = 'none';
        index = carouselImg.length - index;
        carousel.style.transform = 'translateX(' + (-size *index) + 'px)';
    }
})

const nextSlide = () => {
    index++;
    carousel.style.transform = 'translateX(' + (-size *index) + 'px)';
    carousel.style.transition = 'transform 1s ease-in-out';
}
const prevSlide = () => {
    index--;
    carousel.style.transform = 'translateX(' + (-size *index) + 'px)';
    carousel.style.transition = 'transform 1s ease-in-out';
}

autoPlay();
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Enlarge Menus on Click
const menuImages = document.querySelectorAll('.toggle-menu img');

menuImages.forEach(image => {
    const enlarge = document.querySelector('.enlarge');
    const closeBtn = document.querySelector('.enlarge button');
    const enlargedImg = document.querySelector('.enlarge img');
    let imageSrc = image.src;

    image.addEventListener('click', () => {
        enlarge.style.display = 'block';
        enlargedImg.src = imageSrc;
    })

    closeBtn.addEventListener('click', () => {
        enlarge.style.display = 'none';
    })
})


//Toggle Menu on each List Button Click
const menuLists = document.querySelectorAll('.menu-list li');

menuLists.forEach((list, index) => {
    list.addEventListener('click', () => {
        const toggledMenu = document.querySelectorAll('.toggle-menu li');
        const active = document.querySelectorAll('.active');
        const displayed = document.querySelectorAll('.displayed');

        if (active.length > 0) {
            active[0].classList.remove('active');
        }
        list.className += 'active';
        
        if (displayed.length > 0) {
            displayed[0].classList.remove('displayed');
        }
        toggledMenu[index].className += 'displayed';
    });
})


