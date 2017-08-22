ctx.strokeStyle = "green";
ctx.strokeRect(100, 100, 50, 50);
ctx.fillStyle = "blue";
ctx.fillRect(50, 50, 50, 50);
ctx.fillStyle = "red";
ctx.fillRect(150, 150, 50, 50);
ctx.restore();
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(375, 75, 10, 0, Math.PI * 2, true);
ctx.closePath();




