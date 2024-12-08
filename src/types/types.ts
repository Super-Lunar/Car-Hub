import { MouseEventHandler } from "react";

export interface ButtonProps {
  title: string;
  addStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
