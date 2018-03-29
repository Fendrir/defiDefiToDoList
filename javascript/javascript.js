var state = 'all';

$("body").append("<p></p>");


$(".add").click(function(){

	var textTache = $("#tacheAjout").val();
	$("#tacheAjout").val("");

	$(".liste").append("<li class = 'todo'> "  + textTache + " " +"<button class='check'>Valider</button></li>");
	changeState(state);
	$(".check").click(function(){

	$(this).parent("li").addClass("done");
	$(this).parent("li").removeClass("todo");
	$(this).remove();
	changeState(state);
});

});
function changeState(state){
	switch(state){
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

}
$(".filtre").click(function(){
	changeState($(this).data("action"));
	state=$(this).data("action");
	$('#titre').text(state);
});

