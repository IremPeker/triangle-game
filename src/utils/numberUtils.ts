// Function to generate 9 valid numbers that satisfy the sum conditions
export const generateValidNumbers = (): number[] => {
  let validNumbers: number[] = [];
  let sumConditionMet = false;
  while (!sumConditionMet) {
    validNumbers = [
      Math.floor(Math.random() * 50) + 1, // 1
      Math.floor(Math.random() * 50) + 1, // 2
      Math.floor(Math.random() * 50) + 1, // 3
      Math.floor(Math.random() * 50) + 1, // 4
      Math.floor(Math.random() * 50) + 1, // 5
      Math.floor(Math.random() * 50) + 1, // 6
      Math.floor(Math.random() * 50) + 1, // 7
      Math.floor(Math.random() * 50) + 1, // 8
      Math.floor(Math.random() * 50) + 1, // 9
    ];

    // Check if the sums of the sides are 73
    const sumSide1 =
      validNumbers[0] + validNumbers[1] + validNumbers[2] + validNumbers[3];
    const sumSide2 =
      validNumbers[0] + validNumbers[8] + validNumbers[7] + validNumbers[6];
    const sumBase =
      validNumbers[3] + validNumbers[4] + validNumbers[5] + validNumbers[6];

    // If all sides sum to 73, stop generating
    sumConditionMet = sumSide1 === 73 && sumSide2 === 73 && sumBase === 73;
  }
  return validNumbers;
};

export const shuffleArray = (array: number[]): number[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
