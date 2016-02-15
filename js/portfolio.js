/**
 * Created by samuel on 14/02/2016.
 */
$(document).ready(function() {

    jQuery('#slider_proyectos').slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2
    });

    $('.previo').click(function(){
        jQuery('#slider_proyectos').slick("slickPrev");
    })
    var divHeight = jQuery('#slider_proyectos').height();
    $('.previo').css('min-height', divHeight+'px');

    $('.siguiente').click(function(){
        jQuery('#slider_proyectos').slick("slickNext");
    })
    var divHeight = jQuery('#slider_proyectos').height();
    $('.siguiente').css('min-height', divHeight+'px');
});

function resetproyectos(){
    $('#p0').addClass('hide');
    $('#p1').addClass('hide');
    $('#p2').addClass('hide');
}

function showproyecto(number){
    $('#p'+number).removeClass('hide');
    $('#p'+number).removeClass('hide');
}
