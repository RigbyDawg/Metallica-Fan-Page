const dropdown = document.querySelectorAll('.dropdown');
dropdown.forEach(dropdown => {
     const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const optiones = dropdown.querySelector('.menu li');
    const selected = dropdown.querySelector('.selected');

select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');


});

optiones.forEach(option => {

    optiones.addEventListener('click', () => {

       select.innerText = option.innerText;
       select.classList.remove('select-clicked');
       caret.classList.remove('caret-rotate');
       menu.classList.remove('menu-open');
       optiones.forEach(option => {
option.classList.remove('active');

       });
    });
});






})
   
