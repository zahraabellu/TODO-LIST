import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

export default function Down() {
  const { isDark, changethemeclick } = useContext(ThemeContext);
  const bgColor = isDark ? "hsl(235, 21%, 11%)" : "hsl(0, 0%, 98%)";
  return (
    <>
      <div
        style={{ backgroundColor: bgColor }}
        className="lg:w-auto lg:h-full-screen h-[139rem] w-[108rem]"
      ></div>
    </>
  );
}
