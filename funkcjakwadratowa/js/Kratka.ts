class Kratka {
    public static rysuj(): void {
        ctx.beginPath();
        for (let i = 20; i < 600; i = i + 40) {
            ctx.moveTo(10, i);
            ctx.lineTo(790, i);
        }
        ctx.strokeStyle = "#d5d5d5";
        ctx.stroke();



        for (let i = 0; i < 800; i = i + 40) {

            ctx.moveTo(i, 10);
            ctx.lineTo(i, 590);
        }
        ctx.strokeStyle = "#d5d5d5";
        ctx.stroke();

    }
}




