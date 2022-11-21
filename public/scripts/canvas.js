const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "rgb(225, 225, 225, 0.7)";
ctx.fillRect(0, 0, canvas.width, canvas.height);
/*ctx.beginPath();
ctx.moveTo(0, 0);*/

let pre = {
	x: 0,
	y: 0
}

document.querySelector("canvas").addEventListener("mousemove", (e) => {
	console.log(e);

	ctx.beginPath();
	ctx.moveTo(pre.x, pre.y);
	ctx.lineTo(e.clientX, e.clientY);
	/*ctx.fillStyle = "lightblue";*/
	ctx.strokeStyle = "black";
	ctx.lineWidth = 2;
	ctx.stroke();

	pre.x = e.clientX;
	pre.y = e.clientY;
});
