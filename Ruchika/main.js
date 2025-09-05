document.addEventListener('DOMContentLoaded', function() {
	lucide.createIcons();
	var frame = document.getElementById('main-frame');
	var lastPage = localStorage.getItem('sidebar-last-page');
	frame.src = lastPage ? lastPage : 'home.html';
	 document.querySelectorAll('.sidebar-link[data-frame]').forEach(function(link) {
		 link.addEventListener('click', function(e) {
			 var target = link.getAttribute('data-frame');
			 // Classroom button: open in new tab
			 if (target && target.indexOf('crsidebar.html') !== -1) {
				 // Open in new tab
				 window.open(target, '_blank');
				 return;
			 }
			 // All other buttons: open in iframe
			 e.preventDefault();
			 if (frame && target && target !== '#') {
				 frame.setAttribute('src', target);
				 localStorage.setItem('sidebar-last-page', target);
			 }
		 });
	 });
});
