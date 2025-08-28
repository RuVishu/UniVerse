lucide.createIcons();
document.addEventListener('DOMContentLoaded', function() {
	// Get image from query string
	var params = new URLSearchParams(window.location.search);
	var imgSrc = params.get('img');
	var dynamicPhoto = document.getElementById('dynamicPhoto');
	if (imgSrc && dynamicPhoto) {
		dynamicPhoto.src = imgSrc;
		dynamicPhoto.alt = 'Photo';
	}
	var closeBtn = document.getElementById('close-btn');
	if (closeBtn) {
		closeBtn.addEventListener('click', function() {
			window.location.href = 'profile.html';
		});
	}
});
