function calculate() {
  var height = document.getElementById("height").value / 100;
  var weight = document.getElementById("weight").value;

  var imc = weight / height ** 2;
  var text = "";
  if (imc > 16 && imc < 16.9) {
    text = `Muito abaixo do peso ${imc.toFixed(2)}`;
  } else if (imc > 16.9 && imc <= 18.4) {
    text = `Abaixo do peso ${imc.toFixed(2)}`;
  } else if (imc > 18.4 && imc <= 24.9) {
    text = `Peso normal  ${imc.toFixed(2)}`;
  } else if (imc > 24.9 && imc <= 29.9) {
    text = `Acima do Peso  ${imc.toFixed(2)}`;
  } else if (imc > 29.9 && imc <= 34.9) {
    text = `Obesidade Grau I  ${imc.toFixed(2)}`;
  } else if (imc > 34.9 && imc <= 40) {
    text = `Obsidade Grau II  ${imc.toFixed(2)}`;
  } else if (imc > 40) {
    text = `Obesidade Grau III  ${imc.toFixed(2)}`;
  } else {
    text = `Invalido`;
  }


  let prevText = document.getElementById("text_area").value
  document.getElementById("text_area").value = `${prevText}${text}\r\n`;
}
