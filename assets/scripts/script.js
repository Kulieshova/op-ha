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