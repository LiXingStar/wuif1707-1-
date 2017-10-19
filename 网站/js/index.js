//轮播图
$(function(){
  $('.lunbo').mousemove(function () {
        $('.lunbo>.zuo').show();
        $('.lunbo>.you').show();
    })
    $('.lunbo').mouseout(function(){
        $('.lunbo>.zuo').hide();
        $('.lunbo>.you').hide();
    })

    let li=$('.lunbo>ul>li');
    let zuo=$('.zuo');
    let you=$('.you');
    let w=li.width();
    // console.log(w);
    let num=0;
    let next=0;

    you.on('click',function () {
        $('li>.zi1').css({top:'250px',opacity:0})
        $('li>.zi2').css({top:'400px',opacity:0})
        clearInterval(t)
        next++
        if(next>=li.length){
            next=0
        }

        li.eq(next).css({left:w});
        li.eq(num).animate({left:-w+`px`});
        li.eq(next).animate({left:0},function () {
            $('li>.zi1').fadeIn('slow').animate({top:'+=30',opacity:1})
            $('li>.zi2').fadeIn('slow').animate({top:'-=30',opacity:1})
        })

        num=next
        // setTimeout(fn,5000)

            t=setInterval(fn,5000)

    })


    zuo.on('click',function () {
        $('li>.zi1').css({top:'250px',opacity:0})
        $('li>.zi2').css({top:'400px',opacity:0})
        clearInterval(t)
        next--
        if(next<0){
            next=li.length-1
        }
        li.eq(next).css({left:-w});
        li.eq(num).animate({left:w});
        li.eq(next).animate({left:0},function () {
            $('li>.zi1').fadeIn('slow').animate({top:'+=30',opacity:1})
            $('li>.zi2').fadeIn('slow').animate({top:'-=30',opacity:1})
        });
        num=next
        // setTimeout(fn,5000)

            t=setInterval(fn,5000)

    })


    let t=setInterval(fn,5000)
    function fn(){
        $('li>.zi1').css({top:'250px',opacity:0})
        $('li>.zi2').css({top:'400px',opacity:0})
        next++
        if(next>=li.length){
            next=0
        }

        li.eq(next).css({left:w});
        li.eq(num).animate({left:-w+`px`});
        li.eq(next).animate({left:0},function () {
            $('li>.zi1').fadeIn('slow').animate({top:'+=30',opacity:1})
            $('li>.zi2').fadeIn('slow').animate({top:'-=30',opacity:1})
        })
        num=next
    }

})
//科技
$(function () {
   let i=$('.litu>i')
    i.on('mouseover',function () {
        $(this).css({background:'#62a8ea',color:'#ffffff'})
    })
    i.on('mouseout',function () {
        $(this).css({background:'#eee',color:'#5e7387'})
    })
})
//侧栏
$(function () {
$('.gengduo').on('click',function () {
    $('.celan').toggleClass('yidong')
})
})

