function moveBall() {
	let bId = document.querySelector('img');
	let body = document.body;
	let position = Math.ceil(Math.random() * 700);
	let position2 = Math.ceil(Math.random() * 700);
	let position3 = Math.ceil(Math.random() * 400);
	let position4 = Math.ceil(Math.random() * 200);
	let position5 = Math.ceil(Math.random() * 300);
	let position6 = Math.ceil(Math.random() * 100);
	window.addEventListener('mousemove', function(event) {
		console.log(event);
		console.info(`screen position is ${position}`);
			bId.style.marginRight = `${position}px`;
			bId.style.marginTop = `${position2}px`;
	});
	window.addEventListener('mouseout', function(event) {
		console.log(event);
		console.info(`screen position is ${position3}`);
			bId.style.marginRight = `${position3}px`;
			bId.style.marginTop = `${position4}px`;
	});
		window.addEventListener('mousedown', function(event) {
		console.log(event);
		console.info(`screen position is ${position5}`);
			bId.style.marginRight = `${position5}px`;
			bId.style.marginTop = `${position6}px`;
	});
}
moveBall();
