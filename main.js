let tip=document.getElementById("tip");

tip.addEventListener("input", getTip);
function getTip(){
	let bill=parseInt(document.getElementById("bill").value)
	let tips=parseInt(document.getElementById("tip").value);
	
	let tipsAmount=tips*bill/100;
	document.getElementById("tipsAmount").value=tipsAmount;
	let totalAmount=bill+tipsAmount;
document.getElementById("totalAmount").value=`${totalAmount}`;
}