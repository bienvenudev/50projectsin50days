const startText = document.querySelector('.start-text');
const keyClass = document.querySelector('.key-class');


window.addEventListener('keydown', (event) => {
		startText.style.display = 'none';
		keyClass.innerHTML = `<div>
		<p>	event.key</p>
		<div id="key" class="key">${event.key == ' ' ? 'Space' : event.key}</div>
	</div>
	<div>
		<p>event.keyCode</p>
		<div id="keyCode" class="key keyCode">${event.keyCode}</div>
	</div>
	<div>
	<p>	event.code</p>
		<div id="code" class="key code">${event.code}</div>
	</div>`	

})

