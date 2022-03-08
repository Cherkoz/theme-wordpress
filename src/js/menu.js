(function(){
    const openMenu = () => {
        document.querySelector('#nav-menu').classList.add('active');
        document.body.classList.add('hidden');
    }

    const closeMenu = () => {
        document.querySelector('#nav-menu').classList.remove('active');
        document.body.classList.remove('hidden');
    }

    document.querySelector('#checkbox-menu').addEventListener('click', () => {
        document.querySelector('#nav-menu').classList.contains('active') ? closeMenu() : openMenu();
    })
}());