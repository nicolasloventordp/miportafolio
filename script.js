$(document).ready(function() {
	var switchButton = document.querySelector('.switch-button');
	var switchBtnRight = document.querySelector('.switch-button-case.right');
	var switchBtnLeft = document.querySelector('.switch-button-case.left');
	var activeSwitch = document.querySelector('.active');
	var educacion = document.querySelector('.educacion');
	var experiencia = document.querySelector('.experiencia');
function switchLeft(){
	switchBtnRight.classList.remove('active-case');
	switchBtnLeft.classList.add('active-case');
	activeSwitch.style.left = '0%';
	educacion.classList.add('hidden');
	experiencia.classList.remove('hidden');
}

function switchRight(){
	switchBtnRight.classList.add('active-case');
	switchBtnLeft.classList.remove('active-case');
	activeSwitch.style.left = '50%';
	experiencia.classList.add('hidden');
	educacion.classList.remove('hidden');
}

switchBtnLeft.addEventListener('click', function(){
	switchLeft();
}, false);

switchBtnRight.addEventListener('click', function(){
	switchRight();
}, false);
});