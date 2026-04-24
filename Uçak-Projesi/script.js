document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.getElementById('theme-toggle');
    const icon = themeBtn.querySelector('i');
    const links = document.querySelectorAll('#menu a[data-page]');
    const pages = document.querySelectorAll('.sayfa');

    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-page');

            pages.forEach(page => {
                page.style.display = 'none';
                page.classList.remove('aktif');
            });

            const target = document.getElementById(targetId);
            if (target) {
                target.style.display = 'block';
                requestAnimationFrame(() => {
                    target.classList.add('aktif');
                });
            }
        });
    });

   function toggleTheme() {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    icon.classList.replace('bx-moon', 'bx-sun');
  } else {
    icon.classList.replace('bx-sun', 'bx-moon');
  }
}


themeBtn.addEventListener('click', toggleTheme);

document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 'd') {
    toggleTheme();
  }
    });

    links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('data-page');


        pages.forEach(page => {
            page.style.display = 'none';
            page.classList.remove('aktif');
        });
        links.forEach(l => l.classList.remove('active-link'));

        const target = document.getElementById(targetId);
        if (target) {
            target.style.display = 'block';
            link.classList.add('active-link'); 
            requestAnimationFrame(() => {
                target.classList.add('aktif');
            });
        }
    });

    const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const images = document.querySelectorAll('.sayfa img'); 

images.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = img.src; 
    });
});


lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
});
});
});
