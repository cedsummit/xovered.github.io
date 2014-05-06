$(document).ready(function () {
  softScroll();
  navHighlight();
  onResize();

  if($('#event-nav-banner')){
    $('a[href="#conference"], a[href="#exhibition"], a[href="#product-forge"]').hover(function (e) {
      $('#event-nav-banner').css('display', 'block');
      var content = $(this).data('label');
      $('#event-nav-banner').prepend('<span>' + content + '</span>');
    }, function (e) {
      $('#event-nav-banner').css('display', 'none');
      $('#event-nav-banner span').remove();
    });
  }
});

$(window).focus(function() {
  $('#bg-video').get(0).play();
});

$(window).blur(function() {
    $('#bg-video').get(0).pause();
});

$('#bg-video').on('ended', function () {
    this.get(0).currentTime = 0;
    this.get(0).play();
}, false);

function softScroll() {
  $('.nav-menu-item').click(function(e){
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top
      }, 500);
      return false;
  });
}

function navHighlight() {
  // Cache selectors
  var topMenu = $(".menu"),
      topMenuHeight = topMenu.height()+200,

      // All list items
      menuItems = topMenu.find("a.nav-menu-item"),

      // Anchors corresponding to menu items
      scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
      });

  // Bind to scroll
  $(window).scroll(function(){
     // Get container scroll position
     var fromTop = $(this).scrollTop()+topMenuHeight;

     // Get id of current scroll item
     var cur = scrollItems.map(function(){
       if ($(this).offset().top < fromTop)
         return this;
     });

     // Get the id of the current element
     cur = cur[cur.length-1];
     var id = cur && cur.length ? cur[0].id : "";

     menuItems.removeClass('active');
     $('a[href="#'+ id + '"]').addClass('active');
  });
}

function onResize() {
  $( window ).resize(function() {
    var wHeight = $(window).height();
    var hHeight = $('header').height();
    var aboutHeight = wHeight - hHeight;

    $('#about').css('height', wHeight + 'px');
  });
}