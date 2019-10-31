$(document).ready(function(){

	var counterID = 1;

	$(".list_add").click(function(e){
		e.preventDefault();
		
		if ($(".template_row").css('display') === 'none') {
			$(".no_entries_row").hide();
			$(".template_row").show();
		} else {
			$("#id")
				.clone(true)
				.attr('id', 'id'+ counterID++)
				.insertAfter($('[id^=id]:last'));
		}
	});

	$('table').on('click', "tr a.list_cancel", function(event){
		event.preventDefault();
		var $last = $(".common_table tbody").find('tr.template_row:last');
		if ($last.is(':first-child')) {
			//$("tr.template_row").hide();
			//$(".no_entries_row").show();
			location.reload();
		} else {
			$(this).parents("tr.template_row").remove();
		}
	});


	$(".action_btn.submit").click(function(){
		$(".popup").show();
	});

	$(".action_btn.cancel").click(function(){
		$(".popup").hide();
	});

	$("select").change(function(event){
		event.preventDefault();
    	var bgcolor = $("option:selected", this).attr("class");
    	$(this).attr("class", 'form-input' + ' ' + bgcolor);
	});

});

