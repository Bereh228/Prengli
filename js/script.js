function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });


$(document).ready(function(){
    
    $('.promo__hamburger').click(function(){
        $(this).toggleClass('promo__hamburger_active');
        $('.promo__header').toggleClass('promo__header_active');

        setTimeout(function() {
            document.getElementById('hideBlock').style.display = 'flex';
         }, 600);

         $(document).on('click', function(e) {
            if (!$(e.target).closest(".promo").length) {
              $('.promo__header_active').hide();
              $('.promo__header').removeClass('promo__header_active');
              $('.promo__hamburger').removeClass('promo__hamburger_active');
            }
            e.stopPropagation();
          });
         
    });

    $(window).scroll(function(){
      if($(this).scrollTop()> 1600){
        $('.toUP').fadeIn();
      }else{
        $('.toUP').fadeOut();
      }
    });
    
    $('.button__form').on('click',function(){
      $('.overlay').removeClass('overlay_active');
      
    })

    $('.button__connection').on('click',function(){
      $('.overlay, .modal__access').fadeIn();
    })

    $('.modal__exit').on('click',function(){
      $('.overlay').removeClass('overlay_active');
      $('.overlay').fadeOut();
    })

    $('.button__promo').on('click',function(){
      $('.overlay, .modal__access').fadeIn();
    })

    

});
