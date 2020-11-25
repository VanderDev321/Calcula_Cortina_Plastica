var botaoEnviar = document.querySelector(".enviar");

botaoEnviar.addEventListener("click",function(event){
	event.preventDefault();	

	var form = document.querySelector(".formulario");
	var projeto = recebeDados(form);

	if(!ValidaProjeto(projeto)){
		console.log("projeto invalido");
		return;
	}

	var erros = ValidaProjeto(projeto);

	if(erros.length > 0){
	 	MensagemErro(erros);
	 	return;
	}
	
	var proj1 = DefineTrilhoA(projeto.largura);
	var proj2= DefineTrilhoB(projeto.largura);
	var proj3 = DefineTrilhoC(projeto.largura);

	//var comparado = ComparaProjeto(proj1 , proj2 ,proj3);
	console.log(proj1);
	console.log(proj2);
	console.log(proj3);

});

function recebeDados(form){
	var projeto = {
		altura : form.altura.value,
		largura : form.largura.value
	}
	return projeto;
}
function ValidaProjeto(projeto){

	var erros= [];

	if(projeto.altura.length == 0){
		erros.push("É necessário inserir a altura");
	}

	if(projeto.largura.length == 0){
		erros.push("É necessário inserir a largura");
	}

	return erros;
}

function MensagemErro(erros){
	var ul = document.querySelector("#mensagemErro");
	ul.innerHTML="";
	erros.forEach(function(erro){
		var li= document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
	
}
