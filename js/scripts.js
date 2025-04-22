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

  $('.mobile-menu').click(function(){
    $('.nav-menu').addClass('active');
  })
  $('.menu-close').click(function(){
    $('.nav-menu').removeClass('active');
  })

  $('.partners-carousel').owlCarousel({
    loop:true,
    margin:64,
    nav:false,
    autoplay:true,
    dots:false,
    smartSpeed: 400,
    responsive:{
        0:{
          items:2,
          margin:16
        },
        576:{
          items:3,
          margin:16
        },
        1024:{
          items:5
        }
    }
  })

  $('.home-carousel').owlCarousel({
    loop:true,
    margin:24,
    nav:false,
    autoplay:true,
    dots:false,
    responsive:{
        0:{
          items:1,
          margin:12,
          dots:true,
        },
        576:{
          items:2,
          margin:12,
          smartSpeed: 800,
        },
        1024:{
          items:3,
          smartSpeed: 900,
        }
    }
  })

});