const palindromes = function(string) {
    const alphanumericString = string.replace(/[^0-9a-z]/gi, '');
    
    const reverseString = alphanumericString.split('').reverse().join('');
    
    return alphanumericString.toLowerCase() === reverseString.toLowerCase();
  }

// Do not edit below this line
module.exports = palindromes;
