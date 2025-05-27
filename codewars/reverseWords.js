// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Complete a função que aceita um parâmetro string e inverte cada palavra na string. Todos os espaços na string devem ser mantidos.

// examples:
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

//  melhor resposta do codewars
// function reverseWords(str) {
// Go for it
// split words into seperate arrays
//  return str.split("").reverse().join("").split(" ").reverse().join(" ");
// }

//nossa resposta
function reverseWords(str) {
  const result = str
    .split(/(\s+)/)
    .map((part) => {
      if (part.trim() !== '') {
        return part.split('').reverse().join('')
      }
      return part
    })
    .join('')

  return result
}

console.log(reverseWords('This is an example!'))
console.log(reverseWords('double  spaces'))
