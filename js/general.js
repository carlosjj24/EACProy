
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

function verificarCruci() {
	var p1 = $(".p1-l1").html()+$(".p1-l2").html()+$(".p1-l3").html()+$(".p1-l4").html();
	var p2 = $(".p2-l1").html()+$(".p2-l2").html()+$(".p2-l3").html()+$(".p2-l4").html()+$(".p2-l5").html();
	var p3 = $(".p3-l1").html()+$(".p3-l2").html()+$(".p3-l3").html()+$(".p3-l4").html();
	var p4 = $(".p4-l1").html()+$(".p4-l2").html()+$(".p4-l3").html()+$(".p4-l4").html()+$(".p4-l5").html()+$(".p4-l6").html()+$(".p4-l7").html()+$(".p4-l8").html();
	var p5 = $(".p5-l1").html()+$(".p5-l2").html()+$(".p5-l3").html()+$(".p5-l4").html()+$(".p5-l5").html()+$(".p5-l6").html()+$(".p5-l7").html()+$(".p5-l8").html()+$(".p5-l9").html();
	var p6 = $(".p6-l1").html()+$(".p6-l2").html()+$(".p6-l3").html();
	var p7 = $(".p7-l1").html()+$(".p7-l2").html()+$(".p7-l3").html();
	var p1b="<center>H</center><center>E</center><center>A</center><center>D</center>";
	var p2b="<center>T</center><center>A</center><center>B</center><center>L</center><center>E</center>";
	var p3b="<center>B</center><center>O</center><center>D</center><center>Y</center>";
	var p4b="<center>P</center><center>A</center><center>S</center><center>S</center><center>W</center><center>O</center><center>R</center><center>D</center>";
	var p5b="<center>E</center><center>T</center><center>I</center><center>Q</center><center>U</center><center>E</center><center>T</center><center>A</center><center>S</center>";
	var p6b="<center>I</center><center>M</center><center>G</center>";
	var p7b="<center>D</center><center>I</center><center>V</center>";
	if (p1==p1b && p2==p2b && p3==p3b && p4==p4b && p5==p5b && p6==p6b && p7==p7b) {
		$(".clase").addClass("hidden");
		$(".HTMLActividadAprobado").removeClass("hidden");
	}else{
		$(".clase").addClass("hidden");
		$(".HTMLActividadReprobado").removeClass("hidden");
	}
}

var ResErroneas = 0;
var ResCorrectas = 0;

function sigCuestionario(ultimo, nombreInput, valorCorrecto, sig) {

	var val=$('input[name='+nombreInput+']:checked').val();
	if (val==valorCorrecto) {
		ResCorrectas++;
	}else{
		ResErroneas++;
	}
	if (ultimo=="no") {
		changeClass(sig);
	}else{
		if (ResErroneas==0) {
			changeClass("cuestionarioPerfecto");
		}else if (ResErroneas <= ResCorrectas){
			$("#mensajeRegular").html($("#mensajeRegular").html() + ResErroneas +".");
			changeClass("cuestionarioRegular");
		}else{
			changeClass("cuestionarioMal");
		}
	}

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
