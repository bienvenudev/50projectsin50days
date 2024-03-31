const buttons = document.querySelectorAll('.faq-toggle');

buttons.forEach((button,idx) => {
	button.addEventListener('click', () => {
		if (!button.parentNode.classList.contains('active')) {
				turnOffPrevious();

				button.parentNode.classList.add('active');

		} else if (button.parentNode.classList.contains('active')) {
			button.parentNode.classList.remove('active');
		}
	
	})
})

function turnOffPrevious() {
	const previousFaq = document.querySelector(".active");

	if (previousFaq) {
		previousFaq.classList.remove("active");
	}
}

