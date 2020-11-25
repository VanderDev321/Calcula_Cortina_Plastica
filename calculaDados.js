var form = document.querySelector(".formulario");
 var projeto = recebeDados(form);

var altura = projeto.altura;
var largura = projeto.largura;


function CriaTrilho1(largura){
	var trilho = largura/1.0;
	return trilho
}

function CriaTrilho2(largura){
	var trilho2 = largura/1.2;
	return trilho2;
}


function DefineTrilhoA(largura){
	var preco = 44.0;
	var tamanho = CriaTrilho1(largura);	
	var custo1 = Math.ceil(tamanho)*preco; 

	return custo1;
}


function DefineTrilhoB(largura){
	var preco = 47.0; 
	var tamanho = CriaTrilho2(largura);
	var custo2 =Math.ceil(tamanho)*preco;

	return custo2;
}

function DefineTrilhoC(largura){

	var tamanho3 = CriaTrilho2(largura);
	var i = Math.ceil(tamanho3)- 1;

	var preco1 = 42.0;
	var preco2 = 47.0; 

	do{
		var j = 1; 
		var calculo = ((i*1.2)+(j*1.0)); 
		i--; 
		j++;
		var custo3 = ((i*preco2)+(j*preco1));	
		return custo3;	
	}while(calculo > largura);

}
function ImprimeProjetoA(){
	var qtd = CriaTrilho1(largura); 
	return "Quantidade de Trilhos de 1 Metro "+ Math.ceil(qtd);
}
function ImprimeProjetoB(){
	var qtd = CriaTrilho2(largura);
	return "Quantidade de Trilhos de 1.2 "+ Math.ceil(qtd);
}
function ImprimeProjetoC(){
	var qtd1  = CriaTrilho2(largura);
	return "Quantidade de Trilhos de 1.2 "+ Math.ceil(qtd1);
}

function ComparaProjeto(DefineTrilhoB , DefineTrilhoA,DefineTrilhoC){
	var trilho1 = 1.0;
	var trilho2 = 1.2;
	if(DefineTrilhoC < DefineTrilhoA && DefineTrilhoC < DefineTrilhoB){
		return ImprimeProjetoC();
	}else if (DefineTrilhoB < DefineTrilhoC&&DefineTrilhoB<DefineTrilhoA){
		return ImprimeProjetoB();
	}else{
		return ImprimeProjetoA();
	}
}

	