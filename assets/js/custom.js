(function(){
	"use strict";

	$('input[type="checkbox"]').on('change', function() {
	   $('input[type="checkbox"]').not(this).prop('checked', false);
	});

	function Populate(){
        var vals = $('input[type="checkbox"]:checked').map(function() {
        	return this.value;
        }).get();
        $('#type').val(vals);
    }
})();