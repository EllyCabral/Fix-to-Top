// jquery library should be included

$(document).ready(function($){
  // get the header height
  var head_height = $('header').outerHeight();
  console.log(head_height);
  // on scroll
  jQuery(document).on('scroll',function(){    
    // if the scroll is past the head_height
    if(jQuery(document).scrollTop()>head_height) {
      // add the fixed class
      jQuery('.sidebar').addClass('fixed');
    } else{
      jQuery('.sidebar').removeClass('fixed');
    }
  });
  
});