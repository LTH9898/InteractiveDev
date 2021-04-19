class App{

    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);

        this.ctx.fillRect(50, 50, 20, 30)

    }

}

window.onload = () => {
    new App();
};

function draw() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d");

      ctx.beginPath();
      ctx.arc(75, 75, 50, 0, Math.PI * 2, true)
      ctx.moveTo(75,25)
      ctx.lineTo(125,75)
      ctx.stroke();
    }
  } 