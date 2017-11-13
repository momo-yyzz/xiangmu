$(".header .login1 a.hover").click(function(){
     $(".admin").show();
	 $(".gray").show();
});
$(".admin .admin_top .close").click(function(){
     $(".admin").fadeOut(2000);
	 $(".gray").fadeOut(2000);
});