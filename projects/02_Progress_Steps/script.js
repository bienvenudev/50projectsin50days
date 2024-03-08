const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const progressBar = document.querySelector('#progress');
const circles = document.querySelectorAll('.circle');

// let progWidth = 33;
let activeNum = 1;

nextBtn.addEventListener('click', function () {
	activeNum++;

	if (activeNum > circles.length) {
		activeNum = 4;
	}
// console.log(activeNum);
// 		prevBtn.disabled = false;

		update();	
})

prevBtn.addEventListener('click', function () {
	activeNum--;

	if (activeNum < 1) {
		activeNum = 1;
	}
// console.log(activeNum);

update();	
})

function update() {
	circles.forEach((circle, idx) => {
		if (idx < activeNum) {
			circle.classList.add('active');
			
		} else {
			circle.classList.remove('active');
		}
	})

	const actives = document.querySelectorAll('.active');

 	progressBar.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

	if (activeNum === 1) {
		prevBtn.disabled = true;
	} else if(activeNum === circles.length) {
		nextBtn.disabled = true;
	} else {
		prevBtn.disabled = false;
		nextBtn.disabled = false;
	}
	console.log(activeNum, circles.length);
}
