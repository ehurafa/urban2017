$(window).load(function(){
	menu();
	topoFixo();
});

$(window).scroll(function(){
	topoFixo();
});


function menu(){
	
	$('header .menu-topo img').on('click', function(){
		abreMenu();
	});
	$('.us-menu .menu-header .col-right .menu-mobile span').on('click', function(){
		fechaMenu();
	});
}

function abreMenu(){
	var showMenu = false;
	if( showMenu == false){
		$('.us-menu').addClass('aberto');
		$('.us-menu .top').addClass('aberto');
		$('.us-menu .menu-footer').addClass('aberto');
	}
}

function fechaMenu(){
	$('.us-menu').removeClass('aberto');
	$('.us-menu .top').removeClass('aberto');
	$('.us-menu .menu-footer').removeClass('aberto');
}


/* parallax */

$(function(){
	$('.parallax').each(function(){
		var $obj = $(this);

		$(window).scroll(function() {
		var yPos = -($(window).scrollTop() / $obj.data('speed'));			 
		var bgpos = '0 '+ yPos + 'px';			 
		$obj.css('background-position', bgpos );		 
		});

	});
});


function topoFixo(){

	$('.pagina-home').each(function(){
	//var stickyNavTop = $('#especialidades').offset().top;  

		if( $(window).width() > 768){
			var scrollTop = $(window).scrollTop();
			if ((scrollTop > 300) && (scrollTop  < 400)) {
				$('.header').removeClass('header-1000 header-700 header-400 black');
			    $('.header').addClass('header-300');

			}else if (scrollTop > 400) {
			    $('.header').removeClass('header-1000 header-700 header-300');
			    $('.header').addClass('header-400 fixo black');
			   
			} /*else if( (scrollTop > 700) && (scrollTop  < 1000) ){
				$('.header').removeClass('header-1000');
			    $('.header').removeClass('header-400');
			    $('.header').removeClass('header-300');
			    $('.header').addClass('header-700');
			}else if(scrollTop >  1000){
				$('.header').removeClass('header-300');
				$('.header').removeClass('header-400');
			    $('.header').removeClass('header-700');
			    $('.header').addClass('header-1000');
			}
*/
			else {
			    $('.header').removeClass('header-300 header-400 header-700 header-1000 fixo black');
			   
			}
		}else{
			//$('.header').addClass('fixo black');
		}

	});
	

}


	$('.us-filtros div').each(function(){
		$(this).on('click', function(){

			if( $(this).hasClass('active') ){
				$('.us-filtros div').removeClass('active');	
				$('.us-filtros .filtro').hide();
			}else{
				$('.us-filtros div').removeClass('active');		
				$(this).toggleClass('active');
				$('.us-filtros .filtro').hide();
				$(this).find('.filtro').slideDown(400);
			}



			
		});
	});


