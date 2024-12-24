$(function() {
    $("#jqueryBtn").on("click", function() {
      alert("Bu jQuery tarafından çalıştırıldı!");
    });

    //COPY PHONE NUMBER
    $('#copyButton').click(function () {
      const textToCopy = $('.copied-text').text();
      const tempInput = $('<input>');
      $('body').append(tempInput);
      tempInput.val(textToCopy).select();
      document.execCommand('copy');
      tempInput.remove();
      alert('Phone number copied to clipboard!');
    });

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
          zoom: 16,
          disableDefaultUI: true,
          center: location,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles:[{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
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

  //Blogs and News filter dropdown
  $('.filters-btn').click(function(){
    $('.filters-open,.filters-close,.filter-dropdown').toggleClass('hidden');
  })

  $('.hide-filter-dropdown').click(function(){
    $('.filter-dropdown,.filters-close').addClass('hidden');
    $('.filters-open').removeClass('hidden');
  })

  //HEADER SCROLL ACTIVE
  $(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".header").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".header").removeClass("active");
    }
});

  });