const open = document.querySelector('#open');
const close = document.querySelector('#close');
const container = document.querySelector('.container');
const circle = document.querySelector('.circle');

open.addEventListener('click', function () {
	// circle.style.transform = 'rotate(290deg)';
	container.classList.add('show-nav');
});

close.addEventListener('click', function () {
	// circle.style.transform = 'rotate(0deg)';
	container.classList.remove('show-nav');
});