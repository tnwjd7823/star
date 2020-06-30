$(function(){

    

    $(".lazy").slick({
        dots: true,
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
      });


      $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2
      });



      $(".regular2").slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2
        
      });

      $(".language").click(function(){
       $(".sub_con").slideToggle();
      });

      

      $('.sitemap').click(function(){
 
         $('.site_full').fadeIn(1000);
    
      })
      $(".sitemap_close").click(function(){
        $(".site_full").fadeOut(1000);
       });

       $(".popup_open").click(function(){
        $(".popup").show();
       });

       $(".pop_close").click(function(){
        $(".popup").css('display','none');
       });

       $('.depth1 > li').mouseover(function(){
         $('.depth2 > li').stop().slideDown(500)
       });

       $('#nav').mouseleave(function(){
        $('.depth2 > li').stop().slideUp(500)
      });
/*
        $(".info").click(function(){
          $(".info > ul").slideToggle();
          });
        $(".search").click(function(){
            $(".search > ul").slideToggle();
            });*/

            var height =  $("#notice").height();
            var num = $(".rolling li").length;
            var max = height * num;
            var move = 0;
            function noticeRolling(){
              move += height;
              $(".rolling").animate({"top":-move},600,function(){
                if( move >= max ){
                  $(this).css("top",0);
                  move = 0;
                };
              });
            };
            noticeRollingOff = setInterval(noticeRolling,5000);
            $(".rolling").append($(".rolling li").first().clone());
          
            $(".rolling_stop").click(function(){
              clearInterval(noticeRollingOff);
            });
            $(".rolling_start").click(function(){
              noticeRollingOff = setInterval(noticeRolling,1000);
            });


            var height =  $("#notice2").height();
            var num = $(".rolling li").length;
            var max = height * num;
            var move = 0;
            function noticeRolling(){
              move += height;
              $(".rolling").animate({"top":-move},600,function(){
                if( move >= max ){
                  $(this).css("top",0);
                  move = 0;
                };
              });
            };
            noticeRollingOff = setInterval(noticeRolling,1000);
            $(".rolling").append($(".rolling li").first().clone());
          
            $(".rolling_stop").click(function(){
              clearInterval(noticeRollingOff);
            });
            $(".rolling_start").click(function(){
              noticeRollingOff = setInterval(noticeRolling,1000);
            });

           
           
  

})