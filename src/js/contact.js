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

const showError = (input, msg) => {
	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector('.error-text');
	
	// formBox.classList.add('error');
	errorMsg.textContent = msg;
};

const clearError = input => {
	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector('.error-text');
	errorMsg.textContent = '';
};

const checkForm = input => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el, el.placeholder);
		} else {
			clearError(el);
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
