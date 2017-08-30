class RysujParabole {

// POLA KLASY
    miejsceZerowe01: number;
    miejsceZerowe02: number;
    wierzcholekX: number;
    wierzcholekY: number;
    miejsceZerowe00: number;

// KONSTRUKTOR
    constructor(miejsceZerowe01: number,
                miejsceZerowe02: number,
                wierzcholekX: number,
                wierzcholekY: number,
                miejsceZerowe00: number) {
        this.miejsceZerowe01 = miejsceZerowe01;
        this.miejsceZerowe02 = miejsceZerowe02;
        this.wierzcholekX = wierzcholekX;
        this.wierzcholekY = wierzcholekY;
        this.miejsceZerowe00 = miejsceZerowe00;
    }


// METODY
    adodatnieparabola2miejsca() {


        let a = (400 + (this.miejsceZerowe01 * 20));
        let b = (400 + (this.wierzcholekX * 20));
        let c = (300 - (this.wierzcholekY * 20));
        let d = (400 + (this.miejsceZerowe02 * 20));
        let e = (400 + ((this.miejsceZerowe01 - 2) * 20));
        let f = (400 + ((this.miejsceZerowe02 + 2) * 20));

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
    }


    adodatnieparabola1miejsce() {

        ctx.beginPath();
        let a = (400 + (this.miejsceZerowe00 * 20));
        let b = (300 - (this.wierzcholekY * 20));
        let c = (400 + ((this.miejsceZerowe00 + 2) * 20));
        let e = (400 + ((this.miejsceZerowe00 - 2) * 20));
        ctx.moveTo(e, 10);
        ctx.bezierCurveTo(e, b, (a - 10), b, a, 300);
        ctx.bezierCurveTo(c, b, c, 10, c, 10);
        ctx.strokeStyle = "red";
        ctx.stroke();
    }


    adodatnieparabola0miejs() {

        ctx.beginPath();
        let a = (400 + (this.wierzcholekX * 20));
        let b = (300 - (this.wierzcholekY * 20));
        let c = (400 + ((this.wierzcholekX + 2) * 20));
        let e = (400 + ((this.wierzcholekX - 2) * 20));
        ctx.moveTo(e, 10);
        // ctx.lineTo(a, b);
        ctx.bezierCurveTo(e, b, (a - 10), b, a, b);
        // ctx.lineTo(c, 10);
        ctx.bezierCurveTo(c, b, c, 10, c, 10);
        ctx.strokeStyle = "red";
        ctx.stroke();
    }

    aujemneparabola0miejs() {

        ctx.beginPath();

        let a = (400 + (this.wierzcholekX * 20));
        let b = (300 - (this.wierzcholekY * 20));
        let c = (400 + ((this.wierzcholekX + 2) * 20));
        let e = (400 + ((this.wierzcholekX - 2) * 20));

        ctx.moveTo(e, 590);


        // ctx.bezierCurveTo(e, b, (a - 10), b, a, b);
        ctx.lineTo(a, b);


        ctx.lineTo(c, 590);
        // ctx.bezierCurveTo(b, c, c, c, c, 590);

        ctx.strokeStyle = "blue";
        ctx.stroke();


    }


    aujemneparabola1miejse() {

        ctx.beginPath();
        let a = (400 + (this.wierzcholekX * 20));
        let b = (300 - (this.wierzcholekY * 20));
        let c = (400 + ((this.wierzcholekX + 2) * 20));
        let e = (400 + ((this.wierzcholekX - 2) * 20));

        ctx.moveTo(e, 590);
        ctx.lineTo(a, b);
        ctx.lineTo(c, 590);
        ctx.strokeStyle = "blue";
        ctx.stroke();


    }


    aujemneparabola2miejsca() {

        let a = (400 + (this.miejsceZerowe01 * 20));
        let b = (400 + (this.wierzcholekX * 20));
        let c = (300 - (this.wierzcholekY * 20));
        let d = (400 + (this.miejsceZerowe02 * 20));
        let e = (400 + ((this.miejsceZerowe01 + 2) * 20));
        let f = (400 - ((-this.miejsceZerowe02 + 2) * 20));


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

    }


}


