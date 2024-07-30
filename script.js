$(document).ready(function() {
	emailjs.init({
		publicKey: "QmH-HASr6BtPvF05X",
	});
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

function enviarEmail(event){
	event.preventDefault();
	const serviceID = "service_wlegu8g";
	const templateID = "template_3ucqt7l";
	const templateParams = {
		from_name: document.getElementById('from_name').value,
		email_id: document.getElementById('email_id').value,
		message: document.getElementById('message').value
	};
	emailjs.send(serviceID,templateID,templateParams).then(
		() => {
			alert("send");
		},
		(err) => {
			alert(err);
		} 
	)
}