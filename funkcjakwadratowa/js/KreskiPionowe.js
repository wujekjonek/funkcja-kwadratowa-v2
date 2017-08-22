var KreskiPionowe = (function () {
    function KreskiPionowe() {
    }
    KreskiPionowe.rysuj = function () {
        for (var i = 20; i < 800; i = i + 20) {
            ctx.restore();
            ctx.strokeStyle = "blue";
            ctx.moveTo(i, 295);
            ctx.lineTo(i, 305);
            ctx.stroke();
        }
    };
    return KreskiPionowe;
}());
