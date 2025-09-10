$(function(){
	
	/* 디바이스 사이즈 체크 */
	$devWidth=$("body").width();

/*현재 기기가 테블릿/폰의 경우에 적용시킬 스크립트를 아래에 기술 */
	if($devWidth < 992 ) {    
   /* 제이쿼리 함수 기술  */ 
          $(window).scroll(function(){
            if ($(this).scrollTop()>40){
              $('header').css({'backgroundColor':'#205781'});
              $('.logo a').css({'color':'#fff'});
            }

            else {
              $('header').css({'backgroundColor':''});
              $('.logo a').css({'color':'#205781'});
            }});
    };

  $(".headerbox>nav, .sub").mouseenter(function(){
                $(".sub").stop().slideDown();
                $(".sub").css('borderRadius','0 0 30px 30px');
                $(".headerbox>nav").css('borderRadius','30px 30px 0 0');
            });
            
            $(".sub").mouseleave(function(){
                $(".sub").stop().hide();   
                $(".sub").css('borderRadius','30px');
                $(".headerbox>nav").css('borderRadius','30px'); 
            });

  
// 모바일 메뉴 등장========================
   $('#tbmo-menu').click(function(){
      $('header a').toggleClass('mo_change');
      $('#mo-menu-box').toggleClass('show');
      $('header .logo span').toggleClass('show_txt');
       $('.accordion-list span').removeClass('rotate')
       
      $('.accordion-name>a').removeClass('back-li')
      $('.accordion-name>ul').stop().slideUp().removeClass('back-ul');
     
      
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




});