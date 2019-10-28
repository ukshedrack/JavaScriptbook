//GEOLOCATION

/*var elMap = document.getElementById('loc');              
var msg = 'Sorry, we were unable to get your location.';  
if (Modernizr.geolocation) {                              
  navigator.geolocation.getCurrentPosition(success, fail);  
  elMap.textContent = 'Checking location...';               
} else {                                                   
  elMap.textContent = msg;                                
}
function success(position) {               
  msg = '<h3>Longitude:<br>';                 
  msg += position.coords.longitude + '</h3>';      
  msg += '<h3>Latitude:<br>';                      
  msg += position.coords.latitude + '</h3>';       
  elMap.innerHTML = msg;                            
}
function fail(msg) {                          
  elMap.textContent = msg;                              
  console.log(msg.code);                                 
}*/


//HISTORY
/*$(function() {                                 
  function loadContent(url){                    // Load new content into page
    $('#content').load(url + ' #container').hide().fadeIn('slow');
  }

  $('nav a').on('click', function(e) {        
    e.preventDefault();                       
    var href = this.href;                     
    var $this = $(this);                   
    $('a').removeClass('current');              // Remove current from links
    $this.addClass('current');                  // Update current link
    loadContent(href);                      
    history.pushState('', $this.text, href);    // Update history
  });

  window.onpopstate = function() {              // Handle back/forward buttons
    var path = location.pathname;               // Get file path
    loadContent(path);                          // Call function to load page
    var page = path.substring(location.pathname.lastIndexOf('/')+1);
    $('a').removeClass('current');              // Remove current from links
    $('[href="' + page + '"]').addClass('current'); // Update current link
  };
});*/


//GOOGLE MAP API
function init() {
  var mapOptions = {                                 // Set up the map options
    center: new google.maps.LatLng(40.782710,-73.965310),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 13
  };
  var venueMap;                                      // Map() draws a map
  venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}
function loadScript() {
  var script = document.createElement('script');     // Create <script> element
  script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
  document.body.appendChild(script);                 // Add element to page
}
window.onload = loadScript;      