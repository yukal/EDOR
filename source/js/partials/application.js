(function($) {

    var gag = function(e) {
            e.preventDefault();
        },

        districtOnSelect = function(e) {
            if ('map-ukraine' != e.target.id) {
                $('#map-ukraine .active').removeAttr('class');
                $(e.target).addClass('active');
            }
            // console.log($(e.target.parentNode).find('.active'));
        },

        switchLanguage = function(e) {
            $('#lng-switcher').find('.active').removeAttr('class');
            $(e.target.parentNode).addClass('active');
            //console.log($(e.target).data('lang'));
            e.preventDefault();
        },

        toggleCopyright = function(e) {
            var txt = '',
                $button = $('#btn-copyright'),
                popupWindow = document.querySelector('.copyright-popup'),
                template = '<div class="copyright-popup transparent">'
                    + '<div class="wrap row">'
                    + '<div class="item col-md-4"><p><a target="_blank" href="https://ua.linkedin.com/in/дмитрий-шевчук-17398a12b/en">Shevchuk Dmitry</a> <br> <small>Art Directing</small></p></div>'
                    + '<div class="item col-md-4"><p><a target="_blank" href="https://ua.linkedin.com/in/yukal">Yukal Alexander</a> <br> <small>Web Design, Frontend</small></p></div>'
                    + '<div class="item col-md-4"><p><a target="_blank" href="#">John Doe</a> <br> <small>Backend developer</small></p></div>'
                    + '</div>'
                    + '</div>';

            if (popupWindow == null) {

                $('footer .copyright').addClass('opened');
                $button.after(template);
                $button.html('<span class="close">&times;</span> Close');

                setTimeout(function() {
                    $('.copyright-popup').removeClass('transparent');
                }, 50);

            } else {

                $('footer .copyright').toggleClass('opened');
                $(popupWindow).toggleClass('transparent');

                txt = e.target.innerText !== 'Developed by'?'Developed by':'<span class="close">&times;</span> Close';
                $button.html(txt);

            }

            e.preventDefault();
        };


    $(document).on('click', 'a[href="#"]', gag);
    $(document).on('click', '#map-ukraine', districtOnSelect);
    $(document).on('click', '#btn-copyright', toggleCopyright);
    $(document).on('click', '#lng-switcher a', switchLanguage);

    // Init Copyright Block
    $('footer').append('<div class="clearfix"></div><div class="copyright"><a href="#" id="btn-copyright">Developed by</a></div>');

})(jQuery);