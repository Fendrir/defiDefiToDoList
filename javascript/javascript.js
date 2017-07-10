

$(".check").click(function(){

	$(this).parent("li").addClass("done");
	$(this).parent("li").removeClass("todo");
	console.log($(this).parent("li").data("status"));
	$(this).remove();
});

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

})