window.addEventListener("scroll", function(){
 		var header = document.querySelector("header");
 		header.classList.toggle("wow", window.scrollY > 0);
 	})
 	function toggle(){
 		var header = document.querySelector("header");
 		header.classList.toggle("response");
 	}