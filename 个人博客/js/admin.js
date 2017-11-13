var _index = 0;
$(".adm-header a.hehe").click(function(){
     _index = $(this).index();
	// alert(_index);
	 $(this).removeClass("change").add("change1").siblings().removeClass("change1").addClass("change");
	 $(".adm-main .adm-method .adm-left .sub_2").eq(_index).fadeIn().siblings().hide();
	 $(this).children(".line").show();
	 $(this).siblings().children(".line").hide();

});
