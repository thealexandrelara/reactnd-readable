export const abbreviateNumbers = (number, decPlaces) => {
  // 2 decimal places => 100, 3 => 1000, etc
  const decimalPlaces = 10 ** decPlaces;

  // Enumerate number abbreviations
  const abbrev = ['k', 'm', 'b', 't'];
  let numberToConvert = number;

  // Go through the array backwards, so we do the largest first
  for (let i = abbrev.length - 1; i >= 0; i -= 1) {
    // Convert array index to "1000", "1000000", etc
    const size = 10 ** ((i + 1) * 3);

    // If the number is bigger or equal do the abbreviation
    if (size <= numberToConvert) {
      // Here, we multiply by decPlaces, round, and then divide by decPlaces.
      // This gives us nice rounding to a particular decimal place.
      numberToConvert =
        Math.round((numberToConvert * decimalPlaces) / size) / decimalPlaces;

      // Handle special case where we round up to the next abbreviation
      if (numberToConvert === 1000 && i < abbrev.length - 1) {
        numberToConvert = 1;
        i += 1;
      }

      // Add the letter for the abbreviation
      numberToConvert += abbrev[i];

      // We are done... stop
      break;
    }
  }

  return numberToConvert;
};
