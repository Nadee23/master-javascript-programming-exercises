function isIsogram(text) {

  const lowerStr = text.toLowerCase();
  const seen = new Set();

  for (const char of lowerStr) {
    if (seen.has(char)) {
      return false;
    }
    seen.add(char);
  }

  return true;
}

console.log(isIsogram("Camile")); // --> true
console.log(isIsogram("Camille")); // --> false
