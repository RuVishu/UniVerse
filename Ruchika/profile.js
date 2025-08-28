document.addEventListener('DOMContentLoaded', function() {
	if (window.lucide) {
		window.lucide.createIcons();
	}
	function makePhotoClickable(photoId, imgPath) {
		var photo = document.getElementById(photoId);
		if (photo) {
			photo.style.cursor = 'pointer';
			photo.addEventListener('click', function() {
				window.location.href = 'clickCard.html?img=' + encodeURIComponent(imgPath);
			});
		}
	}
	makePhotoClickable('coverPhoto', 'coverphoto.jpg');
	makePhotoClickable('profilePhoto', 'profilephoto.jpg');
	var editBtn = document.getElementById('edit-cover-btn');
	var editMenu = document.getElementById('edit-menu');
	if (editBtn && editMenu) {
		editBtn.addEventListener('click', function(e) {
			e.stopPropagation();
			editMenu.style.display = (editMenu.style.display === 'block') ? 'none' : 'block';
		});
		document.addEventListener('click', function(e) {
			if (editMenu.style.display === 'block' && !editMenu.contains(e.target) && e.target !== editBtn) {
				editMenu.style.display = 'none';
			}
		});
		var menuItems = editMenu.querySelectorAll('.edit-menu-item');
		menuItems.forEach(function(item, idx) {
			item.addEventListener('click', function(e) {
				e.preventDefault();
				// Dummy navigation, replace '#' with actual paths when available
				window.location.href = item.getAttribute('href');
			});
		});
	}
});
