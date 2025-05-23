import React from "react";
type inputProps = {
  value: string;
  handleChnage: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function Input({ value, handleChnage }: inputProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleInputChange}></input>
    </div>
  );
}
