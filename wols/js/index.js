$(function(){
	
	//banner中轮播图
	var n=0;
	var timer;
	
	change();
	function change(){
		$('.img li').attr('class','');
		$('.img li').eq(n).attr('class','active');
		
		$('.img .img-auto').stop().animate({left:-540*n},500);
	}
	
	//鼠标移入选项时调换到对应的图片
	$('.img li').mouseover(function(){
		clearInterval(timer);
		n=$(this).index();
		change();
	})
	
	$('#banner .img').mouseover(function(){
		clearInterval(timer);
	})
	
	$('#banner .img').mouseout(function(){
		autoPlay();
	})
	
	autoPlay();
	function autoPlay(){
		timer=setInterval(function(){
			n++;
			if(n>$('#banner .img li').length-1){
				n=0
			}
			change();
		},2000)
	}
	
	
	//banner右侧选项卡
	$('.banner-nav li').mouseover(function(){
		$('.banner-nav li').attr('class','');
		$(this).attr('class','active');
		
		$('.lists ul').css('display','none');
		$('.lists ul').eq($(this).index()).css('display','block');
	})
	
	//panel下的left中的选项卡
	$('.server-list ul li').mouseover(function(){
		$('.server-list ul li').attr('class','');
		$(this).attr('class','active');
		
		$('.server-list ol').css('display','none');
		$('.server-list ol').eq($(this).index()).css('display','block');
	})
	
	//游戏攻略中选项卡
	$('.strategy ol li').mouseover(function(){
		$('.strategy ol li').attr('class','');
		$(this).attr('class','active');
		
		$('.strategy ul').css('display','none');
		$('.strategy ul').eq($(this).index()).css('display','block');
	})
	
	//玩家专区选项卡
	$('.game-player ol li').mouseover(function(){
		$('.game-player ol li').attr('class','');
		$(this).attr('class','active');
		
		$('.game-player ul').css('display','none');
		$('.game-player ul').eq($(this).index()).css('display','block');
	})
	
})
