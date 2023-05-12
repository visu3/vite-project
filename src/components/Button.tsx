import React from "react";

interface Props {
  onClick: () => void;
  buttonText: string;
  //   buttonColor?: string;
  buttonColor2?: "primary" | "secondary" | "success";
}

const Button = ({ onClick, buttonText, buttonColor = "primary" }: Props) => {
  return (
    <button
      type="button"
      className={"btn btn-" + buttonColor}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;
