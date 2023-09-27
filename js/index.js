

gsap.fromTo(
	".page-container",
	{display: "none",},
	{
	  opacity: 1,
	  display: "",
	  duration: 1,
	  delay: 3.5,
	}
  );
  
  gsap.fromTo(
	".load",
	{ opacity: 1 },
	{
	  opacity: 0,
	  display: "none",
	  duration: 1,
	  delay: 3.5,
	}
  );
//   gsap.fromTo(
// 	".load h2",
// 	{ opacity: 0 },
// 	{
// 	  opacity: 1,
// 	  display: "",
// 	  duration: 1,
// 	  delay: 3.5,
// 	}
//   );
  
  
  gsap.fromTo(
	".loader",
	{ opacity: 1 },
	{
	  opacity: 0,
	  display: "none",
	  duration: 1,
	  delay: 3.5,
	}
  );
  
  gsap.fromTo(
	".logo-name",
	{
	  y: 50,
	  opacity: 0,
	},
	{
	  y: 0,
	  opacity: 1,
	  duration: 2,
	  delay: 0.5,
	}
  );
  
var app = function () {
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelectorAll('.nav__list-item');
			applyListeners();
		};
		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
				return toggleClass(body, 'nav-active');
			});
		};
		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
		};
		init();
}();

	
	//Switch light/dark
	
$("#switch").on('click', function () {
		if ($("body").hasClass("light")) {
			$("body").removeClass("light");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("light");
			$("#switch").addClass("switched");
		}
});

	
