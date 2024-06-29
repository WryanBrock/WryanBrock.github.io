var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  //   document.getElementById("loader").style.display = "none";
  document.getElementById("show").style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
  // Select the container element
  const container = document.getElementById("scene-container");

  // Loop to create and add 40 SVG elements
  const svgns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgns, "svg");
  svg.setAttribute("viewBox", "0 0 300 300");
  for (let i = 0; i < 80; i++) {
    const ranX = Math.floor(Math.random() * 701 - 250);
    const ranY = Math.floor(Math.random() * 401 - 100);

    add_circle(svg, ranX, ranY);
    // Append the circle to the SVG

    // svg.appendChild(cir2);
    // Optionally, add a class or style to the SVG
    svg.classList.add("svg-class");

    // Append the SVG to the container
    container.appendChild(svg);
    connections();
  }
});

function add_circle(svg, x, y) {
  // Create a circle element inside the SVG
  const svgns = "http://www.w3.org/2000/svg";
  const ranZ = Math.floor(Math.random() * 101);

  const circle = document.createElementNS(svgns, "circle");
  circle.setAttribute("cx", x);
  circle.setAttribute("cy", y);
  circle.setAttribute("r", "1");
  circle.setAttribute("stroke", "grey");
  circle.setAttribute("stroke-width", ".1");
  circle.setAttribute("fill", "lightblue");
  circle.classList.add("svg-node");

  svg.appendChild(circle);

  return circle;
}



function connections(){
  const dotList = document.querySelectorAll("svg-node");
  console.log()

}
// for (let i = 0; i < dotList.length; i++) {
//   console.log("start");
// }
