var RysujParabole = (function () {
    // KONSTRUKTOR
    function RysujParabole(miejsceZerowe01, miejsceZerowe02, wierzcholekX, wierzcholekY, miejsceZerowe00) {
        this.miejsceZerowe01 = miejsceZerowe01;
        this.miejsceZerowe02 = miejsceZerowe02;
        this.wierzcholekX = wierzcholekX;
        this.wierzcholekY = wierzcholekY;
        this.miejsceZerowe00 = miejsceZerowe00;
    }
    // METODY
    RysujParabole.prototype.adodatnieparabola2miejsca = function () {
        var a = (400 + (this.miejsceZerowe01 * 20));
        var b = (400 + (this.wierzcholekX * 20));
        var c = (300 - (this.wierzcholekY * 20));
        var d = (400 + (this.miejsceZerowe02 * 20));
        var e = (400 + ((this.miejsceZerowe01 - 2) * 20));
        var f = (400 + ((this.miejsceZerowe02 + 2) * 20));
        ctx.closePath();
        ctx.beginPath();
        ctx.moveTo(e, 10);
        ctx.lineTo(a, 300);
        ctx.lineTo(b, c);
        ctx.lineTo(d, 300);
        ctx.lineTo(f, 10);
        ctx.strokeStyle = "red";
        ctx.stroke();
        ctx.closePath();
        console.log("e " + e);
        console.log("f " + f);
    };
    RysujParabole.prototype.adodatnieparabola1miejsce = function () {
        ctx.beginPath();
        var e = (400 + ((this.miejsceZerowe00 - 2) * 20));
        ctx.moveTo(e, 10);
        var a = (400 + (this.miejsceZerowe00 * 20));
        ctx.lineTo(a, 300);
        var f = (400 + ((this.miejsceZerowe00 + 2) * 20));
        ctx.lineTo(f, 10);
        ctx.strokeStyle = "red";
        ctx.stroke();
    };
    RysujParabole.prototype.adodatnieparabola0miejs = function () {
        ctx.beginPath();
        var a = (400 + (this.wierzcholekX * 20));
        var b = (300 - (this.wierzcholekY * 20));
        var c = (400 + ((this.wierzcholekX + 2) * 20));
        var e = (400 + ((this.wierzcholekX - 2) * 20));
        ctx.moveTo(e, 10);
        // ctx.lineTo(a, b);
        ctx.bezierCurveTo(e, b, (a - 10), b, a, b);
        // ctx.lineTo(c, 10);
        ctx.bezierCurveTo(c, b, c, 10, c, 10);
        ctx.strokeStyle = "red";
        ctx.stroke();
    };
    RysujParabole.prototype.aujemneparabola0miejs = function () {
        ctx.beginPath();
        var a = (400 + (this.wierzcholekX * 20));
        var b = (300 - (this.wierzcholekY * 20));
        var c = (400 + ((this.wierzcholekX + 2) * 20));
        var e = (400 + ((this.wierzcholekX - 2) * 20));
        ctx.moveTo(e, 590);
        // ctx.bezierCurveTo(e, b, (a - 10), b, a, b);
        ctx.lineTo(a, b);
        ctx.lineTo(c, 590);
        // ctx.bezierCurveTo(b, c, c, c, c, 590);
        ctx.strokeStyle = "blue";
        ctx.stroke();
    };
    RysujParabole.prototype.aujemneparabola1miejse = function () {
        ctx.beginPath();
        var a = (400 + (this.wierzcholekX * 20));
        var b = (300 - (this.wierzcholekY * 20));
        var c = (400 + ((this.wierzcholekX + 2) * 20));
        var e = (400 + ((this.wierzcholekX - 2) * 20));
        ctx.moveTo(e, 590);
        ctx.lineTo(a, b);
        ctx.lineTo(c, 590);
        ctx.strokeStyle = "blue";
        ctx.stroke();
    };
    RysujParabole.prototype.aujemneparabola2miejsca = function () {
        var a = (400 + (this.miejsceZerowe01 * 20));
        var b = (400 + (this.wierzcholekX * 20));
        var c = (300 - (this.wierzcholekY * 20));
        var d = (400 + (this.miejsceZerowe02 * 20));
        var e = (400 + ((this.miejsceZerowe01 + 2) * 20));
        var f = (400 - ((-this.miejsceZerowe02 + 2) * 20));
        console.log("a= " + a);
        console.log("b= " + b);
        console.log("c= " + c);
        console.log("d= " + d);
        console.log("e= " + e);
        console.log("f= " + f);
        ctx.beginPath();
        ctx.moveTo(f, 590);
        ctx.lineTo(d, 300);
        ctx.lineTo(b, c);
        ctx.lineTo(a, 300);
        ctx.lineTo(e, 590);
        ctx.strokeStyle = "blue";
        ctx.stroke();
    };
    return RysujParabole;
}());
