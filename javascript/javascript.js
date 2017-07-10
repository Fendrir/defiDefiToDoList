
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
	$("#tacheAjout").val("");

	$(".liste").append("<li class = 'todo'> "  + textTache + " " +"<button class='check'>fait</button></li>");
	$(".check").click(function(){

	$(this).parent("li").addClass("done");
	$(this).parent("li").removeClass("todo");
	$(this).remove();
});

});

// ======================================= 

 /* $(".check").click(function(){

	$(this).parent("li").addClass("done");
	$(this).parent("li").removeClass("todo");
	$(this).remove();
});

*/

$(".filtre").click(function(){
	switch($(this).data("action")){
		case "done":
			$(".done").show();
			$(".todo").hide();
			break;
		case "todo":
			$(".done").hide();
			$(".todo").show();
			break;
		default:
			$(".done").show();
			$(".todo").show();
			break;

	}

});

