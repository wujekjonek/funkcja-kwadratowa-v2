

class KreskiPoziome {
    public static rysuj(): void {
        for (let i = 20; i < 600; i = i + 20) {
            ctx.moveTo(395, i);
            ctx.lineTo(405, i);
            ctx.strokeStyle = "blue";
            ctx.stroke();
            ctx.fill();
        }
    }

}