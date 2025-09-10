
$(function(){
        // 슬라이드 업/다운 => 펼침 메뉴에서 많이 사용하는 기법
            $("nav, .sub").mouseenter(function(){
                $(".sub").stop().slideDown();
            });
            $(".sub").mouseleave(function(){
                $(".sub").stop().slideUp();    
            }); 

// 모바일 메뉴 등장========================
   $('.tbmo-menu').click(function(){
      $('#mo-menu-box').toggleClass('show');
      $('.accordion-list span').removeClass('rotate')
      $('.accordion-name>a').removeClass('back-li')
      $('.accordion-name>ul').stop().slideUp().removeClass('back-ul');
     
      
   });

   $('.exit').click(function(){
    $('#mo-menu-box').toggleClass('show');

   });

// 모바일 서브메뉴 보이기 감추기 아코디언     
   $('.accordion-name').click(function(){
// 해당 메인메뉴 클릭시 자식과 형제들 스타일 처리하는 스크립트     
      $(this).siblings('li').children('a').removeClass('back-li');
      $(this).siblings('li').children('ul').removeClass('back-ul').hide();
      $(this).children('ul').stop().slideToggle();
      $(this).children('a').children('span').toggleClass('rotate');

// 메인메뉴 글자색 배경색 토글기능만 담당하는 스크립트 
      $(this).children('a').toggleClass('back-li')
      $(this).children('ul').toggleClass('back-ul');
      

     
    

    });


})  ;  

