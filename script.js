console.log("init");

pc_index = {
    init: function(){
        this.second_nav_bar_show();
        this. nav_bar_line_animation();
        this. main_page_slideshow_animation();
    },

    second_nav_bar_show: function(){
        $('.header__menus>ul>li').click(function(){
            let target =$(this).children().eq(1);
            if(!target.hasClass('active')){
           target.addClass('active');
           //remove all other active class from siblings
           target.parent().siblings().children().eq(1).removeClass('active');
        }else
            target.removeClass('active');
           
        })
       
    },

    nav_bar_line_animation: function(){
     

    },
    main_page_slideshow_animation: function(){
        let slides = $('.main-page-slideshow>.con>*');

        slide_looping(slides);

      setInterval(function(){
         slide_looping(slides); 
        },16000);
         
    }
}

pc_index.init();


// main_page_slideshow_animation(sub-method)
function slide_looping(slides){
    for(let i = 0; i<slides.length; i++){
        setTimeout(function(){
            if(!$(slides.eq(i)).hasClass('active')){
                $(slides.eq(i)).addClass('active');
                console.log(`slide-${i}activated`);

            }
            $(slides.eq(i)).siblings().removeClass('active');
                // console.log(`slide-${i}removed`);
            
        },4000*i);
        
    }

}



//mobile index

mobile_index = {
init: function(){
    this.mobileTopbar_init();
    this.mobileSidebar_close();
},
mobileTopbar_init: function(){  // burger icon triggers side-bar
    $('.menu-expansion-burger').click(function(){
        console.log("clicked");
        $('.mobile-side-bar').addClass('active');
    });
},
mobileSidebar_close: function(){ // x btn + transparent grey screen
    $('.mobile-side-bar, .mobile-side-bar__btn-close').click(
        function(){
            console.log("sidebar closing triggered");
            $('.mobile-side-bar').removeClass('active');
        }
    );

    $('.mobile.side-bar__contents, .mobile-side-bar__btn-close').click(
        function(e){
            e.stopPropagation();
        });
        //.mobile.side-bar__contents-컨텐츠부분 클릭 시 클릭 이벤트가 부모클래스에까지 전파되어 창이 닫히는거 방지
        // .mobile-side-bar__btn-close- 버튼부분 클릭시 메뉴 외 부분까지 
        //연결되서 두번 클릭되는 문제 해결
}
};

mobile_index.init();