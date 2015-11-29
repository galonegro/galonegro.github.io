/**
 * Created by samuel on 29/11/2015.
 */
$(document).ready(function() {

    $('#fullpage').fullpage({
        loopHorizontal: false,
        anchors: ['principal']
    });

    jQuery('#slider_proyectos').slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 4
    });

    $('body').on({
        'DOMMouseScroll mousewheel': function (e) {
            e.preventDefault();
            e.stopPropagation();

            var wheelValue = 0;
            if (typeof e.originalEvent.wheelDelta !== 'undefined') {
                wheelValue = e.originalEvent.wheelDelta;
            } else {
                // Firefox.
                wheelValue = -e.originalEvent.detail;
            }

            if (wheelValue >= 0) {
                $(null).fullpage.moveSlideLeft();
            }
            else {
                $(null).fullpage.moveSlideRight();
            }
        }
    })

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


    $( document ).ready(function() {
        $('#contactform').submit(function(e) {
            $.ajax({
                url: "//formspree.io/samuel.gago@galonegro.es",
                method: "POST",
                data: {message: $('#nome').val()+" - "+$('#mensaxe').val(), _replyto: $('#mail').val(),  },
                dataType: "json",
                success: function(data) {
                    swal({title: "Enviado!",text: "Recibimos o teu mail, por favor, se pacente e agarda a nosa resposta. Moitas grazas!",type: "success",confirmButtonText: "Aceptar" });
                },
                error: function(data) {
                    swal({title: "Error!",text: "Houbo un erro ó enviar a mensaxe, por favor, contacta connosco a través de info@galonegro.es",type: "error",confirmButtonText: "Aceptar" });
                }
            });
            e.preventDefault();
        })
    });
});

function resetbubbles(){
    $('#bubbles').addClass('invisible');
    $('#intro').addClass('invisible');
    $('#samuel').addClass('invisible');
    $('#iago').addClass('invisible');
    $('#tamara').addClass('invisible');
    $('#kole').addClass('invisible');
    setTimeout('', 1000);
    $('#bubbles').addClass('hide');
    $('#intro').addClass('hide');
    $('#samuel').addClass('hide');
    $('#iago').addClass('hide');
    $('#tamara').addClass('hide');
    $('#kole').addClass('hide');
}
function showdiv(id){
    $('#bubbles').removeClass('invisible');
    $('#'+id).removeClass('invisible');
    setTimeout('', 1000);
    $('#bubbles').removeClass('hide');
    $('#'+id).removeClass('hide');
}

function resetproyectos(){
    $('#p1p1').addClass('hide');
    $('#p1p2').addClass('hide');
    $('#p2p1').addClass('hide');
    $('#p2p2').addClass('hide');
}

function showproyecto(number){
    $('#p'+number+"p1").removeClass('hide');
    $('#p'+number+"p2").removeClass('hide');
}

function bublePadding(number){
    $('#bubbles').removeClass('col-xs-offset-6');
    $('#bubbles').removeClass('col-xs-offset-3');
    $('#bubbles').removeClass('right_bbl');
    $('#bubbles').removeClass('left_bbl');
    if(number==0){
        $('#bubbles').addClass('left_bbl');
    }else if(number==1){
        $('#bubbles').addClass('col-xs-offset-3');
        $('#bubbles').addClass('left_bbl');
    }else if(number==2){
        $('#bubbles').addClass('col-xs-offset-3');
        $('#bubbles').addClass('right_bbl');
    }else if(number==3){
        $('#bubbles').addClass('col-xs-offset-6');
        $('#bubbles').addClass('right_bbl');
    }
}

window.mobileAndTabletcheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
}