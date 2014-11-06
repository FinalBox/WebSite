$( document ).ready(function() {
	var alturaTela = $(window).height();
	
	$("#menu").css({"height": alturaTela});
	
	//alert($(window).scrollTop());
	/*if($(".splash").is(":visible"))
	{
		$(".wrapper").css({"opacity":"0"});
	}
	*/
	
	$(".splash-arrow").click(function()
	{
		ir = $("#service").offset().top;
		$('html, body').animate({
    scrollTop: ir
}, 2000);
	});
	
	
	
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 450){  
        $('#menu-container').addClass("minimized");
	$('#logo-minimized').removeClass("invisible");
    }
    else{
        $('#menu-container').removeClass("minimized");
	$('#logo-minimized').addClass("invisible");
    }
});

$(window).scroll(function() {
	if ($(this).scrollTop() > 800){
		$('#service').addClass('fade-in');
	}
});




/*
$(window).scroll(function() {
  var windTop = $(window).scrollTop();
  var splashHeight = $(".splash").height();
  
  if(windTop>(100)){
  	 $(window).off("scroll");
  	  $(".splash").slideUp("800", function() {
	     $("html, body").animate({"scrollTop":"0px"},100);
     });
     $(".wrapper").animate({"opacity":"1.0"},800);
  } 
  else {
	$(window).off("scroll");
  	  $(".wrapper").slideDown("800", function() {
	     $("html, body").animate({"scrollTop":"0px"},100);
     });
     $(".splash").animate({"opacity":"1.0"},800);
  }  
});


$(window).scroll(function() {
  	  $(window).off("scroll");
	  $(".splash").slideUp("1000", function() {
	  $("html, body").animate({"scrollTop":"0px"},100);
	  $(".wrapper").delay(100).animate({"opacity":"1.0"},1000);
	  
 });
 });
 
 */