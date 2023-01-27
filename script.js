console.log("init");

index = {
    init: function(){
        this.second_nav_bar_show();
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
        

    }
}

index.init();