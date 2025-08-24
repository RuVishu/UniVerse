document.querySelectorAll('.sidebar-link[data-frame]').forEach(function(link) {
	link.addEventListener('click', function(e) {
		e.preventDefault();
		var target = link.getAttribute('data-frame');
		if (frame && target) {
			frame.setAttribute('src', target);
			localStorage.setItem('sidebar-last-page', target);
		}
	});
});

document.addEventListener('DOMContentLoaded', function() {
	lucide.createIcons();
	var frame = document.getElementById('main-frame');
	var lastPage = localStorage.getItem('sidebar-last-page');
	frame.src = lastPage ? lastPage : 'home.html';
	document.querySelectorAll('.sidebar-link[data-frame]').forEach(function(link) {
		link.addEventListener('click', function(e) {
			e.preventDefault();
			var target = link.getAttribute('data-frame');
			if (frame && target && target !== '#') {
				frame.setAttribute('src', target);
				localStorage.setItem('sidebar-last-page', target);
			}
		});
	});
});
