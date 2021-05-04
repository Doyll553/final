console.log("hi");

//finding grid container//

let container = document.querySelector(".grid-container");

//clear drawign button//
let clearDrawing = document.querySelector("#clearDrawing");

//create variable//

let isPainting = false;

for (let i = 0; i < 100 * 100; i++){
    let newDiv = document.createElement("div");
    newDiv.classList.add("pixel");

    newDiv.addEventListener("mousedown", 
        function(){
            isPainting = true;
            newDiv.style.backgroundColor = "black";
        });

        newDiv.addEventListener("mouseenter", 
        function(){
            if (isPainting){
                newDiv.style.backgroundColor = "black";
            }
        });

        newDiv. addEventListener("mouseup",
        function(){
            isPainting = false;
        });

        clearDrawing.addEventListener("click", function(){
            newDiv.style.background = "rgba(0,0,0,0)";
          })

    container.appendChild(newDiv);

}
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

let feedHim = document.querySelector(".feed_him");

let tryAgain = document.querySelector(".try_again");

let toolBox = document.querySelector("#mydivheader");

let header = document.querySelector(".header");

let horse = document.querySelector(".horse");

let isDone = false;

  feedHim.addEventListener("click",
    function(){
      feedHim.style.display= "none";
      tryAgain.style.display = "block";
      toolBox.style.display = "none";
      header.style.display = "none";
      horse.style.display = "block";

      container.style.backgroundColor = "rgba(0,0,0,0)";

      container.style.transform = "scale(0.15) translate(-1800px, 820px)";
      container.style.boxShadow = "none";
    })

    tryAgain.addEventListener("click",
      function(){
        feedHim.style.display= "block";
        toolBox.style.display = "block";
        header.style.display = "block";
        horse.style.display = "none";
        tryAgain.style.display = "none";



      })
