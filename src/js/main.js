const nav = document.querySelector('.nav');
const burgerBtn = document.querySelector('.burger-btn');
const navList = document.querySelector('.nav__list');
const allNavItems = document.querySelectorAll('.nav__item');
const footerYear = document.querySelector('.footer__year');

const handleNav = () => {
	navList.classList.toggle('nav__list--active');
};

allNavItems.forEach(item => {
	item.addEventListener('click', () => {
		navList.classList.remove('nav__list--active');
	});
});

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();

burgerBtn.addEventListener('click', handleNav);
// window.addEventListener('scroll', () => {
// 	if (window.scrollY > 200) {
// 		nav.classList.add('nav--transparent');
// 	} else {
// 		nav.classList.remove('nav--transparent');
// 	}
// });
