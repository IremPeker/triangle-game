import React, { useState, useEffect } from "react";
import { CircleInputsProps } from "../types/types";

const CircleInputs: React.FC<CircleInputsProps> = ({
  values,
  handleChange,
  handleBlur,
}) => {
  return (
    <div className="circleInputs">
      <div className="circleInputs__inputWrapper">
        <input
          type="text"
          className="circleInputs__inputWrapper__circle"
          value={values[0]}
          onBlur={() => handleBlur(0)}
          onChange={(e) => handleChange(0, e.target.value)}
        />
      </div>
      <div className="circleInputs__inputWrapper">
        <input
          type="text"
          className="circleInputs__inputWrapper__circle"
          value={values[1]}
          onBlur={() => handleBlur(1)}
          onChange={(e) => handleChange(1, e.target.value)}
        />
        <input
          type="text"
          className="circleInputs__inputWrapper__circle"
          value={values[8]}
          onBlur={() => handleBlur(8)}
          onChange={(e) => handleChange(8, e.target.value)}
        />
      </div>
      <div className="circleInputs__inputWrapper">
        <input
          type="text"
          className="circleInputs__inputWrapper__circle"
          value={values[2]}
          onBlur={() => handleBlur(2)}
          onChange={(e) => handleChange(2, e.target.value)}
        />
        <input style={{ visibility: "hidden", width: "60px" }} />
        <input
          type="text"
          className="circleInputs__inputWrapper__circle"
          value={values[7]}
          onBlur={() => handleBlur(7)}
          onChange={(e) => handleChange(7, e.target.value)}
        />
      </div>
      <div className="circleInputs__inputWrapper">
        <input
          type="text"
          className="circleInputs__inputWrapper__circle"
          value={values[3]}
          onBlur={() => handleBlur(3)}
          onChange={(e) => handleChange(3, e.target.value)}
        />
        <input
          type="text"
          className="circleInputs__inputWrapper__circle"
          value={values[4]}
          onBlur={() => handleBlur(4)}
          onChange={(e) => handleChange(4, e.target.value)}
        />
        <input
          type="text"
          className="circleInputs__inputWrapper__circle"
          value={values[5]}
          onBlur={() => handleBlur(5)}
          onChange={(e) => handleChange(5, e.target.value)}
        />
        <input
          type="text"
          className="circleInputs__inputWrapper__circle"
          value={values[6]}
          onBlur={() => handleBlur(6)}
          onChange={(e) => handleChange(6, e.target.value)}
        />
      </div>
    </div>
  );
};

export default CircleInputs;
