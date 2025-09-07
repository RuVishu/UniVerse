document.addEventListener('DOMContentLoaded', function() {
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // --- Make photos clickable ---
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

    // --- Edit cover dropdown ---
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
        menuItems.forEach(function(item) {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = item.getAttribute('href');
            });
        });
    }

    // --- Notification bell toggle ---
    var notiBtn = document.querySelector('.noti-btn');
    var subscribed = false;
    if (notiBtn) {
        notiBtn.addEventListener('click', function() {
            subscribed = !subscribed;
            notiBtn.innerHTML = `<i data-lucide="${subscribed ? 'bell-ring' : 'bell'}"></i>`;
            if (window.lucide) window.lucide.createIcons();
            notiBtn.classList.toggle('active', subscribed);
        });
    }

    // --- Post menu dropdowns ---
    var postMenus = document.querySelectorAll('.post-menu');
    postMenus.forEach(function(menu) {
        var btn = menu.querySelector('.post-menu-btn');
        var dropdown = menu.querySelector('.post-menu-dropdown');

        btn.addEventListener('click', function(e) {
            e.stopPropagation();

            
            document.querySelectorAll('.post-menu-dropdown').forEach(function(other) {
                if (other !== dropdown) {
                    other.style.display = 'none';
                }
            });

            
            dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
        });
    });

   
    document.addEventListener('click', function(e) {
        document.querySelectorAll('.post-menu-dropdown').forEach(function(dropdown) {
            if (!dropdown.contains(e.target)) {
                dropdown.style.display = 'none';
            }
        });
    });
});
