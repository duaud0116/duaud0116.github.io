$(function(){
        // 슬라이드 업/다운 => 펼침 메뉴에서 많이 사용하는 기법
            $(".menu>li, .sub-menu-box").mouseenter(function(){
                $(".sub-menu-box").stop().slideDown();
            });
            $(".sub-menu-box").mouseleave(function(){
                $(".sub-menu-box").stop().slideUp();    
            }); 
})  ;  