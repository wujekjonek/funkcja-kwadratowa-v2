var Osie = (function () {
    function Osie() {
    }
    Osie.rysuj = function () {
        ctx.beginPath();
        ctx.moveTo(10, 300);
        ctx.lineTo(790, 300);
        //    ctx.closePath();
        //  ctx.beginPath();
        ctx.moveTo(400, 10);
        ctx.lineTo(400, 590);
        //    ctx.closePath();
        //  ctx.beginPath();
        ctx.moveTo(395, 20);
        ctx.lineTo(400, 10);
        ctx.lineTo(405, 20);
        //    ctx.closePath();
        //   ctx.beginPath();
        ctx.moveTo(780, 295);
        ctx.lineTo(790, 300);
        ctx.lineTo(780, 305);
        ctx.closePath();
        ctx.strokeStyle = "green";
        ctx.fillStyle = "green";
        ctx.stroke();
        //   ctx.fill();
        ctx.font = "15px Arial";
        ctx.fillText("oś Y", 410, 30);
        ctx.fillText("oś X", 750, 320);
        ctx.fillStyle = "black";
        ctx.fill();
    };
    return Osie;
}());
