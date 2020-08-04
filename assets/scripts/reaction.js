var animateReactionsOn;
var animateReactionsOut;

$(function () {
  $(".options").mouseenter(function () {
    var parent = $(this)
    
    animateReactionsOn = setTimeout(function () {      
      parent.find(".reaction").each(function (index) {
        var element = $(this)
        setTimeout(function () {
          element.addClass("is-visible");
        }, index * 60);
      });
    }, 500);
    
    clearTimeout(animateReactionsOut);
  });
  
  $(".options").mouseleave(function () {
    var parent = $(this)
    
    animateReactionsOut = setTimeout(function () {
      parent.removeClass("active");
      parent.find(".reaction").removeClass("is-visible");
    }, 500);
    
    clearTimeout(animateReactionsOn);
  });
  
  
  
  
  
  
  
  
  
  var dataPopupOld = null;
  var dataPopupNew = null;
  
  
  $(".options .button").click(function () {
    var children = $(this)
    var parent = $(this).parent()
    
    if ($(this).parent().is(".Like, .Love, .Thankful, .Haha, .Wow, .Sad, .Angry")) {
      parent.removeClass("Like Love Thankful Haha Wow Sad Angry");
      parent.addClass("default");
      parent.find(".button").text("React");
    } else {
      parent.addClass("default");
    }
    
    if ($(this).parent().hasClass("default")) {
      $(this).addClass("Like");
    }
  });
  
  
  $(".reaction").click(function () {
    dataPopupNew = $(this).attr("data-popup");
    
    $(".options").removeClass("default");
    
    $(".options .button").text(dataPopupNew);
    
    $('.options:contains(Like)').css('color', 'rgb(88, 144, 255)');
    $('.options:contains(Love)').css('color', 'rgb(242, 82, 104)');
    $('.options:contains(Thankful)').css('color', 'rgb(157, 135, 210)');
    $('.options:contains(Haha), .options:contains(Wow), .options:contains(Sad)').css('color', 'rgb(240, 186, 21)');
    $('.options:contains(Angry)').css('color', 'rgb(247, 113, 75)');
    
    $(".options").removeClass(dataPopupOld);
    $(".options").addClass(dataPopupNew);
    
    dataPopupOld = dataPopupNew
  });
});