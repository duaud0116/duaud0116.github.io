$(function(){

$(".maininfo-menu").click(function(){
     
        $(this).css('background-color','#252451')
        $(".maininfo-menu").css('color','#fff')
        $(".trailer-menu").css('background-color','#d9d9d9')
        $(".review-menu").css('background-color','#d9d9d9')
        $(".trailer-menu").css('color','#000')
        $(".review-menu").css('color','#000')
    });

    $(".trailer-menu").click(function(){
        
        $(this).css('background-color','#252451')
        $(".trailer-menu").css('color','#fff')
        $(".maininfo-menu").css('background-color','#d9d9d9')
        $(".review-menu").css('background-color','#d9d9d9')
        $(".maininfo-menu").css('color','#000')
        $(".review-menu").css('color','#000')



    });

    $(".review-menu").click(function(){
        $(this).css('background-color','#252451')
        $(".review-menu").css('color','#fff')
        $(".maininfo-menu").css('background-color','#d9d9d9')
        $(".trailer-menu").css('background-color','#d9d9d9')
        $(".maininfo-menu").css('color','#000')
        $(".trailer-menu").css('color','#000')


    });




$devWidth=$("body").width();

if($devWidth > 991 ) {    
        /* 제이쿼리 함수 기술  */     
$(".maininfo-menu").click(function(){       
        $(".trailer").hide();
        $(".info").show();
    });
$(".trailer-menu").click(function(){
        $(".info").hide();
        $(".trailer").css('display','flex');
});


}

// 테블릿/폰   
else{
    $(".maininfo-menu").click(function(){       
            $(".trailer").hide();
            $(".info, .maininfo ").show();
        });
    $(".trailer-menu").click(function(){
            $(".info,  .maininfo").hide();
            $(".trailer").css('display','flex');
    });

}    


})  ;