const swiper = new Swiper(".swiper", {
	// Optional parameters
	// direction: "vertical",
	speed: 500,
	loop: true,
	centeredSlides: true,
	slidesPerView: "auto",
	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
		type: "custom", // use custom rendering
		renderCustom: function (swiper, current, total) {
			return current + " / " + total; // format it as 'current/total'
		},
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	// And if we need scrollbar
	scrollbar: {
		el: ".swiper-scrollbar",
	},
});

const footerSwiper = new Swiper(".footer-swiper", {
	// Optional parameters
	// direction: "vertical",
	speed: 500,
	loop: true,
	centeredSlides: true,
	slidesPerView: "auto",
	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
		type: "custom", // use custom rendering
		renderCustom: function (swiper, current, total) {
			return current + " / " + total; // format it as 'current/total'
		},
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	// And if we need scrollbar
	scrollbar: {
		el: ".swiper-scrollbar",
	},
});