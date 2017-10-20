window.onload=function(){
	let head = document.querySelector('.head');
	let flag = true;
	let dingbu = document.querySelector('.dingbu')
	window.onscroll = function(){
		let top = document.body.scrollTop;
		if (top>=150) {
			head.style.background= '#335DC7';
			dingbu.style.display = 'block';
			$('.head ul li').css({background:'rgb(51, 93, 199)'})
		}
		if(top<150){
			head.style.background= 'none';
			dingbu.style.display = 'none';
			$('.head ul li').css({background:'rgba(51, 93, 199,0)'})
		}
	}
	let floor = $('.floor');
	let floorArr = [];
	let xia = $('div.xia')
	let body = $('body')
	let index ;
	floor.each(function(){
		floorArr.push(this.offsetTop)
	})
	xia.on('click',function(){
		index = $(this).index('.xia')
		body.animate({scrollTop:`${floorArr[index]}`});
	})
	$('.more').on('mouseenter',function(){
		$(this).css({background:'#335DC7',border:'1px solid #335DC7'})
	})
	$('.more').on('mouseleave',function(){
		$(this).css({background:'none',border:'1px solid #fff'})
	})
	$('.xinwen>ul>li').on('mouseenter',function(){
		$('.gengduo>a',this).css({background:'#335DC7',color:'#fff'})
	})
	$('.xinwen>ul>li').on('mouseleave',function(){
		$('.gengduo>a',this).css({background:'none',color:'#325cc7'})
	})


	$(".gsul>li>a>div").each(function(){  
        $(this).append("<div class='slidiv'></div>");  
    });  
	$('.head ul li').eq(1).on('mouseenter mouseleave',function(){
		$('.item',this).stop();
		$('.item',this).slideToggle();
	})
    $(".gsul>li>a>div").bind("mouseenter mouseleave",  function(e) {  
       var w = $(this).width();   
       var h = $(this).height();  
       var x = (e.offsetX  - (w / 2)) * (w > h ? (h / w) : 1);  
       var y = (e.offsetY  - (h / 2)) * (h > w ? (w / h) : 1);  
       var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;  
       this_slidiv = $(this).find('.slidiv');  
       if(e.type == 'mouseenter'){  
            switch(direction){  
                case 0 :  
                    this_slidiv.css({top:-h,left:"0px"});  
                        break;  
                case 1:  
                    this_slidiv.css({top:"0px",left:w});  
                        break;  
                case 2:  
                    this_slidiv.css({top:h,left:"0px"});  
                        break;  
                case 3:  
                    this_slidiv.css({top:"0px",left:-w});  
                        break;  
            }  
          
                this_slidiv.stop(true,true).animate({"top":"0px","left":"0px"},"fast");  
                  
       }else if(e.type == 'mouseleave'){  
            switch(direction){  
                case 0 :  
                    this_slidiv.stop(true,true).animate({"top":-h},"fast");  
                        break;  
                case 1:  
                    this_slidiv.stop(true,true).animate({"left":w},"fast");  
                        break;  
                case 2:  
                    this_slidiv.stop(true,true).animate({"top":h},"fast");  
                        break;  
                case 3:  
                    this_slidiv.stop(true,true).animate({"left":-w},"fast");  
                        break;  
            }         
       }  
  
  
    });  
}