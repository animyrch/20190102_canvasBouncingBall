window.onload = function()
{
    let canvas = document.getElementById("myCanvas");
    if(!canvas)
    {
        alert("Impossible de récupérer le canvas");
        return;
    }

    let context = canvas.getContext("2d");
    if(!context)
    {
        alert("Impossible de récupérer le context");
        return;
    }

    let tailleBalle = 80;
    let xPos = Math.floor(Math.random() * (canvas.width-tailleBalle)) +  tailleBalle/2;
    let yPos = Math.floor(Math.random() * (canvas.height-tailleBalle)) +  tailleBalle/2;
    let xVitesse = 10;
    let yVitesse = 5;
    canvas.height = $(window).height()-xVitesse*3;
    canvas.width =  $(window).width()-yVitesse*4;

    let limiteX = canvas.height;

    let animate = () =>{
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.beginPath();
      context.arc(xPos, yPos, tailleBalle/2, 0, Math.PI*2);
      context.fill();
      context.closePath();

      xPos += xVitesse;
      yPos += yVitesse;

      if(yPos >= canvas.height-tailleBalle/2+1 || yPos <= tailleBalle/2-1){
        yVitesse *= -1;
      }
      if(xPos >= canvas.width-tailleBalle/2+1 || xPos <= tailleBalle/2-1){
        xVitesse *= -1;
      }

    };

    let myInterval = setInterval(animate, 1000/60); //Notre boucle de rafraîchissement.
}
