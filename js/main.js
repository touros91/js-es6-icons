// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
// Milestone 2
// Coloriamo le icone per tipo
// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone


// 1. Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

const icons = [
	{
	  name: 'apple-alt',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'ice-cream',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'fish',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'lemon',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'hamburger',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'pizza-slice',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'beer',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'glass-whiskey',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'wine-bottle',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'cocktail',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'coffee',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'glass-martini',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'dragon',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'kiwi-bird',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'frog',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'hippo',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'otter',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'horse',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
  ];

const colors = {
	"food": "yellow",
	"animal": "red",
	"beverage": "green"
}

const icone = document.getElementById("contenitore-carte");

// creo la funzione che stampa nella pagina html le carte contenenti le icone 

const stampa = (array, contenitore) => {
	contenitore.innerHTML = "";
	array.forEach(
		(element) => {
			const {family, prefix, name, color} = element;
			contenitore.innerHTML += `
			<div class="icons"> 
				  <i class="${family} ${prefix}${name}" style="color:${color}"></i>
				<div class="black">${name}</div>
			</div>`;
		}
	);
}

stampa(icons, icone);

//2. Coloriamo le icone per tipo

// tramite il metodo .map ottengo un nuovo array composto dagli oggetti dell'array iniziale con in più la proprietà "color"

const iconsColored = icons.map(
	(element) => {
		return {
			...element,
			color : colors[element.category]
			}
	}
);

stampa(iconsColored, icone);

// 3. Creiamo una select con i tipi di icone e usiamola per filtrare le icone

const selectOptions = [];

// tramite il metodo .forEach creo un array con i valori delle 3 diverse categorie senza farle ripetere per ogni oggetto 

iconsColored.forEach(
	(element) => {
		if ( selectOptions.includes(element.category) == false ) {
			selectOptions.push(element.category);
		}
	}
);

console.log(selectOptions);

const category = document.getElementById("categoria");

// tramite il metodo .forEach creo le 3 options della select nella pagina HTML

selectOptions.forEach(
	(element) => {
		category.innerHTML += `<option value="${element}">${element}</option>`;	
	}
);

// creo l'evento "change" che al cambio delle options della select nella pagina html mostra le icone filtrate per categoria, per fare questo uso il metodo .filter per filtrare per ogni categoria diversa le varie icone che appartengono a quella categoria

category.addEventListener("change",
	function() {
		const iconsFiltered = iconsColored.filter(
			(element) => {
				if (category.value == element.category || category.value == "") {
					return true;
				}
				return false;
				}
		);
		stampa(iconsFiltered, icone);
	}
);

