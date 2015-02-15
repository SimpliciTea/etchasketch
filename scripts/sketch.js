$(document).ready(function() {
	//make 16 rows of divs
	for (i=0; i<16; i++) { $('#sketch-wrap').append('<div class="row"></div>') }
	
	//populate each row with 16 cells
	$('#sketch-wrap>div').each(function() {
		for (i=0;i<16;i++) { $(this).append('<div class="cell"></div>') }
	});

	//creates color trail from mouse
	$('#sketch-wrap>div>div').mouseenter(function() {
		$(this).css('background-color', 'blue');
})
})