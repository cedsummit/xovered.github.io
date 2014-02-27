// Page Stuff

$(document).ready(function () {
  var wHeight = $(window).height(),
      hHeight = $('#header').height(),
      aboutHeight = wHeight - hHeight;

  var videoTemplate = '<source src="video/ambient.webm" type="video/webm" />' +
                      '<source src="video/ambient.ogv" type="video/ogg" />' +
                      '<source src="video/ambient.mp4" />';

  // $('#bg-video').prepend(videoTemplate);
  // $('#about').css('height', wHeight + 'px');

  $('.nav-menu-item').click(function(e){
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top
      }, 500);
      return false;
  });

  // Cache selectors
  var topMenu = $(".menu"),
      topMenuHeight = topMenu.height()+200,

      // All list items
      menuItems = topMenu.find("a"),

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

     console.log(id)
     menuItems.removeClass('active');
     $('a[href="#'+ id + '"]').addClass('active');
     // Set/remove active class
  });

  //Make sure things resize!
  $( window ).resize(function() {
        wHeight = $(window).height(),
        hHeight = $('header').height(),
        aboutHeight = wHeight - hHeight;

        $('#about').css('height', wHeight + 'px');
  });



});