(() => {
    const hiddenNav = document.querySelector("nav.hidden")
    const aboutMeLink = document.querySelector('#aboutme')

    aboutMeLink.addEventListener('click', (e) => {
        console.log(hiddenNav.classList)
        hiddenNav.classList.add('active');
    })

    hiddenNav.addEventListener('click', (e) => {
        hiddenNav.classList.remove('active');
    })

})();