function reverseAlphabet(str) {
  let letters = str.match(/[a-zA-Z]/g).reverse(); // Ekstrak dan balik huruf-huruf
  return str.split('').map(char => /[a-zA-Z]/.test(char) ? letters.shift() : char).join('');
}

const inputStr = "NEGIE1";
const result = reverseAlphabet(inputStr);
console.log(result); // Output: "EIGEN1"
