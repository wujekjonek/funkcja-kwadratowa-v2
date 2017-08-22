class KreskiPionowe {
    public static rysuj(): void {
        for (let i = 20; i < 800; i = i + 20) {
            ctx.restore();
            ctx.strokeStyle = "blue";
            ctx.moveTo(i, 295);
            ctx.lineTo(i, 305);

            ctx.stroke();
        }
    }
}