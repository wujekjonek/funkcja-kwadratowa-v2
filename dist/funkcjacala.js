var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('../../routes/index');
var users = require('../../routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

var Delta = (function () {
    // KONSTRUKTOR
    function Delta(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    // METODY
    Delta.prototype.obliczDelte = function () {
        var delta = (Math.pow(this.b, 2)) - (4 * this.a * this.c);
        console.log("delta z klasy: " + delta);
        return delta;
    };
    return Delta;
}());

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

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
// ***********************************************************
//    delta > 0
// let a = 1;   //ok klasa
// let b = 2;
// let c = -3;
//
// let a = -2;
// let b = 6;
// let c = -6;
// ***********************************************************
// ***********************************************************
//    delta zero
// let a = 3;   //ok klasa
// let b = 6;
// let c = 3;
// ***********************************************************
// ***********************************************************
//    delta < 0
// let a = 3;     //ok klasa
// let b = 7;
// let c = 9;
// let a = -1;         //ok klasa
// let b = 2;
// let c = -3;
// ***********************************************************
var a; //ok klasa
var b;
var c;
var delta01;
var delta;
// KreskiPoziome.rysuj();
// KreskiPionowe.rysuj();
Osie.rysuj();
function glowna() {
    ctx.clearRect(0, 0, 800, 600);
    Osie.rysuj();
    // KreskiPoziome.rysuj();
    // KreskiPionowe.rysuj();
    a = document.getElementById("okienkoa").value;
    b = document.getElementById("okienkob").value;
    c = document.getElementById("okienkoc").value;
    delta01 = new Delta(a, b, c);
    delta = delta01.obliczDelte();
    console.log("a:  " + a);
    console.log("b:  " + b);
    console.log("c:  " + c);
    if (a > 0) {
        // ***********************************************************
        if (delta == 0) {
            console.log("a > 0");
            console.log("if delta = 0");
            var miejscezerowe01 = new MiejsceZerowe(a, b, c, delta);
            var miejsceZerowe00 = miejscezerowe01.obliczMiejsceZerowe00();
            var punkt001 = new Punkt(miejsceZerowe00, 0, miejsceZerowe00);
            punkt001.rysujpunkt();
            var parabola = new RysujParabole(0, 0, 0, 0, miejsceZerowe00);
            parabola.adodatnieparabola1miejsce();
        }
        else if (delta > 0) {
            console.log("a > 0");
            console.log("if delta > 0");
            var wierzcholek01 = new Wierzcholek(a, b, c, delta);
            var wierzcholekX = wierzcholek01.obliczWierzcholekX();
            var wierzcholek02 = new Wierzcholek(a, b, c, delta);
            var wierzcholekY = wierzcholek02.obliczWierzcholekY();
            var miejscezerowe01 = new MiejsceZerowe(a, b, c, delta);
            var miejsceZerowe01 = miejscezerowe01.obliczMiejsceZerowe01();
            var miejscezerowe02 = new MiejsceZerowe(a, b, c, delta);
            var miejsceZerowe02 = miejscezerowe02.obliczMiejsceZerowe02();
            // poczytac toString       wierzcholekX.toString());
            var punkt001 = new Punkt(wierzcholekX, wierzcholekY, (Math.round(wierzcholekX * 100) / 100));
            punkt001.rysujpunkt();
            // let punkt002 = new Punkt(miejsceZerowe01, 0, miejsceZerowe01.toString());
            var punkt002 = new Punkt(miejsceZerowe01, 0, (Math.round(miejsceZerowe01 * 100) / 100));
            punkt002.rysujpunkt();
            //     let punkt003 = new Punkt(miejsceZerowe02, 0,  Math.round(miejsceZerowe02, -5));
            var punkt003 = new Punkt(miejsceZerowe02, 0, (Math.round(miejsceZerowe02 * 100) / 100));
            punkt003.rysujpunkt();
            var parabola = new RysujParabole(miejsceZerowe01, miejsceZerowe02, wierzcholekX, wierzcholekY, 0);
            parabola.adodatnieparabola2miejsca();
        }
        else if (delta < 0) {
            console.log("a > 0");
            console.log("if delta < 0");
            var wierzcholek01 = new Wierzcholek(a, b, c, delta);
            var wierzcholekX = wierzcholek01.obliczWierzcholekX();
            var wierzcholek02 = new Wierzcholek(a, b, c, delta);
            var wierzcholekY = wierzcholek02.obliczWierzcholekY();
            var punkt001 = new Punkt(wierzcholekX, wierzcholekY, (Math.round(wierzcholekX) + ",   " + Math.round(wierzcholekY)));
            punkt001.rysujpunkt();
            var parabola = new RysujParabole(0, 0, wierzcholekX, wierzcholekY, 0);
            parabola.adodatnieparabola0miejs();
        }
    }
    else {
        // ***********************************************************
        if (delta == 0) {
            console.log("a < 0");
            console.log("if delta = 0");
            var miejscezerowe01 = new MiejsceZerowe(a, b, c, delta);
            var miejsceZerowe00 = miejscezerowe01.obliczMiejsceZerowe00();
            //
            var punkt001 = new Punkt(miejsceZerowe00, 0, miejsceZerowe00);
            punkt001.rysujpunkt();
            //
            var parabola = new RysujParabole(0, 0, 0, 0, miejsceZerowe00);
            parabola.aujemneparabola1miejse();
        }
        else if (delta > 0) {
            console.log("a < 0");
            console.log("if delta > 0");
            var wierzcholek01 = new Wierzcholek(a, b, c, delta);
            var wierzcholekX = wierzcholek01.obliczWierzcholekX();
            var wierzcholek02 = new Wierzcholek(a, b, c, delta);
            var wierzcholekY = wierzcholek02.obliczWierzcholekY();
            var miejscezerowe01 = new MiejsceZerowe(a, b, c, delta);
            var miejsceZerowe01 = miejscezerowe01.obliczMiejsceZerowe01();
            var miejscezerowe02 = new MiejsceZerowe(a, b, c, delta);
            var miejsceZerowe02 = miejscezerowe02.obliczMiejsceZerowe02();
            var punkt001 = new Punkt(wierzcholekX, wierzcholekY);
            punkt001.rysujpunkt();
            var punkt002 = new Punkt(miejsceZerowe01, 0, miejsceZerowe01);
            punkt002.rysujpunkt();
            var punkt003 = new Punkt(miejsceZerowe02, 0, miejsceZerowe02);
            punkt003.rysujpunkt();
            var parabola = new RysujParabole(miejsceZerowe01, miejsceZerowe02, wierzcholekX, wierzcholekY, 0);
            parabola.aujemneparabola2miejsca();
        }
        else if (delta < 0) {
            console.log("a < 0");
            console.log("if delta < 0");
            var wierzcholek01 = new Wierzcholek(a, b, c, delta);
            var wierzcholekX = wierzcholek01.obliczWierzcholekX();
            var wierzcholek02 = new Wierzcholek(a, b, c, delta);
            var wierzcholekY = wierzcholek02.obliczWierzcholekY();
            var punkt001 = new Punkt(wierzcholekX, wierzcholekY, Math.round(wierzcholekX, -1) + ",   " + Math.round(wierzcholekY, 1));
            punkt001.rysujpunkt();
            var parabola = new RysujParabole(0, 0, wierzcholekX, wierzcholekY, 0);
            parabola.aujemneparabola0miejs();
        }
    }
}

// test GIT sdfhsfhsfhsfhsfhhhhzgddgadgadgadgadgadgadgadgadgadgag
// test GIT sdfhsfhsfhsfhsfhhhhzgddgadgadgadgadgadgadgadgadgadgag
// test GIT sdfhsfhsfhsfhsfhhhhzgddgadgadgadgadgadgadgadgadgadgag
// test GIT sdfhsfhsfhsfhsfhhhhzgddgadgadgadgadgadgadgadgadgadgag
// test GIT sdfhsfhsfhsfhsfhhhhzgddgadgadgadgadgadgadgadgadgadgag
// test GIT sdfhsfhsfhsfhsfhhhhzgddgadgadgadgadgadgadgadgadgadgag
// test GIT sdfhsfhsfhsfhsfhhhhzgddgadgadgadgadgadgadgadgadgadgag
// test GIT sdfhsfhsfhsfhsfhhhhzgddgadgadgadgadgadgadgadgadgadgag
// test GIT sdfhsfhsfhsfhsfhhhhzgddgadgadgadgadgadgadgadgadgadgag
// test GIT sdfhsfhsfhsfhsfhhhhzgddgadgadgadgadgadgadgadgadgadgag
// test GIT sdfhsfhsfhsfhsfhhhhzgddgadgadgadgadgadgadgadgadgadgag
// test GIT sdfhsfhsfhsfhsfhhhhzgddgadgadgadgadgadgadgadgadgadgag
// test GIT sdfhsfhsfhsfhsfhhhhzgddgadgadgadgadgadgadgadgadgadgag
var MiejsceZerowe = (function () {
    // KONSTRUKTOR
    function MiejsceZerowe(a, b, c, delta) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.delta = delta;
    }
    // METODY
    MiejsceZerowe.prototype.obliczMiejsceZerowe00 = function () {
        var miejsceZerowe00 = (-this.b / 2 * this.a);
        console.log("miejsceZerowe00: " + miejsceZerowe00);
        return miejsceZerowe00;
    };
    MiejsceZerowe.prototype.obliczMiejsceZerowe01 = function () {
        var miejsceZerowe01 = (-b - (Math.sqrt(delta))) / (2 * a);
        console.log("miejsceZerowe01: " + miejsceZerowe01);
        return miejsceZerowe01;
    };
    MiejsceZerowe.prototype.obliczMiejsceZerowe02 = function () {
        var miejsceZerowe02 = (-b + (Math.sqrt(delta))) / (2 * a);
        console.log("miejsceZerowe02: " + miejsceZerowe02);
        return miejsceZerowe02;
    };
    return MiejsceZerowe;
}());

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

// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");
var Punkt = (function () {
    // KONSTRUKTOR
    function Punkt(x, y, opis) {
        if (opis === void 0) { opis = null; }
        this.x = x;
        this.y = y;
        if (opis) {
            this.opis = opis;
        }
        else {
            this.opis = x.toString();
        }
    }
    // METODY
    Punkt.prototype.rysujpunkt = function () {
        ctx.beginPath();
        ctx.arc((400 + (this.x * 20)), (300 - (this.y * 20)), 4, 0, 10);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.font = "10px Arial";
        ctx.fillStyle = "black";
        ctx.fillText(this.opis, (395 + (this.x * 20)), (320 - (this.y * 20)));
        console.log("wspolrzedne" + " " + this.x + " " + this.y + " punktu: " + this.opis);
    };
    return Punkt;
}());

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

var Wierzcholek = (function () {
    // KONSTRUKTOR
    function Wierzcholek(a, b, c, delta) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.delta = delta;
    }
    // METODY
    Wierzcholek.prototype.obliczWierzcholekX = function () {
        var wierzcholekX = -this.b / (2 * this.a);
        console.log("wierzcholekX: " + wierzcholekX);
        return wierzcholekX;
    };
    Wierzcholek.prototype.obliczWierzcholekY = function () {
        var wierzcholekY = -this.delta / (4 * this.a);
        console.log("wierzcholekY: " + wierzcholekY);
        return wierzcholekY;
    };
    return Wierzcholek;
}());
