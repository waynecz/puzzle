$(function () {
	var logo = $('.logo'),
		nav = $('.nav'),
		slogan = $('.main__title:not(.notfade), #down');

	var methods = {
		init: function () {
			$(window).on('scroll', throttle(methods.handleScroll, 50, true));
		},
		handleScroll: function () {
			var s = $(window).scrollTop();
			console.log(s)
			s > 200 ? logo.addClass('active') : logo.removeClass('active')
			if (s > ($(window).height() - 400)) {
				slogan.fadeOut(500);
			} else {
				slogan.fadeIn(500);
			}


		},
	}

	methods.init()
});