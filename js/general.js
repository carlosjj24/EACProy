
function changeClass (name) {
	$(".clase").addClass("hidden");
	$("."+name).removeClass("hidden");
}

function redirect (page) {
	location.href = page;
}

function cruciInit() {
	var cw = $('#cruci').width();
	$('#cruci').css('height',cw+'px');
	$('#cruci td').css('height',cw/11+'px');
	$('#cruci td').css('width',cw/11+'px');
}

$( document ).ready(function() {
	var collapsibleElem = document.querySelector('.collapsible');
	var collapsibleInstance = M.Collapsible.init(collapsibleElem);
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $( ".collapsible-header" ).click(function() {
      $( ".collapsible-header" ).not($(this)).removeClass("degrade_active");
	  $(this).toggleClass("degrade_active");
	});

    //crusigrama
	$(window).on('resize', function(){
	    cruciInit();
	});

	var palabra = 0;
	var letra = 0;
	$(".whiteSquare").on('click', function(){
		$(".whiteSquare").removeClass("whiteSquare-active");
		$(".whiteSquare").removeClass("whiteSquare-active-used");

	    palabra = $(this).attr("pp");
	    letra = $(this).attr("p"+palabra+"l");
	    $(".p"+palabra).addClass("whiteSquare-active");
	    $(this).addClass("whiteSquare-active-used");
	    $("#teclado").click();
	    $("#teclado").focus();
	});

	$(".blackSquare").on('click', function(){
		palabra = 0;
		letra = 0;
		$(".whiteSquare").removeClass("whiteSquare-active");
		$(".whiteSquare").removeClass("whiteSquare-active-used");
	});

	$( window ).keyup(function(e) {
		if (e.which==8) {
			$(".p"+palabra+"-l"+letra).html("");
		}else if ((e.which>64 && e.which<91) || (e.which>96 && e.which<123)){
			$(".p"+palabra+"-l"+letra).html("<center>"+String.fromCharCode(e.which)+"</center>");
		  	letra ++;
		  	$(".whiteSquare").removeClass("whiteSquare-active-used");
		  	$(".p"+palabra+"-l"+letra).addClass("whiteSquare-active-used");
		}
	});

});