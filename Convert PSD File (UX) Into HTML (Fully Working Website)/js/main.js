$(document).ready (function() {
    
    new WOW().init();
    
    
    $(".burger-nav").on("click", function(){
        
        $(".container nav ul").toggleClass("open");
        
    });
    
    
    
    
   $('.js-wp-2').waypoint(function(direction) {
       
       $('.js-wp-2').addClass('animated slideInUp');
       
   }, {
		offset: '70%'
	});
    
    $('.js-wp-3').waypoint(function(direction) {
       
       $('.js-wp-3').addClass('animated fadeIn');
       
   }, {
		offset: '70%'
	});
    
   
    
    
    
    $(".iphone-btn").delay(2300).animate( {bottom: "+=-3"}, 300);
    $(".iphone-btn").delay(300).animate( {top: "+=-3"}, 100);
    
    
    
    
});
$(document).ready(function(){
    $('.counter-value').each(function(){
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        },{
            duration: 3500,
            easing: 'swing',
            step: function (now){
                $(this).text(Math.ceil(now));
            }
        });
    });
    
});
$(document).ready(function() {
    $("#news-slider").owlCarousel({
        items : 6,
        itemsDesktop:[1199,6],
        itemsDesktopSmall:[980,3],
        itemsTablet: [600,3],
        itemsMobile : [550,2],
        pagination:true,
        autoPlay:true
    });
});
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}