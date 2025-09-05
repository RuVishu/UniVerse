lucide.createIcons();

document.querySelectorAll('.menu-btn').forEach(btn => {
	btn.addEventListener('click', function (e) {
		e.stopPropagation();
		const dropdown = this.nextElementSibling;
		document.querySelectorAll('.dropdown').forEach(d => {
			if (d !== dropdown) d.style.display = 'none';
		});
		dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
	});
});

document.addEventListener('click', () => {
	document.querySelectorAll('.dropdown').forEach(d => d.style.display = 'none');
});

document.querySelectorAll('.class-card').forEach(card => {
	card.addEventListener('click', function(e) {
		if (e.target.closest('.menu-btn') || e.target.closest('.dropdown')) return;
		const href = this.getAttribute('data-href');
		if (href) {
			window.location.href = href;
		}
	});
});
