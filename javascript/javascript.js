alert("Bienvenue Jeune Padawan");

// ajout de la balise <p>


$("body").append("<p></p>");


/* ajout de li 

$("ul").append("<li></li>");

*/

// classe filtre = filtre
// le data = data-action => done => todo => all
//  ajouter une ligne class = add
// tache a ajouter = tacheAjout
// classe de liste = liste

$(".add").click(function(){

	var textTache = $("#tacheAjout").val();

	$("ul").append("<li class = 'todo'> "  + textTache + " " +"<button class = 'check'>Valider</button></li>");

});