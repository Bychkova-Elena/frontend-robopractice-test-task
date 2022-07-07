import React from "react";
import { ChangeEventHandler } from "react";
import "./style.css"

export type InputProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  placeholder: string;
};

const Input: React.FC<InputProps> = ({ onChange, placeholder, value }) => (
  <input
    type="text"
    placeholder={placeholder}
    onChange={onChange}
    value={value}
  />
);

export default React.memo(Input);