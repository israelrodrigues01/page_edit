const showPassword = document.querySelector('.eye-input'),
	  inputName = document.querySelector('#name'),
	  inputEmail = document.querySelector('#email'),
	  inputPassword = document.querySelector('#password'),
	  inputNomeView = document.querySelector('#nome_view'),
	  inputEmailViwe = document.querySelector('#email_view'),
	  imgPerfil = document.querySelector('.imgPerfil'),
	  inputImgPerfil = document.querySelector('#imgPerfil'),
	  inputBtnEnviar = document.querySelector('#btn_enviar');

showPassword.onclick = () =>
{

	let iconPassword = showPassword.children[0];
	console.log(iconPassword.className)

	if(inputPassword.type == "password")
	{
		inputPassword.type = "text";
		iconPassword.className = "bx bx-show"
	}
	else if(inputPassword.type == "text")
	{
		inputPassword.type = "password"
		iconPassword.className = "bx bx-hide"
	}
}

inputBtnEnviar.onclick = () =>
{

	const nameValue = inputName.value;
	const emailValue = inputEmail.value;

	inputNomeView.innerText = nameValue;
	inputEmailViwe.innerText = emailValue;
	imgPerfil.src = inputImgPerfil

	console.log(nameValue + " e " + emailValue)

}