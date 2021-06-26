function sidenav() {
	let body = document.querySelector('body');
	let navMenu = document.querySelector('.nav-menu');
	let navLink = document.querySelector('.nav-link');
	let overlay = document.querySelector('.nav-link-overlay');

	navMenu.addEventListener('click', function() {
		animate();
	});

	overlay.addEventListener('click', function() {
		animate();
	});

	function animate() {
		body.style.overflow = body.style.overflow === '' ? 'hidden' : '';
		navLink.classList.toggle('active');
		overlay.classList.toggle('show');
	}
}

sidenav();



function renderImages(images) {
	let imageGroup = document.querySelector('.image-group');
	
	for (let key in images) {
		let image = images[key];
		imageGroup.innerHTML += `
			<div class="group-image">
				<img src="./assets/images/${image.path}">
				<div class="image-overlay">
					<div>
						<h3>${image.heading}</h3>
						<p>${image.description}</p>
					</div>
				</div>
			</div>`;
	}
}

renderImages(images);