let result = document.getElementById("result");
let button = Array.from(document.querySelectorAll("button"));
// console.log(button);
let string = "";
button.forEach((e) => {
  // console.log(e);
  e.addEventListener("click", (btn) => {
    console.log(btn.target.innerHTML);
    if (btn.target.innerHTML == "=") {
      string = eval(string);
      result.value = string;
    } else if (btn.target.innerHTML == "C") {
      string = "";
      result.value = string
    }else if(btn.target.innerHTML == 'M'){
        result.value = "Magic"
    } else {
      string += btn.target.innerHTML;
      result.value = string;
    }
  });
});
