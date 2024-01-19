$(document).ready(function(){
    $('#hamburger-menu').click(function(){
        $('nav').slideToggle();
    })

    $('.product button').click(function(){
        const destination = $('#contact');

        $('html').animate({
            scrollTop: destination.offset().top
        }, 800);

        const interestedProduct = $(this).parent().find('h3').text();

        $('#travel-package').val(interestedProduct)
    })

    function phoneMask(element){
        $(element).mask('(00) 00000-0000');
    }

    phoneMask('#phone');
    phoneMask('#second-phone');

    $('form').validate({
        rules:{
            name:{
                required: true,
            },
            address:{
                required: true,
            },
            phone:{
                required: true,
            },
            secondPhone:{
                required: false,
            },
            email:{
                required: true,
            },
            travelPackage:{
                required: true,
            },
            message:{
                required: false,
            },
        },
        messages:{
           name: 'Este campo é obrigatório',
           address: 'Este campo é obrigatório',
           phone: 'Este campo é obrigatório',
           email: 'Este campo é obrigatório',
           travelPackage: 'Este campo é obrigatório',
        },
    });
})