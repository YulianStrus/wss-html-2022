'use strict'
$( document ).ready(
	function() {
		$( document ).ready( function () {
			$( '.multiple-items' ).slick({
				speed: 500,
				slidesToShow: 3,
				slidesToScroll: 3,
				// eslint-disable-next-line max-len
				nextArrow: '<button type="button" class="slick-next"><img src="/img/icon-right.svg"></button>',
				// eslint-disable-next-line max-len
				prevArrow: '<button type="button" class="slick-prev"><img src="/img/icon-left.svg"></button>'
			});
		});
	}
);
