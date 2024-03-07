const cards = document.querySelectorAll('.panel');

cards.forEach((card) => {

	card.addEventListener('click', function () {

			turnOffPrevious();
			
			this.classList.add('active');
		// console.log(this.classList.contains('active'));
	})
} );


function turnOffPrevious() {
	cards.forEach((card) => {
		card.classList.remove('active');
	});	
}