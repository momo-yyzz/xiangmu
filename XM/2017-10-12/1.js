/* add by chen-s-y */
var box = document.getElementById('box');
box.addEventListener('mousedown',down);
function down(ev){
	var disX = ev.clientX - this.offsetLeft;
	var disY = ev.clientY - this.offsetTop;
	document.addEventListener('mousemove',move);
	document.addEventListener('mouseup',up);
	function up(){
		document.removeEventListener('mousemove',move);
		document.removeEventListener('mouseup',up);
	}
	function move(ev){
		box.style.left = ev.clientX - disX + 'px'; 
		box.style.top = ev.clientY - disY + 'px';
	}
}