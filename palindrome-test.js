const checkPalindrom = (str) => {
  return str.toLowerCase() == str.toLowerCase().split('').reverse().join('');
};

console.log(checkPalindrom('SAIPPUAKIVIKAUPPIAS'));
console.log(checkPalindrom('Aibohphobia'));
console.log(checkPalindrom('Anna'));
console.log(checkPalindrom('Civic'));
console.log(checkPalindrom('No lemon, no melon'));
