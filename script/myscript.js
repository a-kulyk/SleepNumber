(function($) {
	$(function() {
		$('ul.tabs-caption').on('click', 'li:not(.active)', function() {
  			$(this)
    			.addClass('active').siblings().removeClass('active')
    			.closest('div.tabs').find('div.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
		});

		$('.menu>li>a').click(function() {
			var element = $(this).parent('li');
			if (element.find('ul').length) {
				if ($(this).hasClass('active-menu')) {
					$(this).removeClass('active-menu');
				} else 	$(this).addClass('active-menu');
				element.find('ul').slideToggle(200);
				element.siblings('li').children('a').removeClass('active-menu');
				element.siblings('li').find('ul').slideUp();
				element.parent('ul').siblings('ul').children('li').siblings('li').find('ul').slideUp();
				element.parent('ul').siblings('ul').children('li').children('a').removeClass('active-menu');
				$(this).children('i').toggleClass('icon-circle-arrow-down')
				return false;
			}
		});


	});
})(jQuery);

