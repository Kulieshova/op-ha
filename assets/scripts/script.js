// Navbar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

// Full width stories column
(function($) {
    var $window = $(window),
        $storiesCol = $('#stories-col');  
    function resize() {
        if ($window.width() < 930) {
            return $storiesCol.addClass('col-sm-12');
        }
        $storiesCol.removeClass('col-sm-12');
    }
    $window
        .resize(resize)
        .trigger('resize');
  })(jQuery);

// Full width searching column
  (function($) {
    var $window = $(window),
        $searchCol = $('#search-col');  
    function resize() {
        if ($window.width() < 930) {
            return $searchCol.addClass('col-sm-12');
        }
        $searchCol.removeClass('col-sm-12');
    }
    $window
        .resize(resize)
        .trigger('resize');
  })(jQuery);

// Full width the tutors column
  (function($) {
    var $window = $(window),
        $tutorsCol = $('#tutors-col');  
    function resize() {
        if ($window.width() < 795) {
            return $tutorsCol.addClass('col-sm-12');
        }
        $tutorsCol.removeClass('col-sm-12');
    }
    $window
        .resize(resize)
        .trigger('resize');
  })(jQuery);

// Full width the "Follow us" column
  (function($) {
    var $window = $(window),
        $socialCol = $('#social-col');  
    function resize() {
        if ($window.width() < 795) {
            return $socialCol.addClass('col-sm-12');
        }
        $socialCol.removeClass('col-sm-12');
    }
    $window
        .resize(resize)
        .trigger('resize');
  })(jQuery);

// Full width courses columns
  (function($) {
    var $window = $(window),
        $personalCol = $('#personal-col');  
    function resize() {
        if ($window.width() < 820) {
            return $personalCol.addClass('col-sm-12');
        }
        $personalCol.removeClass('col-sm-12');
    }
    $window
        .resize(resize)
        .trigger('resize');
  })(jQuery);

  (function($) {
    var $window = $(window),
        $popularCol = $('#popular-col');  
    function resize() {
        if ($window.width() < 820) {
            return $popularCol.addClass('col-sm-12');
        }
        $popularCol.removeClass('col-sm-12');
    }
    $window
        .resize(resize)
        .trigger('resize');
  })(jQuery);



  

  /* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}

const d = 40;

document.querySelectorAll('.rocket-button').forEach(elem => {

    elem.querySelectorAll('.default, .success > div').forEach(text => {
        charming(text);
        text.querySelectorAll('span').forEach((span, i) => {
            span.innerHTML = span.textContent == ' ' ? '&nbsp;' : span.textContent;
            span.style.setProperty('--d', i * d + 'ms');
            span.style.setProperty('--ds', text.querySelectorAll('span').length * d - d - i * d + 'ms');
        });
    });

    elem.addEventListener('click', e => {
        e.preventDefault();
        if(elem.classList.contains('animated')) {
            return;
        }
        elem.classList.add('animated');
        elem.classList.toggle('live');
        setTimeout(() => {
            elem.classList.remove('animated');
        }, 2400);
    });

});

// Smooth scroll effect
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
