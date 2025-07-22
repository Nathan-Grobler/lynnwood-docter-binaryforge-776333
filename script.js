document.addEventListener('DOMContentLoaded', function() {
    const pidMeta = document.querySelector('meta[name="project-id"]');
    if (pidMeta) {
      const pid = pidMeta.getAttribute('content');
      document.cookie = `project_id=${pid}; path=/; max-age=${60 * 60 * 24}`; 
    }

    const params = new URLSearchParams(window.location.search);
    if (params.get('after') === 'login') {
        const pid = pidMeta ? pidMeta.getAttribute('content') : '';
        window.location.href = 'admin/login?project_id=' + pid;
        return;
    }

    // Mobile Navigation Toggle
    const nav = document.querySelector('nav');
    if (nav) {
        const navToggle = document.createElement('button');
        navToggle.innerHTML = '&#9776;';
        navToggle.classList.add('nav-toggle');
        nav.prepend(navToggle);
    }

    // Smooth Scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 60, // Adjust for fixed nav height
                    behavior: 'smooth'
                });
            }
        });
    }
});

