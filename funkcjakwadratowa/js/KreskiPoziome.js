var KreskiPoziome = (function () {
    function KreskiPoziome() {
    }
    KreskiPoziome.rysuj = function () {
        for (var i = 20; i < 600; i = i + 20) {
            ctx.moveTo(395, i);
            ctx.lineTo(405, i);
            ctx.strokeStyle = "blue";
            ctx.stroke();
            ctx.fill();
        }
    };
    return KreskiPoziome;
}());
