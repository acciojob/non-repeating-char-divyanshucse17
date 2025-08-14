function firstNonRepeatedChar(str) {
  if (!str) return null; // Handle empty string
  
  const charCount = {};

  // Count occurrences of each character
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first character with count 1
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // No non-repeated character
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
