var Kratka = (function () {
    function Kratka() {
    }
    Kratka.rysuj = function () {
        ctx.beginPath();
        for (var i = 20; i < 600; i = i + 20) {
            ctx.moveTo(10, i);
            ctx.lineTo(500, i);
        }
        ctx.strokeStyle = "pink";
        ctx.stroke();
    };
    return Kratka;
}());
