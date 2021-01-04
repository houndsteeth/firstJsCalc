function calc() {
  var a = parseInt(document.querySelector("#value1").value);
  var b = parseInt(document.querySelector("#value2").value);
  var op = document.querySelector("#operator").value;
  var calculate;


  if (op == "Add") {
    calculate = a + b;
  } 
  
  else if (op == "Sub") {
    calculate = a - b;
  } 
  
  else if (op == "Mul") {
    calculate = a * b;
  } 
  
  else if (op == "Div") {
    calculate = a / b;
  }

  document.querySelector("#result").innerHTML = calculate;

}