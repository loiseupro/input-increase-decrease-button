$(document).ready(function(){

	$.fn.adaInputBtn = function() {
		/* Check if element exists */
		if(typeof this[0] === 'undefined') return false; 
		var id = this[0]['id'];						

		/* Add html buttons */
		$('#'+id).before('<span class="input_number_decrease" data-input="'+id+'"> - </span>');
		$('#'+id).after('<span class="input_number_increase" data-input="'+id+'"> + </span>');					

	}

	/* Detect increase/decrease button click */
	$(document).on('click', '.input_number_decrease', function (event) {
		var element = '#'+$(this).data('input');	
		var min_value = $(element).data('min');
		var max_value = $(element).data('max');
		var step = $(element).data('step');	

		if(min_value >= max_value) return false;

		var actual_value = parseInt($(element).val());
		var res = actual_value - step;
		if(res >= min_value) $(element).val(res);
	});

	$(document).on('click', '.input_number_increase', function (event) {
		var element = '#'+$(this).data('input');
		var min_value = $(element).data('min');
		var max_value = $(element).data('max');
		var step = $(element).data('step');	

		if(min_value >= max_value) return false;

		var actual_value = parseInt($(element).val());
		var res = actual_value + step;
		if(res <= max_value) $(element).val(res);
	});

});