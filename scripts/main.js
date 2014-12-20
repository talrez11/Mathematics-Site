/**
 * Main JavaScript
 * Site Name
 *
 * Copyright (c) 2014. by Way2CU, http://way2cu.com
 * Authors:
 */
var Caracal = Caracal || {};

function on_site_load() {
	if ($('div.testimonial').length > 0) {

		Caracal.testimonial_pages = new PageControl('div.testimonials_container', 'div.testimonial')
		Caracal.testimonial_pages.attachControls('div.testimonials_container nav.controls a')
		Caracal.testimonial_pages.attachNextControl($('a.arrow.next'))
		Caracal.testimonial_pages.attachPreviousControl($('a.arrow.previous'))
		.setInterval(10000)
		.setWrapAround(true)
		.setPauseOnHover(true);
	}

}

$(on_site_load);
