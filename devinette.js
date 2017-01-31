/* 
Activité : jeu de devinette
*/


console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");


var tentatives = 6;
console.log("Vous avez " + tentatives + " tentatives pour trouver le nombre mystère compris entre 1 et 100");
var nombre = Number(prompt("Entrez un nombre entre 1 et 100 : "));


while ((nombre != solution) && (tentatives > 1))
{
	if (nombre > solution)
	{
		console.log(nombre + " est trop grand");
		tentatives--;
	}

	else if (nombre < solution)
	{
		console.log(nombre + " est trop petit");
		tentatives--;
	}

	else
	{
		console.log("Ceci n'est pas un nombre");
	}

	console.log("Il vous reste " + tentatives + " tentatives");
	var nombre = Number(prompt("Entrez un nombre entre 1 et 100 : "));
}


if (nombre == solution)
{
	console.log("Bravo, la solution était effectivement : " + solution);
}

else
{
	console.log("Vous avez perdu la partie. La solution était : " + solution);
}




