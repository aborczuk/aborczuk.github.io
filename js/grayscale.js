/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Setup team section
var baseStr1 = "img/cheek1/Image";
var baseStr2 = "img/cheek2/Image";
var baseStr3 = "img/cheek3/Image";
var baseStr4 = "img/cheek4/Image";
var baseStr5 = "img/cheek5/Image";
var baseStr6 = "img/cheek6/Image";


var counter1 = 1;
var counter2 = 1;
var counter3 = 1;
var counter4 = 1;
var counter5 = 1;
var counter6 = 1;

var cheekOneLength = 82;
var cheekTwoLength = 53;
var cheekThreeLength = 56;
var cheekFourLength = 65;
var cheekFiveLength = 35;
var cheekSixLength = 81;


var lastPos1 = 0, lastPos2 = 0,lastPos3 = 0, lastPos4 = 0, lastPos5 = 0,lastPos6 = 0; 

for (var i = 0; i < cheekOneLength; i++) {
  $("<img/>", {
    id: "OneFrame" + (i+1),
    src: baseStr1 + (i+1) + ".jpg",
    width: "270px",
    height: "480px"
  }).css("width", "270px").css("height", "480px").hide().appendTo("#cheek1");
}

for (var i = 0; i < cheekTwoLength; i++) {
  $("<img/>", {
    id: "TwoFrame" + (i+1),
    src: baseStr2 + (i+1) + ".jpg",
    width: "270px",
    height: "480px"
  }).css("width", "270px").css("height", "480px").hide().appendTo("#cheek2");
}

for (var i = 0; i < cheekThreeLength; i++) {
  $("<img/>", {
    id: "ThreeFrame" + (i+1),
    src: baseStr3 + (i+1) + ".jpg",
    width: "270px",
    height: "480px"
  }).css("width", "270px").css("height", "480px").hide().appendTo("#cheek3");
}

for (var i = 0; i < cheekFourLength; i++) {
  $("<img/>", {
    id: "FourFrame" + (i+1),
    src: baseStr4 + (i+1) + ".jpg",
    width: "270px",
    height: "480px"
  }).css("width", "270px").css("height", "480px").hide().appendTo("#cheek4");
}

for (var i = 0; i < cheekFiveLength; i++) {
  $("<img/>", {
    id: "FiveFrame" + (i+1),
    src: baseStr5 + (i+1) + ".jpg",
    width: "270px",
    height: "480px"
  }).css("width", "270px").css("height", "480px").hide().appendTo("#cheek5");
}

for (var i = 0; i < cheekSixLength; i++) {
  $("<img/>", {
    id: "SixFrame" + (i+1),
    src: baseStr6 + (i+1) + ".jpg",
    width: "270px",
    height: "480px"
  }).css("width", "270px").css("height", "480px").hide().appendTo("#cheek6");
}

console.log($("#cheek1"));
console.log(window);

$("#OneFrame1").show();
$("#TwoFrame1").show();
$("#ThreeFrame1").show();
$("#FourFrame1").show();
$("#FiveFrame1").show();
$("#SixFrame1").show();

$("#cheek1").mousemove(function(event) {
  if (event.clientX > lastPos1 && counter1 < cheekOneLength) {
    $("#OneFrame" + counter1).hide();
    $("#OneFrame" + ++counter1).show();
  } else if (event.clientX < lastPos1 && counter1 > 1) {
    $("#OneFrame" + counter1).hide();
    $("#OneFrame" + --counter1).show();
  }
  lastPos1 = event.clientX;
});

$("#cheek2").mousemove(function(event) {
  if (event.clientX > lastPos2 && counter2 < cheekTwoLength) {
    $("#TwoFrame" + counter2).hide();
    $("#TwoFrame" + ++counter2).show();
  } else if (event.clientX < lastPos2 && counter2 > 1) {
    $("#TwoFrame" + counter2).hide();
    $("#TwoFrame" + --counter2).show();
  }
  lastPos2 = event.clientX;
});

$("#cheek3").mousemove(function(event) {
  if (event.clientX > lastPos3 && counter3 < cheekThreeLength) {
    $("#ThreeFrame" + counter3).hide();
    $("#ThreeFrame" + ++counter3).show();
  } else if (event.clientX < lastPos3 && counter3 > 1) {
    $("#ThreeFrame" + counter3).hide();
    $("#ThreeFrame" + --counter3).show();
  }
  lastPos3 = event.clientX;
});

$("#cheek4").mousemove(function(event) {
  if (event.clientX > lastPos4 && counter4 < cheekFourLength) {
    $("#FourFrame" + counter4).hide();
    $("#FourFrame" + ++counter4).show();
  } else if (event.clientX < lastPos4 && counter4 > 1) {
    $("#FourFrame" + counter4).hide();
    $("#FourFrame" + --counter4).show();
  }
  lastPos4 = event.clientX;
});

$("#cheek5").mousemove(function(event) {
  if (event.clientX > lastPos5 && counter5 < cheekFiveLength) {
    $("#FiveFrame" + counter5).hide();
    $("#FiveFrame" + ++counter5).show();
  } else if (event.clientX < lastPos5 && counter5 > 1) {
    $("#FiveFrame" + counter5).hide();
    $("#FiveFrame" + --counter5).show();
  }
  lastPos5 = event.clientX;
});

$("#cheek6").mousemove(function(event) {
  if (event.clientX > lastPos6 && counter6 < cheekSixLength) {
    $("#SixFrame" + counter6).hide();
    $("#SixFrame" + ++counter6).show();
  } else if (event.clientX < lastPos6 && counter6 > 1) {
    $("#SixFrame" + counter6).hide();
    $("#SixFrame" + --counter6).show();
  }
  lastPos6 = event.clientX;
});
// Mobile

var mLastPos1 = 0, mLastPos2 = 0, mLastPos3 = 0, mLastPos4 = 0, mLastPos5 = 0, mLastPos6 = 0;
if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", function(event) {
    if (event.gamma > mLastPos1 && counter1 < cheekOneLength) {
      $("#OneFrame" + counter1).hide();
      $("#OneFrame" + ++counter1).show();
    } else if (event.gamma < mLastPos1 && counter1 > 1) {
      $("#OneFrame" + counter1).hide();
      $("#OneFrame" + --counter1).show();
    }
    if (event.gamma > mLastPos2 && counter2 < cheekTwoLength) {
      $("#TwoFrame" + counter2).hide();
      $("#TwoFrame" + ++counter2).show();
    } else if (event.gamma < mLastPos2 && counter2 > 1) {
      $("#TwoFrame" + counter2).hide();
      $("#TwoFrame" + --counter2).show();
    }
    if (event.gamma > mLastPos3 && counter3 < cheekThreeLength) {
      $("#ThreeFrame" + counter3).hide();
      $("#ThreeFrame" + ++counter3).show();
    } else if (event.gamma < mLastPos3 && counter3 > 1) {
      $("#ThreeFrame" + counter3).hide();
      $("#ThreeFrame" + --counter3).show();
    }
    if (event.gamma > mLastPos4 && counter4 < cheekFourLength) {
      $("#FourFrame" + counter4).hide();
      $("#FourFrame" + ++counter4).show();
    } else if (event.gamma < mLastPos4 && counter4 > 1) {
      $("#FourFrame" + counter4).hide();
      $("#FourFrame" + --counter4).show();
    }
    if (event.gamma > mLastPos5 && counter5 < cheekFiveLength) {
      $("#FiveFrame" + counter5).hide();
      $("#FiveFrame" + ++counter5).show();
    } else if (event.gamma < mLastPos5 && counter5 > 1) {
      $("#FiveFrame" + counter5).hide();
      $("#FiveFrame" + --counter5).show();
    }
    if (event.gamma > mLastPos6 && counter6 < cheekSixLength) {
      $("#SixFrame" + counter6).hide();
      $("#SixFrame" + ++counter6).show();
    } else if (event.gamma < mLastPos6 && counter6 > 1) {
      $("#SixFrame" + counter6).hide();
      $("#SixFrame" + --counter6).show();
    }
    mLastPos1 = event.gamma;
    mLastPos2 = event.gamma;
    mLastPos3 = event.gamma;
    mLastPos4 = event.gamma;
    mLastPos5 = event.gamma;
    mLastPos6 = event.gamma;
  }, true);
}
//if (window.DeviceMotionEvent) {
  //window.addEventListener("devicemotion", function(event) {
    //if (event.acceleration.x > mLastPos1 && counter1 < cheekOneLength) {
      //$("#OneFrame" + counter1).hide();
      //$("#OneFrame" + ++counter1).show();
    //} else if (event.acceleration.x < mLastPos1 && counter1 > 1) {
      //$("#OneFrame" + counter1).hide();
      //$("#OneFrame" + --counter1).show();
    //}
    //mLastPos1 = event.acceleration.x;
  //}, true);
//}

// Google Maps Scripts
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    
  
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.768089, -73.981943), // New York

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = 'img/map-marker.png';
    var myLatLng = new google.maps.LatLng(40.6700, -73.9400);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}
