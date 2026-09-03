function analyzeString(string) {
  let vowels = 0;
  let consonants = 0;
  let number = 0;
  for (let char of string.toLowerCase()) {
    if (char >= "a" && char <= "z") {
      if (["a", "e", "i", "o", "u"].includes(char)) {
        vowels++;
      } else {
        consonants++;
      }
    }
    if (char >= "0" && char <= "9") {
      number++;
    }
  }
  return console.log(`This String has ${vowels} Vowels, ${consonants} Consonants and ${number} Digits`);
}

let str = prompt("Enter a String: ");

analyzeString(str);
