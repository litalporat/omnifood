$(document).ready(function () {

    // Sticky navigatoin
    $('.js--section-features').waypoint(
        function (direction) {
            if (direction == 'down') {
                $('nav').addClass('sticky');
            } else {
                $('nav').removeClass('sticky');
            }
        },
        {
            offset: '60px',
        }
    );

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document
                .querySelector(e.target.getAttribute('href'))
                .scrollIntoView({
                    behavior: 'smooth',
                });
        });
    });

    $('.js--wp-1').waypoint(
        function (direction) {
            if (direction == 'down') {
                $('.js--wp-1').addClass('js--wp-1-animation');
            } else {
                
            }
        },
        {
            offset: '50%'
        }
    );

    $('.js--wp-2').waypoint(
        function (direction) {
            if (direction == 'down') {
                $('.js--wp-2').addClass('js--wp-2-animation');
            } else {
                
            }
        },
        {
            offset: '50%'
        }
    );

    // Mobile navigation 
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        nav.slideToggle(200);
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else{
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
});
