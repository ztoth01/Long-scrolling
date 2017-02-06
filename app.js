jQuery(document).ready(function() {

    jQuery(window).scroll(function() {

        const windscroll = jQuery(window).scrollTop();

        if (windscroll >= 100) {
            jQuery('#main section').each(function(i) {
              if(jQuery(this).position().top <= windscroll) {
                jQuery('#nav .a').css('background','blue');
                jQuery('#nav .a').eq(i).css('background','red');
             }
            });
        }else{
            jQuery('#nav .a').css('background','blue');
            jQuery('#nav .a:first').css('background','red');
        }

        jQuery('.box').each(function(){

            if(jQuery(window).scrollTop() > $(this).offset().top - ( $(window).height() * .8)){
                jQuery(this).css('width','200');
            }else{
                jQuery(this).css('width','100');
            }
          });
        }).scroll();

    jQuery('#nav .a').on('click', function() {
        const scrollAnchor = jQuery(this).attr('data-scroll'),
          scrollPoint = jQuery('section[data-anchor="' + scrollAnchor + '"]').offset().top;

        jQuery('body,html').animate({
                scrollTop: scrollPoint
        }, 700, 'swing');
        return false;
    });

});

