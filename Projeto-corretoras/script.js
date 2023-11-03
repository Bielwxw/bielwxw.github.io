const icon = document.getElementById('icon');

icon.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        icon.innerHTML = "sunny";
        localStorage.setItem('dark-theme', false);
    }
    else {
        icon.innerHTML = "dark_mode";
        localStorage.setItem('dark-theme', true);
    }
});