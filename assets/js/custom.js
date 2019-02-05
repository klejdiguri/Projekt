(function(){
	"use strict";

	$(document).ready(function(){
		$('.owl-carousel').owlCarousel({
			items: 1,
			loop : true,
			autoplay : true,
			autoHeight: true,
			autoplayTimeout: 3000
		});	
	});

	$('input[type="checkbox"]').on('change', function() {
	   $('input[type="checkbox"]').not(this).prop('checked', false);
	});

	function Populate(){
        var vals = $('input[type="checkbox"]:checked').map(function() {
        	return this.value;
        }).get();
        $('#type').val(vals);
    }

    $('input[type="checkbox"]').on('change', function() {
        Populate()
    }).change();
})();