$(function(){
    $(".page-container").fadeTo('fast',1,function(){
        $("#disqus_thread").show();
    });

    if($(".page-container").height()<$(window).height()){
        $(".page-container").css('min-height',$(window).height());
    }
    $(window).on('resize',function(){
        if($(".page-container").height()<$(window).height()){
            $(".page-container").css('min-height',$(window).height());
        }
    });

    sortstuff("ul.tags_list li");
    sortstuff("section.tag_posts","id");

    $("ul.tags_list a").on('click',function(e){
        e.preventDefault();
        var hash = $(this).attr('href');
            hash = hash.split('#');
            hash = '#'+hash[1];
        $('html,body').animate({scrollTop:($(hash).offset().top)},0);
    });
});


function sortstuff(selector,attribute){
    var $selector = $(selector);
    var matches = [];
    var attrs = [];
    $selector.each(function(){
        matches.push($(this).html());
        if(attribute){
            attrs.push($(this).attr(attribute));
        }
    });

    matches.sort();
    if(attribute){
        attrs.sort();
    }

    $selector.each(function(i){
        $(this).html(matches[i]);
        if(attribute){
            $(this).removeAttr(attribute).attr(attribute,attrs[i]);
        }
    });
}