import React, { useState, useEffect } from "react";
import { generateValidNumbers, shuffleArray } from "../utils/numberUtils.ts";
import CircleInputs from "./CircleInputs.tsx";

const TriangleGame: React.FC = () => {
  const [values, setValues] = useState<string[]>(Array(9).fill(""));
  const [sums, setSums] = useState<number[]>([0, 0, 0]);
  const [initialNumbers, setInitialNumbers] = useState<number[]>([]);
  const [usedNumbers, setUsedNumbers] = useState<Set<number>>(new Set());

  useEffect(() => {
    const newNumbers = shuffleArray(generateValidNumbers());
    setInitialNumbers(newNumbers);
  }, []);

  // Calculate the sums of the triangle sides
  const calculateSums = (newValues: string[]) => {
    const numericValues = newValues.map((val) => parseInt(val) || 0);
    const side1 =
      numericValues[0] + numericValues[1] + numericValues[2] + numericValues[3];
    const side2 =
      numericValues[0] + numericValues[8] + numericValues[7] + numericValues[6];
    const base =
      numericValues[3] + numericValues[4] + numericValues[5] + numericValues[6];
    setSums([side1, side2, base]);
  };

  const handleChange = (index: number, value: string) => {
    const newValues = [...values];
    newValues[index] = value;

    const numericValues = newValues.map((val) => parseInt(val) || null);
    const updatedUsedNumbers = new Set(
      numericValues.filter((num) => num !== null)
    );

    setValues(newValues);
    setUsedNumbers(updatedUsedNumbers);
    calculateSums(newValues);
  };

  const handleBlur = (index: number) => {
    const value = values[index];
    const number = parseInt(value);
    if (number && !usedNumbers.has(number)) {
      setUsedNumbers((prevUsed) => new Set(prevUsed.add(number)));
    }
  };

  const handleNewGame = () => {
    const newNumbers = shuffleArray(generateValidNumbers());
    setValues(Array(9).fill(""));
    setSums([0, 0, 0]);
    setInitialNumbers(newNumbers);
    setUsedNumbers(new Set());
  };

  return (
    <div className="gameWrapper">
      <h1>Triangle Game</h1>
      <p className="gameWrapper__description">
        Adjust the numbers so that each side's sum equals to 73! <br /> Ony use
        the Available Numbers given below!
      </p>
      <div className="gameWrapper__availableNums">
        <h3>Available Numbers:</h3>
        <div>
          {initialNumbers.map((num, index) => (
            <span
              key={index}
              style={{
                textDecoration: usedNumbers.has(num) ? "line-through" : "none",
                marginRight: "10px",
                fontSize: "18px",
              }}>
              {num}
            </span>
          ))}
        </div>
      </div>
      {sums.every((sum) => sum === 73) && (
        <h2>🎉 Congratulations! You did it! 🎉</h2>
      )}
      <div className="gameWrapper__middle">
        <div className="gameWrapper__middle__left">
          <div className="gameWrapper__middle__left__sums">
            <h3>Side Sums:</h3>
            <p className="gameWrapper__middle__left__sums__sum">
              Side 1 (Left): {sums[0]}
            </p>
            <p className="gameWrapper__middle__left__sums__sum">
              Side 2 (Right): {sums[1]}
            </p>
            <p className="gameWrapper__middle__left__sums__sum">
              Base (Bottom): {sums[2]}
            </p>
          </div>
        </div>
        <div className="gameWrapper__middle__right">
          <CircleInputs
            values={values}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </div>
      </div>
      <button onClick={handleNewGame} className="gameWrapper__newGameButton">
        New Game
      </button>
    </div>
  );
};

export default TriangleGame;
