jQuery: (function($){ 
  'use strict'; 

/* ------ Animation ------ */

AOS.init({
          easing: 'ease-in-out-sine'
});

/* ------ Animation ------ */

/* ------ Datepicker ------ */
$('#datepicker').datepicker({
    uiLibrary: 'bootstrap4'
});
/* ------ Datepicker ------ */

/* ------ Back to Top Button ------ */
$(document).ready(function() {
  $('#toTop').hide();
  var topPart = $('.header-section');
  // the position of the top part
  var pos = topPart.offset();
  $('#toTop').on('click',function() {
    $("html, body").animate({scrollTop: 0});                     
  });
                
  $(window).scroll(function() {
    if ($(this).scrollTop() > pos.top + topPart.height()) {
      $('#toTop').fadeIn();
    } else if ($(this).scrollTop() <= pos.top) {
      $('#toTop').fadeOut();
    }
  });
});

/* ------ Back to Top Button ------ */



/* ------ Sticky navbar  ------ */

window.onscroll = function() {myFunction()};

var header = document.getElementById("mymenu_bar");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
  } else {
      header.classList.remove("sticky");
  }
}
/* ------ Sticky navbar  ------ */



/* ------ Resize Logo ------ */
jQuery(window).scroll(function() {
    var scrollTop = jQuery(document).scrollTop();   
    if (scrollTop > 0) {
      jQuery(".logo-img").css('width', '60%');
    }
    else {
      jQuery(".logo-img").css('width', '100%');
    }
});
/* ------ Resize Logo ------ */


/* ------ Smooth Scroll on Anchor Tag ------ */
$(".navbar a").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        // Using jQuery's animate() method to add smooth page scroll
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
               
        // Add hash (#) to URL when done scrolling
        window.location.hash = hash;
        });
    } // End if
});
/* ------ Smooth Scroll on Anchor Tag ------ */



/* ------ Slick Slider ------ */
$('.center').slick({
        centerPadding:50,
        centerMode: true,
        slidesToShow: 3,
        
        autoplay:true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              dots: true,
              slidesToShow: 1
            }
          }
        ]
});
/* ------ Slick Slider ------ */

})(jQuery);


// /* ------ form validation ------ */
// function validate() {
//    //validation for booking date
//    var booking_date = document.forms["bookingform"]["booking_date"].value;
//    if(booking_date==""){
//      alert("Please enter booking date");
//      return false;
//    }
//    //validation for booking time
//    var booking_time = document.forms["bookingform"]["booking_time"].value;
//    if(booking_time==""){
//      alert("Please enter booking time");
//      return false;
//    }
//    //validation for email
//    var email = document.forms["bookingform"]["email"].value;
//    if(email==""){
//      alert("Please enter the email");
//      return false;
//    }else{
//      var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
//      var x=re.test(email);
//    if(x){
//    }else{
//      alert("Email id not in correct format");
//      return false;
//    } 
//    } 
//    //validation for phone no
//    var phone_no = document.forms["bookingform"]["phone_no"].value;
//    if(phone_no==""){
//      alert("Please enter the mobile");
//      return false;
//    }else{
//      if(isNaN(phone_no)){
//        alert("Mobile number not valid");
//        return false;
//      }
//    } 
//    //validation for no of persons
//    var no_of_persons = document.forms["bookingform"]["no_of_persons"].value;
//    if(no_of_persons==""){
//      alert("Please enter the no of persons");
//      return false;
//    }
// }

$(document).ready(function() {
  // Form submission
  $("#submit-btn").click(function() {
      // Validation for booking date
      var booking_date = $("input[name='booking_date']").val();
      if(booking_date == "") {
          alert("Please enter booking date");
          return false;
      }
      
      // Validation for booking time
      var booking_time = $("select[name='booking_time']").val();
      if(booking_time == "") {
          alert("Please enter booking time");
          return false;
      }
      
      // Validation for email
      var email = $("input[name='email']").val();
      if(email == "") {
          alert("Please enter the email");
          return false;
      } else {
          var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          var x = re.test(email);
          if(!x) {
              alert("Email id not in correct format");
              return false;
          }
      }
      
      // Validation for phone no
      var phone_no = $("input[name='phone_no']").val();
      if(phone_no == "") {
          alert("Please enter the mobile");
          return false;
      } else {
          if(isNaN(phone_no) || phone_no.length != 10) {
              alert("Mobile number not valid");
              return false;
          }
      }
      
      // Validation for no of persons
      var no_of_persons = $("select[name='no_of_persons']").val();
      if(no_of_persons == "") {
          alert("Please enter the no of persons");
          return false;
      }

      // If all validations pass, submit the form using AJAX
      $.ajax({
          type: "POST",
          url: "process_form.php",
          data: $("#bookingform").serialize(),
          success: function(response) {
              if(response == "success") {
                  alert("Form submitted successfully!");
                  // You can redirect or do anything else here after successful submission
              } else {
                  alert("Error submitting form. Please try again later.");
              }
          }
      });
  });
});
/* ------ form validation ------ */







