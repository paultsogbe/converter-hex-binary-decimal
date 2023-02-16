function xdecimal() {
  let decimal = document.getElementById("decimal");
  let hexadecimal = document.getElementById("hexadecimal");
  let binaire = document.getElementById("binaire");

  hexadecimal.value = (decimal.value - 0).toString(16);
  binaire.value = (decimal.value - 0).toString(2);
}

function xhexadecimal() {
  let decimal = document.getElementById("decimal");
  let hexadecimal = document.getElementById("hexadecimal");
  let binaire = document.getElementById("binaire");

  decimal.value = parseInt(hexadecimal.value, 16);
  binaire.value = parseInt(hexadecimal.value, 16).toString(2);
}

function xbinaire() {
  let decimal = document.getElementById("decimal");
  let hexadecimal = document.getElementById("hexadecimal");
  let binaire = document.getElementById("binaire");

  decimal.value = parseInt(binaire.value, 2);
  hexadecimal.value = parseInt(binaire.value, 2).toString(16);
}
// Cette partie du code permet de faire des  calculer dans les bases
function setBase() {
  base1 = document.getElementById("base1");
  base2 = document.getElementById("base2");
  base3 = document.getElementById("base3");
  if (base1 != null && Number(base1.value) === 10) {
    base2.value = "16";
    base3.value = "2";
  } else if (base2 != null && Number(base2.value) === 16) {
    base1.value = "10";
    base3.value = "2";
  } else if (base3 != null && Number(base3.value) === 2) {
    base1.value = "10";
    base2.value = "16";
  }
}

//Tests

// check if string is hexadecimal(check si le nombre est hexadecimal)
function isHex(h) {
  let a = parseInt(h, 16);
  return a.toString(16) === h.toLowerCase();
}

// check if string is decimal(check si le nombre est decimal)
isdigit();

// check of string in binary(check si le nombre est binaire)
function checkString(str) {
  let isBinary = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "0" || str[i] == "1") {
      isBinary = true;
    } else {
      isBinary = false;
    }
  }
}
