$('.bt_top').click(function(){
                    $('html, body').animate({scrollTop:0},'fast');
                });

        $('.caption').mouseover(function() {
                          $(this).stop().animate({'opacity':0.5},500)}); 
        $('.caption').mouseout(function() {
                        $(this).stop().animate({'opacity':0},500)});

   $('#bt').click(function(){
      $('#mo-menu-box').css({'right': '0px'})
   });
   $('#btn1').click(function(){
      $('#mo-menu-box').css({'right':'-1000px'});
    });





// 스크롤 시 어떤 동작을 주려고 할 때 아래 구문이 반드시 포함되어야 한다.
window.onscroll = function() {myFunction()};

function myFunction() {

if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {

// 스크롤바를 500보다 더 크게 내린 경우 Top 버튼 보이기
document.getElementById("reservation").style.opacity = "1";
} 
// 스크롤바를 500보다 적게 올린 경우 즉, 스크롤바를 위로 올린 경우 Top 버튼 숨기기
else {
document.getElementById("reservation").style.opacity = "0";
};

if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {

// 스크롤바를 500보다 더 크게 내린 경우 Top 버튼 보이기
document.getElementById("bt_top").style.opacity = "1";
} 
// 스크롤바를 500보다 적게 올린 경우 즉, 스크롤바를 위로 올린 경우 Top 버튼 숨기기
else {
document.getElementById("bt_top").style.opacity = "0";
};
}

