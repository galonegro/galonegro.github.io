/**
 * Created by samuel on 14/02/2016.
 */
$(document).ready(function() {
    $( document ).ready(function() {
        $('#contactform').submit(function(e) {
            $.ajax({
                url: "//formspree.io/samuel.gago@galonegro.es",
                method: "POST",
                data: {message: $('#nombre').val()+" - "+$('#contenido').val(), _replyto: $('#email').val(),  },
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