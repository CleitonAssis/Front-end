//FUNÇÃO DE ESCONDER E MOSTRAR A PÁGINA
function paginar(id) {
	//REMOVE A CLASSE ACTIVE DA PÁGINA
	let pagRemove = document.getElementsByClassName('active');
	for (i = 0; i < pagRemove.length; i++) {
		pagRemove[i].classList.remove('active');
	}
	//ADICIONA CLASSE ACTIVE A PÁGINA
	let pagina = document.getElementById(id);
	pagina.classList.add('active');
}
//FUNÇÃO DE HABILITAÇÃO DOS BOTÔES DE NAVEGAÇÃO
function mudarLink(id) {
	//REMOVE CLASSE ACTIVE DO LINK DE NAVEGAÇÃO
	let linkRemove = document.getElementsByClassName('page-item');
	for (i = 0; i < linkRemove.length; i++) {
		linkRemove[i].classList.remove('active');
	}
	//ADICIONA CLASSE ACTIVE AO LINK DE NAVEGAÇÃO
	let link = document.getElementById(id);
	link.classList.add('active');
}