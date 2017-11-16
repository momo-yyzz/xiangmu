//第一步定义一个tabs
$.fn.extend({
    tabs:function(opt){
        var t = new tab(this);
        t.init(opt);
    }
})

//第二步，创建一个类
function tab(ppp){
	this.ppp = ppp;
	this.opts = {
		btns:['语文','数学','外语','政治'],
		contents:['<<骆驼祥子>>','1+1=2','hallow','公平法制和谐友爱']
	}
}

//三方法
$.extend(tab.prototype,{
	init:function(opt){
		$.extend(this.opts,opt);
		//按钮切换函数
		this.createBtns();
		//内容切换函数
		this.createDivs();
		//事件函数(点击  解绑  清除样式)
		this.changeBtn();
	},
	createBtns:function(){
        this.opts.btns.forEach((e,i)=>{
            this.ppp.append($(`<button class="${i==0?'active':''}">${e}</button>`));
        });
    },
    createDivs:function(){
        this.opts.contents.forEach((e,i)=>{
            this.ppp.append($(`<div class="${i==0?'show':''}">${e}</div>`));
        });
    },
    changeBtn:function(){
        var btn = this.ppp.find('button');
        var div = this.ppp.find('div');
        btn.on('click',function(){
            $(this).addClass('active').siblings('button').removeClass('active');
           div.eq($(this).index('button')).addClass('show').siblings('div').removeClass('show');
        });
    }
})




