/*图片列表关闭按钮*/
$("#imgList .title img.close").click(function(){
  $("#imgList").fadeOut(1500);
});
/*点击弹出图片列表*/
$("#button #butCon .album").click(function(){
  $("#imgList").show();
});
/*点击图片列表小图，展示大图效果*/
var _index=0;
var simg=null;
var bimg=null;
var autoTime=null;
var mark=1;
$("#imgList ul li").click(function(){
  _index=$(this).index();
  //alert(_index);
  simg=$(this).find("img").attr("src");
  bimg=simg.replace("s_","");
  $("#showImg").find("img").attr("src",bimg).css("opacity",0).animate({"opacity":1},1000);
  $("#imgList").hide();
});
/*点击图片左切换按钮*/
$("#button #butCon .back_dull").click(function(){
  clearInterval(autoTime);
  mark=1;
  playandpause();
  _index--;
  if(_index<0)
	{
	  _index=8;
      simg=$("#imgList ul li").eq(_index).find("img").attr("src");
      bimg=simg.replace("s_","");
      $("#showImg").find("img").attr("src",bimg).css("opacity",0).animate({"opacity":1},1000);
      $("#imgList").fadeOut();
	}
  else{
      simg=$("#imgList ul li").eq(_index).find("img").attr("src");
      bimg=simg.replace("s_","");
      $("#showImg").find("img").attr("src",bimg).css("opacity",0).animate({"opacity":1},1000);
      $("#imgList").fadeOut();
  }
});
/*点击图片右切换按钮*/
$("#button #butCon .forward_dull").click(function(){
  clearInterval(autoTime);
  mark=1;
  playandpause();
  _index++;
  if(_index>8)
	{
	  _index=0;
      simg=$("#imgList ul li").eq(_index).find("img").attr("src");
      bimg=simg.replace("s_","");
      $("#showImg").find("img").attr("src",bimg).css("opacity",0).animate({"opacity":1},1000);
      $("#imgList").fadeOut();
	}
  else{
      simg=$("#imgList ul li").eq(_index).find("img").attr("src");
      bimg=simg.replace("s_","");
      $("#showImg").find("img").attr("src",bimg).css("opacity",0).animate({"opacity":1},1000);
      $("#imgList").fadeOut();
  }
});
/*自动播放*/
function autoPlay()
{
  autoTime=setInterval(function(){
    _index++;
  if(_index>8)
	{
	  _index=0;
      simg=$("#imgList ul li").eq(_index).find("img").attr("src");
      bimg=simg.replace("s_","");
      $("#showImg").find("img").attr("src",bimg).css("opacity",0).animate({"opacity":1},1000);
     
	}
  else{
      simg=$("#imgList ul li").eq(_index).find("img").attr("src");
      bimg=simg.replace("s_","");
      $("#showImg").find("img").attr("src",bimg).css("opacity",0).animate({"opacity":1},1000);
      
  }
   },5000);
 }
autoPlay();
/*点击图片播放暂停按钮*/
function playandpause()
{
   if(mark==1)
	  {
		clearInterval(autoTime);
        $("#button #butCon .play_dull").attr("src","images/pause_dull.png");
	    mark=2;
	  }else{
	    autoPlay();
		$("#button #butCon .play_dull").attr("src","images/play_dull.png");
	    mark=1;
	  }
}
  $("#button #butCon .play_dull").click(function(){
     playandpause();
   });



$(".left-nav ul li").hover(function(){
    $(this).find(".circle").stop(true,true).animate({transform:"rorate(360deg)",left:"200px","opacity":0},1000);
	$(this).find(".forshow").stop(true,true).animate({"opacity":1},1000);
},function(){
    $(this).find(".circle").stop(true,true).animate({transform:"rorate(-360deg)",left:"0px","opacity":1},1000);
	$(this).find(".forshow").stop(true,true).animate({"opacity":0},1000);
});