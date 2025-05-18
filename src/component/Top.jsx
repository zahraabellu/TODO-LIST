import { useContext } from "react";

import { ThemeContext } from "./ThemeContext";
import bgDark from "../images/bg-desktop-dark.jpg";
import bgLight from "../images/bg-desktop-light.jpg";
export default function Top() {
  const { isDark } = useContext(ThemeContext);
  const bgImage = isDark ? bgDark : bgLight;
  return (
    <div
      className="lg:w-full lg:h-[22rem] bg-cover bg-center object-cover
 h-[90rem] w-[420%] relative z-0"
      style={{ backgroundImage: `url(${bgImage})` }}
    ></div>
  );
}
