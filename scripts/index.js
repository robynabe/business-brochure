function openSideMenu() {
  document.getElementById("side-menu").style.width = "100%"
}

function closeSideMenu() {
  document.getElementById("side-menu").style.width = "0"
}

// Slick Slide Show //

$(document).ready(() => {
		$('#container-right .img').slick({
      fade: true,
      infinite: true,
      autoplay: 4000,
    })

    /*$('.shop-device .room-device').slick({
      responsive: [{
        breakpoint: 500,
        settings: {
          speed: 2000,
          infinite:true,
          slidesToShow: 3,
          slidesToScroll: 1
        }

      }]
    })*/
    
});

