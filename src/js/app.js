'use strict'
$( document ).ready(
	function() {
		$(document).ready(function () {
			$(".multiple-items").slick({
				speed: 500,
				slidesToShow: 3,
				slidesToScroll: 3,
				nextArrow: '<button type="button" class="slick-next"></button>',
				prevArrow: '<button type="button" class="slick-prev"></button>'
			});
		});
	}
);
