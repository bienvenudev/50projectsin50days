const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const progressBar = document.querySelector('#progress');
const circles = document.querySelectorAll('.circle');

let isActive = 1;

next.addEventListener('click', function () {
	isActive++;

	if (isActive > circles.length) {
		isActive = circles.length;
	}

	update();
})

prev.addEventListener('click', function () {
	isActive--;

	if (isActive < 1) {
		isActive = 1;
	}

	update();
})

function update() {

	circles.forEach((circle, idx) => {
		if (idx < isActive) {
			circle.classList.add('active');
		} else {
			circle.classList.remove('active');
		}
	})

	  // progress bar count
		const actives = document.querySelectorAll('.active');

		progressBar.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';		

	// disable/enable the buttons
	if (isActive === 1) {
		prev.disabled = true;
	} else if (isActive === circles.length) {
		next.disabled = true;
	} else {
		next.disabled = false;
		prev.disabled = false;
	}
}