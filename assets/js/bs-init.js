$(document).ready(function(){
	AOS.init();
	$('[data-bss-hover-animate]')
		.mouseenter( function(){ var elem = $(this); elem.addClass('animated ' + elem.attr('data-bss-hover-animate')) })
		.mouseleave( function(){ var elem = $(this); elem.removeClass('animated ' + elem.attr('data-bss-hover-animate')) });

	$('[data-bss-chart]').each(function(index, elem) {
		this.chart = new Chart($(elem), $(elem).data('bss-chart'));
	});

});