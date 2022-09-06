var input = ")bici( casa play";

function isValid(letter) {
  var caracteres = letter.split("");
  console.log(caracteres);
  let openParenthesis = 0;
  let closeParenthesis = 0;
  let error = false

  caracteres.map((caracteres) => {
    if (caracteres === "(") {
      openParenthesis += 1;
    } else if (caracteres === ")") {
      if(openParenthesis !== closeParenthesis){
        closeParenthesis += 1;
      }
    }
    if(caracteres === '[' || caracteres === ']' || caracteres === '{' || caracteres === '}'){
        error = true 
    }
  });

  if (
    openParenthesis === closeParenthesis &&
    openParenthesis >= 0 &&
    closeParenthesis >= 0 && error === false && !letter.match(/[(]\W+[)]|[(][)]/)
  ) {
    return true;
  } else {
    return false;
  }
}

const isValidLetter = isValid(input);
console.log(isValidLetter);