var input = "bici coche (balón) bici coche peluche";

function isValid(letter) {
  var caracteres = letter.split("");
  console.log(caracteres);
  let openParenthesis = 0;
  let closeParenthesis = 0;

  caracteres.map((caracteres) => {
    if (caracteres === "(") {
      openParenthesis += 1;
    } else if (caracteres === ")") {
      closeParenthesis += 1;
    }
  });

  if (
    openParenthesis === closeParenthesis &&
    openParenthesis >= 0 &&
    closeParenthesis >= 0
  ) {
    return true;
  } else {
    return false;
  }
}

const isValidLetter = isValid(input);
console.log(isValidLetter);