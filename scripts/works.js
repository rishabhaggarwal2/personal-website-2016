
var scrollTop;

 
$(document).ready(function(){
	$(".tileHidden").slideUp();

	$(".showTiles").click(function(){
		$(this).fadeOut("slow");
		$(".tileHidden").slideDown("medium");
	});
	$(window).scroll(function(){
		scrollTop = $(window).scrollTop();
		//Only do these on the desktop
		if($("#works").width() > 992){
			if(scrollTop > 100){
				$("#works nav").css({"height":"60px", "padding":"10px"});
			}
			if(scrollTop <= 100){
				$("#works nav").css({"height":"110px", "padding":"20px"});
			}
		}

		

		if(scrollTop+100 > $("#videos").offset().top){
			$("nav a").removeClass("active");
			$("nav a.videos").addClass("active");
		}else if(scrollTop+100 > $("#graphics").offset().top){
			$("nav a").removeClass("active");
			$("nav a.graphics").addClass("active");
		}else if(scrollTop+100 > $("#apps").offset().top){
			$("nav a").removeClass("active");
			$("nav a.apps").addClass("active");
		}else{
			$("nav a").removeClass("active");
			$("nav a.websites").addClass("active");
		}
	});
	if($("#works").width() > 992){
		$("#works nav").mouseenter(function(){
			$("#works nav").css({"height":"110px", "padding":"20px"});
		});	
		$("#works nav").mouseleave(function(){
			$("#works nav").css({"height":"60px", "padding":"10px"});
		});	
	}


	var sectionScroll;
	var scrollPosition;

	$("nav a").click(function(e){
		e.preventDefault();
		sectionScroll = $(this).attr("href");
		scrollPosition = $(sectionScroll).offset().top - 20 + "px";
		console.log(scrollPosition);
		$("html, body").animate({ scrollTop: scrollPosition });
	});
});
