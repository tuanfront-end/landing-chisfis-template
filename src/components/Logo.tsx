import React, { FC } from "react";
import logoImg from "images/logo.svg";

export interface LogoProps {
  src?: string;
}
const Logo: FC<LogoProps> = ({ src }) => {
  return <img className="w-28 flex-shrink-0" src={src || logoImg} alt="logo" />;
};

export default Logo;
