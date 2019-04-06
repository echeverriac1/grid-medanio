const text  = document.querySelector('.mainText');
const mainContainer  = document.querySelector('.grid');


mainContainer.addEventListener("mousemove", runEvent);


function runEvent(e){
    e.preventDefault();
    //print Coordinates of the mouse on move on the targeted element: 
    var x=Math.trunc(e.offsetX/10)+1
    var y=Math.trunc(e.offsetY/10)+1
    text.textContent = `(${x},${y}) Medapixel disponible`;
}