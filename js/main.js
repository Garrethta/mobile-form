$(function () {

    $('.custom').styler();

    $('.main__top-support').magnificPopup({
        type:'inline'
    });


    $('.bottom__form-btn').on('click', function(){
        $('.error').addClass('error--active');
        $('.inactive-bg').toggleClass('active')
    });

    // отключение отправки формы при нажатии на кнопку для показа окна с ошибкой
    $('.bottom__form').submit(function (e) {
        e.preventDefault();
    });

    $('.error-closebtn').on('click', function(){
        $('.error').removeClass('error--active');
        $('.inactive-bg').toggleClass('active')
    });

    $('.inactive-bg').on('click', function(){
        $(this).removeClass('active')
        $('.error').removeClass('error--active')
    });


});