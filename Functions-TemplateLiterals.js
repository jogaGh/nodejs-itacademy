//Nivell 1
/*	EXERCICI 1
	Crear una funció que imprimeixi en consola el nom d'usuari sent invocada externament i passant el
	nom com a paràmetre.
*/
	function print_name(name) {
		console.log(name)
	}
	print_name('andrej')
//Nivell 2
/*	EXERCICI 1
	Imprimir el nom i cognoms de l'usuari en variables mitjançant template literals, creant les
	variables i referenciant en la impressió de l'missatge
*/
	let nom = 'Alberto'
	let cognoms = 'Pérez Gutiérrez'
	function myTag(strings, nom, cognoms){
		let str0 = strings[0]; // "Nom: "
		let str1 = strings[1]; // ". Cognoms: "

		console.log (`${str0}${nom}${str1}${cognoms}`);
	}
	myTag`Nom: ${ nom }. Cognoms: ${ cognoms }`;

/*	EXERCICI 2
	Invocar la funció mitjançant template literals
*/
	function retorna_valor(argument) {
		return `valor retornat és ${nom} ${cognoms}`
	}
	console.log(`Cridamt funció des d'una plantilla literal: ${retorna_valor()}`)

//Nivell 3
/*	EXERCICI 1
	Crea una matriu de deu funcions i empleni-la mitjançant un bucle. Cada funció comptarà del 0-9
	imprimint-ho per pantalla. Invoqui cada funció de l'array iterativament. Haurà d'imprimir-se per
	pantalla el compte de 0-9 deu vegades
*/
	function print_numbers(inici=0, final=9) {
		for (var i = inici; i <= final; i++) {
			process.stdout.write(`${i} `)
		}
		console.log()
	}
	let matriu = new Array(10)
	matriu.fill(print_numbers)
	for (var i = 0; i < matriu.length; i++) {
		matriu[i]()
	}

/*	EXERCICI 2
	Crear una funció anònima autoinvocable (igualada a una variable) que imprimeixi per pantalla el
	nom d'usuari rebut com a paràmetre
*/
	let autoinvocable = function (username) {
		console.log(username)
	}('andrej')