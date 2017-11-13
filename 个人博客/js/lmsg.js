 var _index=0;
		var time="";
		$(".pic ul li").eq(0).fadeIn(100).siblings().fadeOut(100);
		$(".pic ul li").eq(0).find(".img1").animate({"left":"0px"},1000,function(){
		$(".pic ul li").eq(0).find(".img2").css("display","block").animate({"left":"0px"},1000);
		});
		function com(){
			$(".pic ul li").eq(_index).fadeIn(100).siblings().fadeOut(100);
			$(".pic ul li").eq(_index).find(".img1").animate({"left":"0px"},1000,function(){
				$(".pic ul li").eq(_index).find(".img2").css("display","block").animate({"left":"0px"},1000);
				$(".pic ul li").eq(_index).siblings().find(".img1").css("left","-760px");
				$(".pic ul li").eq(_index).siblings().find(".img2").css({"left":"-20px","display":"none"});
			});	
		}
		$(".nav ul li").click(function(){
			$(this).removeClass("select");
			$(this).addClass("select").siblings().removeClass("select");
			_index=$(this).index();
			com();
			clearInterval(time);
			auto();
 
		});
		function auto(){
		    time=setInterval(function(){
			_index++;
			if(_index>4)
				_index=0;
            $(".nav ul li").eq(_index).addClass("select").siblings().removeClass("select");
			com();
			},5000);
		}
		auto();




	$(".lmsg .lmsg-main .lmsg-main-con .leave-msg .but").click(function(){
		$(".lmsg .lmsg-main .lmsg-main-con .leave-msg .reply").slideToggle(1000);
	
	});