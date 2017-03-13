$(function(){
	
	//导航多级菜单显示
	$('#public-header ul li').each(function(i,elem){
		if(i<4){
			$(elem).mouseover(function(){
				$('#second-lists .second-lists').eq($(elem).index()).css('display','block')
				
				if($('#second-lists .second-lists').eq($(elem).index()).css('display')=='block'){
					$('#second-lists .second-lists').eq($(elem).index()).mouseover(function(){
						$('#second-lists .second-lists').eq($(elem).index()).css('display','block')
					})
					$('#second-lists .second-lists').eq($(elem).index()).mouseout(function(){
						$('#second-lists .second-lists').eq($(elem).index()).css('display','none')
					})
				}
			})
			
			$(elem).mouseout(function(){
				$('#second-lists .second-lists').eq($(elem).index()).css('display','none')
			})
		}else{
			return;
		}
	})
	
	
	//panel部分动画
	
		//#panel .section1 .left
	$('#panel .section1 .left').mouseover(function(){
		$('#panel .section1 .left img').stop().animate({left:-10},300,'linear')
		$('#panel .section1 .left .filter').css('display','block')
		$('#panel .section1 .left h3').stop().animate({bottom:72},300,'linear')
	})
	
	$('#panel .section1 .left').mouseout(function(){
		$('#panel .section1 .left img').stop().animate({left:0},300,'linear')
		$('#panel .section1 .left .filter').css('display','none')
		$('#panel .section1 .left h3').stop().animate({bottom:50},300,'linear')
	})
	
		
	//#panel 剩下所有小图动画
	$('#panel .move').each(function(i,elem){
		$(elem).mouseover(function(){
			$(elem).find('img').stop().animate({left:-5},300,'linear')
			$(elem).find('.filter').css('display','block')
			$(elem).find('.text').stop().animate({top:190},300,'linear')
			$(elem).find('p').css('display','block')
		})
		
		$(elem).mouseout(function(){
			$(elem).find('img').stop().animate({left:0},300,'linear')
			$(elem).find('.filter').css('display','none')
			$(elem).find('.text').stop().animate({top:210},300,'linear')
			$(elem).find('p').css('display','none')
		})
	})
})
