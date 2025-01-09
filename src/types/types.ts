export type CircleInputsProps = {
  values: string[];
  handleChange: (index: number, value: string) => void;
  handleBlur: (index: number) => void;
};
