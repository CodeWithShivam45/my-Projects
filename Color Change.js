const button = Array.from(document.querySelectorAll("button"));
const h1 = document.querySelector("h1");
button.forEach((e) => {
  e.addEventListener("click", (btn) => {
    // console.log(btn.target.id);
    let color = btn.target.innerHTML;
    if (color === "White") {
      document.body.style.backgroundColor = "white";
      h1.style.color = "black";
    }
    if (color === "Red") {
      document.body.style.backgroundColor = "red";
    }
    if (color === "Green") {
      document.body.style.backgroundColor = "green";
    }
    if (color === "Blue") {
      document.body.style.backgroundColor = "blue";
      h1.style.color = "white";
    }
    if (color === "Yellow") {
      document.body.style.backgroundColor = "yellow";
      h1.style.color = "black";
    }
    if (color === "Orange") {
      document.body.style.backgroundColor = "orange";
    }
    if (color === "Purple") {
      document.body.style.backgroundColor = "purple";
    }
    if (color === "Pink") {
      document.body.style.backgroundColor = "pink";
      h1.style.color = "black";
    }
    if (color === "Grey") {
      document.body.style.backgroundColor = "grey";
      h1.style.color = "white";
    }
    if (color === "Black") {
      document.body.style.backgroundColor = "black";
      h1.style.color = "white";
    }
  });
});
// document.body.style.backgroundColor = 'red'
