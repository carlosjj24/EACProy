$( document ).ready(function() {
    $( ".collapsible-header" ).click(function() {
      $( ".collapsible-header" ).not($(this)).removeClass("degrade_active");
	  $(this).toggleClass("degrade_active");
	});
});