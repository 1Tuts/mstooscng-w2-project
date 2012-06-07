$(function(){

	var slides = $('.slides .train > div');

	slides.mouseover(function(){
		
		slides.stop().animate({
			'width':'50px'
		},700);

		$(this).stop().animate({
			'width':'600px'
		},700);

	});

	$('.slides').mouseout(function(){
		slides.stop().animate({
			'width':'150px'
		},500);
	});

});
