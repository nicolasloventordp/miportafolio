$(document).ready(function() {
	emailjs.init({
		publicKey: "QmH-HASr6BtPvF05X",
	});
	var switchBtnRight = document.querySelector('.switch-button-case.right');
	var switchBtnLeft = document.querySelector('.switch-button-case.left');
	var activeSwitch = document.querySelector('.active');
	var educacion = document.querySelector('.educacion');
	var experiencia = document.querySelector('.experiencia');
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
	
	if(validarFormulario(templateParams)){
		document.getElementById('btn-form').style.display = 'none';
		document.getElementById('btn-loading').style.display = 'block';
		emailjs.send(serviceID,templateID,templateParams).then(
			() => {
				document.getElementById('btn-loading').style.display = 'none';
				document.getElementById('btn-form').style.display = 'none';
				document.getElementById('message-success').style.display = 'block';
			},
			(err) => {
				alert(err);
			} 
		)
	};
	
}

function validarFormulario(params){
	Object.keys(params).forEach(function(key) {
		document.getElementById(key+'-error').style.display = "none";
	});
	let error = 1;
	Object.keys(params).forEach(function(key) {
		if(params[key] == ""){
			document.getElementById(key+'-error').innerHTML = "* El campo es requerido";
			document.getElementById(key+'-error').style.display = "block";
			error = 0;
		}
		if(params[key] != "" && key == 'email_id'){
			if(!validateEmail(params[key])){
				document.getElementById(key+'-error').innerHTML = "* El email es incorrecto";
				document.getElementById(key+'-error').style.display = "block";
				error = 0;
			}
				
		}
	});
	return error;
}

function validateEmail(email) {
	var re = /\S+@\S+\.\S+/;
	return re.test(email);
  }