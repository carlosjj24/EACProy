$( document ).ready(function() {
	var collapsibleElem = document.querySelector('.collapsible');
	var collapsibleInstance = M.Collapsible.init(collapsibleElem);
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $( ".collapsible-header" ).click(function() {
      $( ".collapsible-header" ).not($(this)).removeClass("degrade_active");
	  $(this).toggleClass("degrade_active");
	});
});

function changeClass (name) {
	$(".clase").addClass("hidden");
	$("."+name).removeClass("hidden");
}

function redirect (page) {
	location.href = page;
}