const nav = document.querySelector('.nav');
const burgerBtn = document.querySelector('.burger-btn');
const navList = document.querySelector('.nav__list');
const allNavItems = document.querySelectorAll('.nav__item');
const footerYear = document.querySelector('.footer__year');

const firstName = document.querySelector('#first-name');
const secondName = document.querySelector('#second-name');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phone-number');
const formMessage = document.querySelector('#message');

const errorFormText = document.querySelectorAll('.error');
const resetFormBtn = document.querySelector('.clear');
const sendFormBtn = document.querySelector('.send');
const closePopupBtn = document.querySelector('.close-btn');
const popup = document.querySelector('.send-popup');

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

const showpopup = () => {
	popup.classList.add('send-popup--show');
};

const showError = () => {
	errorFormText.forEach(error => (error.textContent = 'Wypełnij puste pole!'));
};

const checkForm = input => {
	input.forEach(el => {
		if (el.value === '') {
			console.log('błąd');
			showError();
		} else {
			showpopup();
		}
	});
};

sendFormBtn.addEventListener('click', e => {
	e.preventDefault();

	checkForm([firstName, secondName, email, phoneNumber, formMessage]);
});

resetFormBtn.addEventListener('click', e => {
	e.preventDefault();

	[firstName, secondName, email, phoneNumber, formMessage].forEach(el => {
		el.value = '';
	});
});

const closePopup = () => {};

burgerBtn.addEventListener('click', handleNav);
closePopupBtn.addEventListener('click', closePopup);
