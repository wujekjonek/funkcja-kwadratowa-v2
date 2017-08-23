
// aaaaaaaaaaaaaaaaaa

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

let a;         //ok klasa
let b;
let c;
let delta01;
let delta;


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

            let miejscezerowe01 = new MiejsceZerowe(a, b, c, delta);
            let miejsceZerowe00 = miejscezerowe01.obliczMiejsceZerowe00();

            let punkt001 = new Punkt(miejsceZerowe00, 0, miejsceZerowe00);
            punkt001.rysujpunkt();

            let parabola = new RysujParabole(0, 0, 0, 0, miejsceZerowe00);
            parabola.adodatnieparabola1miejsce();
        }

        // ***********************************************************
        else if (delta > 0) {
            console.log("a > 0");
            console.log("if delta > 0");

            let wierzcholek01 = new Wierzcholek(a, b, c, delta);
            let wierzcholekX = wierzcholek01.obliczWierzcholekX();

            let wierzcholek02 = new Wierzcholek(a, b, c, delta);
            let wierzcholekY = wierzcholek02.obliczWierzcholekY();

            let miejscezerowe01 = new MiejsceZerowe(a, b, c, delta);
            let miejsceZerowe01 = miejscezerowe01.obliczMiejsceZerowe01();

            let miejscezerowe02 = new MiejsceZerowe(a, b, c, delta);
            let miejsceZerowe02 = miejscezerowe02.obliczMiejsceZerowe02();


            // poczytac toString       wierzcholekX.toString());


            let punkt001 = new Punkt(wierzcholekX, wierzcholekY, (Math.round(wierzcholekX * 100) / 100));
            punkt001.rysujpunkt();

            // let punkt002 = new Punkt(miejsceZerowe01, 0, miejsceZerowe01.toString());
            let punkt002 = new Punkt(miejsceZerowe01, 0, (Math.round(miejsceZerowe01 * 100) / 100));
            punkt002.rysujpunkt();

            //     let punkt003 = new Punkt(miejsceZerowe02, 0,  Math.round(miejsceZerowe02, -5));
            let punkt003 = new Punkt(miejsceZerowe02, 0, (Math.round(miejsceZerowe02 * 100) / 100));


            punkt003.rysujpunkt();

            let parabola = new RysujParabole(miejsceZerowe01, miejsceZerowe02, wierzcholekX, wierzcholekY, 0);
            parabola.adodatnieparabola2miejsca();
        }

        // ***********************************************************
        else if (delta < 0) {
            console.log("a > 0");
            console.log("if delta < 0");

            let wierzcholek01 = new Wierzcholek(a, b, c, delta);
            let wierzcholekX = wierzcholek01.obliczWierzcholekX();

            let wierzcholek02 = new Wierzcholek(a, b, c, delta);
            let wierzcholekY = wierzcholek02.obliczWierzcholekY();

            let punkt001 = new Punkt(wierzcholekX, wierzcholekY, (Math.round(wierzcholekX) + ",   " + Math.round(wierzcholekY)));
            punkt001.rysujpunkt();

            let parabola = new RysujParabole(0, 0, wierzcholekX, wierzcholekY, 0);
            parabola.adodatnieparabola0miejs();
        }

    } else {

        // ***********************************************************
        if (delta == 0) {
            console.log("a < 0");
            console.log("if delta = 0");


            let miejscezerowe01 = new MiejsceZerowe(a, b, c, delta);
            let miejsceZerowe00 = miejscezerowe01.obliczMiejsceZerowe00();
            //
            let punkt001 = new Punkt(miejsceZerowe00, 0, miejsceZerowe00);
            punkt001.rysujpunkt();
            //
            let parabola = new RysujParabole(0, 0, 0, 0, miejsceZerowe00);
            parabola.aujemneparabola1miejse();


        }

        // ***********************************************************
        else if (delta > 0) {
            console.log("a < 0");
            console.log("if delta > 0 :)");
            console.log("************************************************");


            let wierzcholek01 = new Wierzcholek(a, b, c, delta);
            let wierzcholekX = wierzcholek01.obliczWierzcholekX();

            let wierzcholek02 = new Wierzcholek(a, b, c, delta);
            let wierzcholekY = wierzcholek02.obliczWierzcholekY();

            let miejscezerowe01 = new MiejsceZerowe(a, b, c, delta);
            let miejsceZerowe01 = miejscezerowe01.obliczMiejsceZerowe01();

            let miejscezerowe02 = new MiejsceZerowe(a, b, c, delta);
            let miejsceZerowe02 = miejscezerowe02.obliczMiejsceZerowe02();

            let punkt001 = new Punkt(wierzcholekX, wierzcholekY );
            punkt001.rysujpunkt();

            let punkt002 = new Punkt(miejsceZerowe01, 0, (Math.round(miejsceZerowe01)));
            punkt002.rysujpunkt();

            let punkt003 = new Punkt(miejsceZerowe02, 0, (Math.round(miejsceZerowe02)));
            punkt003.rysujpunkt();

            let parabola = new RysujParabole(miejsceZerowe01, miejsceZerowe02, wierzcholekX, wierzcholekY, 0);
            parabola.aujemneparabola2miejsca();
        }

        // ***********************************************************
        else if (delta < 0) {
            console.log("a < 0");
            console.log("if delta < 0");

            let wierzcholek01 = new Wierzcholek(a, b, c, delta);
            let wierzcholekX = wierzcholek01.obliczWierzcholekX();

            let wierzcholek02 = new Wierzcholek(a, b, c, delta);
            let wierzcholekY = wierzcholek02.obliczWierzcholekY();

            let punkt001 = new Punkt(wierzcholekX, wierzcholekY, Math.round(wierzcholekX, -1) + ",   " + Math.round(wierzcholekY, 1);
            punkt001.rysujpunkt();

            let parabola = new RysujParabole(0, 0, wierzcholekX, wierzcholekY, 0);
            parabola.aujemneparabola0miejs();
        }


    }

}














