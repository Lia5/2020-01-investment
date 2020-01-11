$(function() {
    //accordeon
    var contents = $('.accordeon-content');
    var titles = $('.accordeon-title');
    titles.on('click',function(){
      var title = $(this);
      contents.filter(':visible').slideUp(function(){
          $(this).prev('.accordeon-title').removeClass('is-opened');
      });  
      
      var content = title.next('.accordeon-content'); 
      
      if (!content.is(':visible')) {
        content.slideDown(function(){title.addClass('is-opened')});
      } 
    });
    //select-number form
    if(jQuery('.phone-mask').length) {
        jQuery(function($){
            $(".phone-mask").mask("+38(999) 999-9999");
        });
    }
        $("#button_submit").click(function (e){
            e.preventDefault();
            var numModal = $(this).attr('href');
            var modal =  $(numModal);
            modalWrap.removeClass('fadeOutUp');
            modalWrap.addClass('fadeInDown');
            modal.removeClass('disabled');
            modal.addClass('flex');
            $('body').addClass('body-modal-open');
            // body.addClass('body-modal');
        });
        
    //popup
    if(jQuery('.modal__wrap').length) {
        let modalWrap = $('.modal__wrap');
        
        //popup
        $(".modal-open").click(function (e){
            e.preventDefault();

          var btn = $(this);
            $($(this).parent().parent()).each(function () {
                var form = $(this);
                form.find('.rfield').addClass('empty_field');

                   // Функция проверки полей формы

                    form.find('.rfield').each(function(){
                    if($(this).val() != ''){
                        // Если поле не пустое удаляем класс-указание
                    $(this).removeClass('empty_field');

                    if (!form.find('.empty_field').length) {
                        var numModal = btn.attr('href');
                        var modal =  $(numModal);
                        modalWrap.removeClass('fadeOutUp');
                        modalWrap.addClass('fadeInDown');
                        modal.removeClass('disabled');
                        modal.addClass('flex');
                        $('body').addClass('body-modal-open');
                        // body.addClass('body-modal');
                        }
                    } else {
                        // Если поле пустое добавляем класс-указание
                    $(this).addClass('empty_field');
                    }
                    });

                


            })
        });
        
        $('.modal-close').click(function (){
            modalWrap.removeClass('fadeInDown');
            modalWrap.addClass('fadeOutUp');
            setTimeout(function() {
                $('.modal').addClass('disabled');
            }, 700);
            setTimeout(function() {
                $('.modal').removeClass('flex');
                $('body').removeClass('body-modal-open');
            }, 800);  
        
        });
        $('.modal').mouseup(function (e){ // событие клика по веб-документу
            var div = $(".modal__body"); // тут указываем ID элемента
            var close = $('.modal-close');
            if (close.is(e.target)) {
        
            } else if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
                var modalWrap = $('.modal__wrap');
                modalWrap.removeClass('fadeInDown');
                modalWrap.addClass('fadeOutUp');
                setTimeout(function() {
                    $('.modal').addClass('disabled');
                }, 700);
                setTimeout(function() {
                    $('.modal').removeClass('flex');
                    $('body').removeClass('body-modal-open');
                }, 800); 
            
            }
        });
    }
    if(jQuery('.scroll-to').length) {
        var $page = $('html, body');
        $('.scroll-to[href*="#"]').click(function() {
            $page.animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 400);
            return false;
        });
    }
    //click on form submit button - AMO
    $('.consult__btn').on('click', function(){
        $($(this).parent().parent()).each(function () {
            var form = $(this);
            form.find('.rfield').addClass('empty_field');

                // Функция проверки полей формы

                form.find('.rfield').each(function(){
                if($(this).val() != ''){
                    // Если поле не пустое удаляем класс-указание
                $(this).removeClass('empty_field');

                if (!form.find('.empty_field').length) {
                console.log('form');
                form = $('.consultForm');
                jQuery.ajax({
                    method: "POST",
                    data: form.serialize(),
                    // url: quizAjax.url,
                    url: '../sendamo.php',
                    dataType: "json",
                    success: function (json) {
                        // if (json.success) {
                            // jQuery(".wizard-section").fadeOut(100);
                            window.location.href = "/quiz-thanks/";
                        // }
                    }
                });
                fbq('track', 'Lead');
                }

                } else {}
                });
        })
    });
});



