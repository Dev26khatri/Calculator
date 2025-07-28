let display = document.getElementById("display");

//Append Numbers and symbols
function press(val) {
  display.value += val;
}

//This function calculate the input values with help of "eval" function
function calculate() {
  //Checking for empty in input
  if (display.value == "") {
    alert("Input is empty");
    display.value = "No result";
  } else {
    display.value = eval(display.value);
  }
}

//This function for Clear the last number
function oneCut() {
  display.value = display.value.slice(0, -1);
}

//This function do all clear from input
function Clear() {
  display.value = "";
}
