const menu = document.querySelector('header ul');
const menuBtn = document.querySelector('.menu-btn');
const menuItems = document.querySelectorAll('.menu li a');

menuBtn.addEventListener('click', ()=>{
	menu.classList.toggle('show');
})


menuItems.forEach((el) => el.addEventListener('click', smoothScroll));

function smoothScroll(e) {

   e.preventDefault();
	menu.classList.remove('show');
	
   const distance = 50; 
   const speed = 10;
   const jumpTo = this.getAttribute('href');
   const targetY = document.querySelector(jumpTo).offsetTop - (innerHeight/10); 
	
   let currentY = window.pageYOffset;
   const animator = setInterval(scrollTo, speed);
	
	
	function scrollTo() {
		
		if (currentY <=targetY) {

			window.scroll(0, currentY += distance);

			if(currentY >= targetY) {
				window.scroll(0, targetY);
				clearInterval(animator);
			}

		} else if (currentY >= targetY) {

			window.scroll(0, currentY -= distance);

			if(currentY <= (targetY)) {
				window.scroll(0, targetY);
				clearInterval(animator);
			}
		}
	}
}


function initMap() {
   const warsaw = {lat: 52.247762, lng: 21.013516};
   const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: warsaw
   });
   var marker = new google.maps.Marker({
      position: warsaw,
      map: map
   });
}

window.onload = initMap;
