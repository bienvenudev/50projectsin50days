const boxes = document.querySelectorAll('.box');
const box = document.querySelectorAll('.box')[2];

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
const triggerBottom =	window.innerHeight / 5 * 4;

boxes.forEach(box => {
const boxTop = box.getBoundingClientRect().top;

if (boxTop < triggerBottom) {
	box.classList.add('show');
} else {
	box.classList.remove('show');
}
})
}