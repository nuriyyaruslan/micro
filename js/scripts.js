$(function () {

  /* starts contact map */
  if ($('#map').length > 0) {
    function initMap(getId) {
      if (document.getElementById(getId)) {
        let lat = parseFloat(document.getElementById(getId).getAttribute("lat"));
        let lng = parseFloat(document.getElementById(getId).getAttribute("lng"));
        let markerIcon = $('.map-content .markerIcon').attr('src');
        console.log(markerIcon);
        var location = { lat, lng }
        map = new google.maps.Map(document.getElementById(getId), {
          zoom: 6,
          disableDefaultUI: true,
          center: location,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
        });
        marker = new google.maps.Marker({
          map: map,
          position: location,
          animation: google.maps.Animation.DROP,
          icon: markerIcon
        });
        marker.addListener('click', function () {
          $('.contact_details').removeClass('dnonemobile');
        });
        marker.addListener('click', toggleBounce);
      }
    }
    function toggleBounce() {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }
    initMap("map");
    google.maps.event.addDomListener(window, "load", initMap);
  }
  /* ends contact map */

  //HEADER SCROLL ACTIVE
  function scrollTopActive() {
    if ($(window).scrollTop() > 50) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
  }
  $(window).on("scroll", function () {
    scrollTopActive()
  });
  scrollTopActive();

  // owl carousel init
  // $('.testimonials').owlCarousel({
  //   loop: true,
  //   dots: true,
  //   nav: true,
  //   items: 1,
  //   smartSpeed: 1000,
  //   navText: [
  //     `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  //         <path d="M20 26L10 16L20 6" stroke="#682B82" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  //     </svg>`,
  //     `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  //         <path d="M12 6L22 16L12 26" stroke="#682B82" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  //     </svg>`
  // ] ,
  //   responsive: {
  //     1024: {
  //       nav: false,
       
  //     }
  //   }
  // });

  // $('.prev-btn').click(function () {
  //   $('.owl-prev').click();
  // })

  // $('.next-btn').click(function () {
  //   $('.owl-next').click();
  // })

  //MOBILE MENU
  // $('.menu-open-js').click(function () {
  //   $('.menu-open,.menu-close').toggleClass('hidden');
  //   $('.menu-nav').toggleClass('active');
  // })

});