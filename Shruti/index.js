// Like button toggle
const likeBtn = document.getElementById('likeBtn');
if (likeBtn) {
	likeBtn.addEventListener('click', function() {
		const heartIcon = likeBtn.querySelector('i[data-lucide="heart"]');
		if (heartIcon.classList.contains('liked')) {
			heartIcon.classList.remove('liked');
		} else {
			heartIcon.classList.add('liked');
		}
		lucide.createIcons(); // re-render icons to apply color
	});
}
const editBtn = document.getElementById('editpost');
const modal = document.getElementById('optionsModal');

// open modal
editBtn.addEventListener('click', () => {
	modal.style.display = "flex";
});

// close modal if clicked outside
window.addEventListener('click', (e) => {
	if (e.target === modal) {
		modal.style.display = "none";
	}
});

// close modal on Cancel click
document.querySelectorAll('#optionsModal li').forEach(item => {
	item.addEventListener('click', () => {
		if (item.innerText === "Cancel") {
			modal.style.display = "none";
		}
	});
});

// Init Lucide icons
lucide.createIcons();
