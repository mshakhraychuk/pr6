$(document).ready(function() {
  //Button-menu
  $(function() {
    $('.icon').on('click', function() {
      $(this).closest('.header-nav').toggleClass('menu_state_open');
    });
  });

  //Читать далее
  $(function() {
  	$('.more').on('click',function() {
  		$('.and').fadeToggle(1000);
  		 $(this).remove();
  	});
  });

  //Активность кнопки
  $(function() {
  	$('.btn').on('click',function() {
  		$('.btn').removeClass('btn-active');
  		$(this).addClass('btn-active');
  	});
 	$('.btn2').on('click',function() {
 		$('.p1').fadeOut(1000,function() {
 			$(this).html('<p class="p1">At <span class="colorText1">vero</span> eos et accusamus et iusto odio dignissimos <span class="colorText2">ducimus</span> qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>').fadeIn(1000);
 		});
 		$('.p2').fadeOut(1000,function() {
 			$(this).html('<p class="p2">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque <span class="colorText2">corrupti quos</span> dolores et quas molestias <span class="colorText1">excepturi</span> sint occaecati cupiditate non provident, <span class="colorText2">similique</span> sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem r</p>').fadeIn(1000);
 		});
 	});
 	$('.btn1').on('click',function() {
 		$('.p1').fadeOut(1000,function() {
 			$(this).html('<p class="p1">At <span class="colorText1">vero</span> eos et accusamus et iusto odio dignissimos <span class="colorText2">ducimus</span> qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>').fadeIn(1000);
 		});
 		$('.p2').fadeOut(1000,function() {
 			$(this).html('<p class="p2">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque <span class="colorText2">corrupti quos</span> dolores et quas molestias <span class="colorText1">excepturi</span> sint occaecati cupiditate non provident, <span class="colorText2">similique</span> sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem r</p>').fadeIn(1000);
 		});
 	});
 	$('.btn3').on('click',function() {
 		$('.p1').fadeOut(1000,function() {
 			$(this).html('<p class="p1">At <span class="colorText1">vero</span> eos et accusamus et iusto odio dignissimos <span class="colorText2">ducimus</span> qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>').fadeIn(1000);
 		});
 		$('.p2').fadeOut(1000,function() {
 			$(this).html('<p class="p2">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque <span class="colorText2">corrupti quos</span> dolores et quas molestias <span class="colorText1">excepturi</span> sint occaecati cupiditate non provident, <span class="colorText2">similique</span> sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem r</p>').fadeIn(1000);
 		});
 	});
  });

  //Slider down
  $('.slider').on('click',function(events) {
  	events.preventDefault();
  	var top = $('#down').offset().top;
  	$('html, body').animate({
  		scrollTop: top
  	},1500);
  })

});

