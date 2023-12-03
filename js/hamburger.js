let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let li = document.querySelector ('li');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})
menu.addEventListener('click', () => {
    menu.classList.remove('active');
    menu.classList.remove('active');
});
li.addEventListener('click', () => {
    menu.classList.remove('active');
	menuBtn.classList.remove('active');
});
