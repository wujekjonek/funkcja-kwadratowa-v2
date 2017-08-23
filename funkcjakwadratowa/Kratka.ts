class Kratka {
    public static rysuj(): void {
        ctx.beginPath();
        for (let i = 20; i < 600; i = i + 20) {
            ctx.moveTo(10, i);
            ctx.lineTo(500, i);
        }
        ctx.strokeStyle = "pink";
        ctx.stroke();
    }
}




