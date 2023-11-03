const icon = document.getElementById('icon');

icon.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        icon.innerHTML = "sunny";
    }
    else {
        icon.innerHTML = "dark_mode";
    }
});