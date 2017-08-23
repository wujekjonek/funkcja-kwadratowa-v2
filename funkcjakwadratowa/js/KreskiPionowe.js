var KreskiPionowe = (function () {
    function KreskiPionowe() {
    }
    KreskiPionowe.rysuj = function () {
        ctx.beginPath();
        for (var i = 20; i < 800; i = i + 20) {
            ctx.moveTo(i, 295);
            ctx.lineTo(i, 305);
        }
        ctx.strokeStyle = "blue";
        ctx.stroke();
    };
    return KreskiPionowe;
}());
