jQuery(document).ready(function() {
	jQuery("a.scrollto").click(function() {
		elementClick = jQuery(this).attr("href")
		destination = jQuery(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({
			scrollTop: destination
		}, 1100);
		return false;
	});
	$('.rev_sl').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		infinite: true,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
		}]
	});
	$(".phone").keyup(function(e) {
		this.value = this.value.replace(/[^0-9\.]/g, '');
	});
});