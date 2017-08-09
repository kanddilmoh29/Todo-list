$("ul").on("click", "li", function() {
	$(this).toggleClass("complated");
});

//click on x to delet todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		var todo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todo + "</li>");
	}
});

$(".fa-pencil-square-o").click(function() {
	$("input[type='text']").fadeToggle();
})