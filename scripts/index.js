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
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      cssEase: 'linear'
    })
});

