document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    const showSection = (id) => {
        sections.forEach((section) => {
            if (section.id === id) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    };

    const changeActiveLink = (id) => {
        navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === id) {
                link.classList.add('active');
            }
        });
    };

    // Show the first section by default
    showSection('homes');
    changeActiveLink('homes');

    navLinks.forEach((link) =>
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            showSection(targetId);
            changeActiveLink(targetId);
        })
    );
});
