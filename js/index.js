// Spoilers
import spoiler from './modules/spoiler.js';
spoiler();

// Animation
const animationElements = document.querySelectorAll('.animation');
if (animationElements.length > 0) {
	const animate = () => {
		for (let i = 0; i < animationElements.length; i++) {
			const element = animationElements[i];
			const offsetHeight = element.offsetHeight;
			const topSetHeight = element.getBoundingClientRect().top + window.scrollY;
			let totalHeight = window.innerHeight - offsetHeight / 4;
			if (offsetHeight > window.innerHeight) {
				totalHeight = window.innerHeight - window.innerHeight / 4;
			}
			if (
				scrollY > topSetHeight - totalHeight &&
				scrollY < topSetHeight + offsetHeight
			) {
				element.classList.add('active');
			}
		}
	};
	window.addEventListener('scroll', animate);
	setTimeout(animate, 300);
}

// Menu burger
const menuIcon = document.querySelector('.menu__icon');
const menuList = document.querySelector('.menu__list');
const menuLink = document.querySelectorAll('.menu__link');

menuIcon.addEventListener('click', () => {
	document.body.classList.toggle('lock');
	menuIcon.classList.toggle('active');
	menuList.classList.toggle('active');
});

menuLink.forEach(e => {
	e.addEventListener('click', () => {
		document.body.classList.remove('lock');
		menuIcon.classList.remove('active');
		menuList.classList.remove('active');
	});
});

// Slider-Swiper
new Swiper('.block1__container', {
	navigation: { prevEl: '.block1__left', nextEl: '.block1__right' },
	spaceBetween: 15,
	loop: true,
	autoplay: { delay: 2000 },
});
new Swiper('.block3__slider', {
	navigation: {
		prevEl: '.block3__arrow-left',
		nextEl: '.block3__arrow-right',
	},
	spaceBetween: 35,
	loop: true,
	autoplay: { delay: 2000 },
	breakpoints: {
		320: { slidesPerView: '1.3' },
		768: { slidesPerView: '3' },
		1440: { slidesPerView: '4' },
	},
});
new Swiper('.block5', {
	navigation: {
		prevEl: '.block3__arrow-left',
		nextEl: '.block3__arrow-right',
	},
	autoplay: { delay: 2000 },
	spaceBetween: 44,
	loop: true,
	breakpoints: {
		320: { slidesPerView: '1.4' },
		426: { slidesPerView: '2.4' },
		1024: { slidesPerView: '3' },
	},
});
