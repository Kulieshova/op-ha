// work in progress - needs some refactoring and will drop JQuery i promise :)
var instance = $(".hs__wrapper");
$.each( instance, function(key, value) {
    
  var arrows = $(instance[key]).find(".arrow"),
      prevArrow = arrows.filter('.arrow-prev'),
      nextArrow = arrows.filter('.arrow-next'),
      box = $(instance[key]).find(".hs"), 
      x = 0,
      mx = 0,
      maxScrollWidth = box[0].scrollWidth - (box[0].clientWidth / 2) - (box.width() / 2);

  $(arrows).on('click', function() {
      
    if ($(this).hasClass("arrow-next")) {
      x = ((box.width() / 2)) + box.scrollLeft() - 10;
      box.animate({
        scrollLeft: x,
      })
    } else {
      x = ((box.width() / 2)) - box.scrollLeft() -10;
      box.animate({
        scrollLeft: -x,
      })
    }
      
  });
    
  $(box).on({
    mousemove: function(e) {
      var mx2 = e.pageX - this.offsetLeft;
      if(mx) this.scrollLeft = this.sx + mx - mx2;
    },
    mousedown: function(e) {
      this.sx = this.scrollLeft;
      mx = e.pageX - this.offsetLeft;
    },
    scroll: function() {
      toggleArrows();
    }
  });

  $(document).on("mouseup", function(){
    mx = 0;
  });
  
  function toggleArrows() {
    if(box.scrollLeft() > maxScrollWidth - 10) {
        // disable next button when right end has reached 
        nextArrow.addClass('disabled');
      } else if(box.scrollLeft() < 10) {
        // disable prev button when left end has reached 
        prevArrow.addClass('disabled')
      } else{
        // both are enabled
        nextArrow.removeClass('disabled');
        prevArrow.removeClass('disabled');
      }
  }
  
});

$(document).ready(function() {
  $('.switcher').click(function(){
    $(this).addClass('chosen').siblings().removeClass('chosen');       
});

$('#any-checkbox').click(function(){
  if ($(this).prop("checked")){
    $(this).addClass('chosen').siblings().removeClass('chosen');   
  }
        
});

$( "body" ).on( "change", ".checkbox-inline > input[type=checkbox]", function() {
  if ($(this).attr("id") === "any-checkbox") { //Any checkbox tick
      if ($(this).prop("checked")) { //User checked any
          //Other checkboxes are unchecked
          $(".checkbox-inline > input[type=checkbox]:not(#any-checkbox)").prop("checked", false);
      }
  } else { //Other checkbox tick
      if ($(this).prop("checked")) {//User checked another checkbox
          //Any checkbox is unchecked
          $("#any-checkbox").prop("checked", false);
          // $('.interests-filters:has(input:not(:checked))').removeClass('interests-filters-active');

      }
  }
});

$('.interests-filters-input').click(function() {
  $('.interests-filters:has(input:checked)').addClass('interests-filters-active');
  $('.interests-filters:has(input:not(:checked))').removeClass('interests-filters-active');
});

})(jQuery);



function myFunction() {
  var filter = document.getElementById("filters");
  if (filter.style.display === "none") {
    filter.style.display = "block";
  } else {
    filter.style.display = "none";
  }
}

$('input[type="checkbox"]').change(function(){
  // console.log($(this).is(':checked'));
  if($(everything).is(':checked')){
    $("#everything").siblings('input[type="checkbox"]').attr('checked', false);
  }
});

