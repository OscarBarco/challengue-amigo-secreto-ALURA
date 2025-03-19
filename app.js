

// lista de amigos
let amigos = [];

//funcion para agregar amigos
function agregarAmigo() {
	//selecciono el valor del input
	const amigo = document.getElementById("amigo").value;
	//agrego al amigo a la lista si no esta vacio el input
	if (amigo != "") {
		amigos.push(amigo);
		//muestro los amigos
		mostrarAmigos();
	} else {
		alert("Ingrese un nombre valido.");
	}
	//limpiamos
	document.getElementById("amigo").value = "";
}


//creamos la funcion mostrara m igos
function mostrarAmigos() {
	//selecciono el ul correspondiente para agregarle los li
	const amigos1 = document.querySelector("#listaAmigos");
	// limpio el ul 
	amigos1.innerHTML = "";
	//itero sobre la lista de amigos para crear los li 
	for (let i = 0; i < amigos.length; i++) {
		const amigo = amigos[i];
		//creo el li
		const li = document.createElement("li");
		//le doy como contenido el nombre del amigo actual
		li.textContent = amigo;
		//agregamos el li con el amigo actual al ul
		amigos1.appendChild(li);
	}
}

function sortearAmigo() {
	//corroboro si no hay amigos para sortear, en tal caso, salgo de la funcion informando al usuario
	if (amigos.length == 0) {
		alert("ingrase amigos para sortear");
		return;
	}
	//agregamos el li con el amigo sorteado
	const resultado1 = document.querySelector("#resultado");
	//amigo sorteado
	const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
	//le doy como contenido el nombre del amigo sorteado
	resultado1.innerHTML = `${amigoSorteado}`;
	//desabilitamos el boton de sortear 
	document.querySelector(".button-draw").disabled = true;
	//desabilito el boton de agregar para evitar que se agreguen mas amigos
	document.querySelector(".button-add").disabled = true;
}