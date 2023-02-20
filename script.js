// function xdecimal() {
//   let decimal = document.getElementById("decimal");
//   let hexadecimal = document.getElementById("hexadecimal");
//   let binaire = document.getElementById("binaire");

//   hexadecimal.value = (decimal.value - 0).toString(16);
//   binaire.value = (decimal.value - 0).toString(2);
// }

// function xhexadecimal() {
//   let decimal = document.getElementById("decimal");
//   let hexadecimal = document.getElementById("hexadecimal");
//   let binaire = document.getElementById("binaire");

//   decimal.value = parseInt(hexadecimal.value, 16);
//   binaire.value = parseInt(hexadecimal.value, 16).toString(2);
// }

// function xbinaire() {
//   let decimal = document.getElementById("decimal");
//   let hexadecimal = document.getElementById("hexadecimal");
//   let binaire = document.getElementById("binaire");

//   decimal.value = parseInt(binaire.value, 2);
//   hexadecimal.value = parseInt(binaire.value, 2).toString(16);
// }

// CET CODE PERMET À UTILISATEUR DE NOMBRE DANS UNE BASE À UNE AUTRE

let blocs = [
  {
    numberField: document.getElementById("number0"),
    baseField: document.getElementById("base0"),
  },
  {
    numberField: document.getElementById("number1"),
    baseField: document.getElementById("base1"),
  },
];

function updateField() {
  const givenBloc = blocs[0];
  const blocToUpdate = blocs[1];

  blocToUpdate.numberField.value = changeBase(
    givenBloc.numberField.value,
    givenBloc.baseField.value,
    blocToUpdate.baseField.value
  );
}

// METHODE LA PLUS COURTE SIMPLE PERMET DE CHANGER LE NOMBRE D'UNE BASE À UNE AUTRE
function changeBase(n, initialBase, finalBase) {
  // Compute number
  let number = parseInt(n, initialBase);

  // Write in finalBase
  return number.toString(finalBase);
}

let baseOperator = (n, initialBase, finalBase) =>
  parseInt(n, initialBase).toString(finalBase);
console.log(baseOperator("10", 5, 10));

// --------------------------------------
// function setBase() {
//   base1 = document.getElementById("base1");
//   base2 = document.getElementById("base2");
//   base3 = document.getElementById("base3");
//   if (base1 != null && Number(base1.value) === 10) {
//     base2.value = "16";
//     base3.value = "2";
//   } else if (base2 != null && Number(base2.value) === 16) {
//     base1.value = "10";
//     base3.value = "2";
//   } else if (base3 != null && Number(base3.value) === 2) {
//     base1.value = "10";
//     base2.value = "16";
//   }
// }
// -----------------------------------------------

// CETTE PARTIE DE CHANGER UNE BASE À UNE AUTRE
// function changeBase(n, initialBase, finalBase) {
//   // Compute number
//   let number = 0;

//   for (let power = 0; power < n.length; power++) {
//     const digit = n[n.length - 1 - power];
//     number += digit * Math.pow(initialBase, power);
//   }

//   // Write in finalBase
//   return number.toString(finalBase);
//   // changeBase("10" , 5 , 10)
//   // changeBase("100", 9 ,9 )

//   // 2ém Alternative method
//   let result = "";
//   while (number !== 0) {
//     result = (number % finalBase) + result;
//     number = Math.floor(number / finalBase);
//   }

//   return result;
// }
// changeBase("10" , 5 , 10)
// changeBase("100", 9 ,9 )

//Tests

// check if string is hexadecimal(check si le nombre  c'est hexadecimal)
// function isHex(h) {
//   let a = parseInt(h, 16);
//   return a.toString(16) === h.toLowerCase();
// }

// check if string is decimal(check si le nombre c'est decimal)
// isdigit();

// check of string in binary(check si le nombre c'est binaire)
// function checkString(str) {
//   let isBinary = false;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == "0" || str[i] == "1") {
//       isBinary = true;
//     } else {
//       isBinary = false;
//     }
//   }
// }

// Cette partie du code permet de faire des  calculer dans les bases
// ----------------------------------------
// function xbasDeci() {
//   let basdeci = document.getElementById("basdeci");
//   let bashex = document.getElementById("basdeci");
//   let basbin = document.getElementById("basbin");

//   bashex.value = (basdeci.value - 0).toString(16);
//   basbin.value = (basdeci.value - 0).toString(2);
// }

// function xbasHex() {
//   let basdeci = document.getElementById("basdeci");
//   let bashex = document.getElementById("bashex");
//   let basbin = document.getElementById("basbin");

//   basdeci.value = parseInt(bashex.value, 16);
//   basbin.value = parseInt(bashex.value, 16).toString(2);
// }

// function xbasBin() {
//   let basdeci = document.getElementById("basdeci");
//   let bashex = document.getElementById("bashex");
//   let basbin = document.getElementById("basbin");

//   basdeci.value = parseInt(basbin.value, 2);
//   bashex.value = parseInt(basbin.value, 2).toString(16);
// }

// ----------------------------------------------------------------
