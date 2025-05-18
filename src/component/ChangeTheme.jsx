import { useContext, useEffect } from "react";
import React, { useState } from "react";
import { ReactComponent as IconSun } from "../images/icon-sun.svg";
import { ReactComponent as IconMoon } from "../images/icon-moon.svg";
import { ThemeContext } from "./ThemeContext";
import InputTodos from "./InputTodos";

export default function ChangeTheme() {
  const { isDark, changethemeclick } = useContext(ThemeContext);

  return (
    <div>
      <h1 className="font-bold lg:text-4xl text-9xl absolute top-[50rem] lg:top-[10rem] left-[20rem] lg:left-[30rem] text-white tracking-[1.5rem]">
        TODO
      </h1>

      {isDark ? (
        <IconSun
          className="lg:w-8 lg:h-8 w-[20rem] h-[15rem] absolute lg:top-[10rem] lg:left-[60rem] cursor-pointer top-[52rem] left-[75rem]"
          onClick={changethemeclick}
        />
      ) : (
        <IconMoon
          className="lg:w-8 lg:h-8 w-[15rem] h-[15rem] absolute lg:top-[10rem]  lg:left-[60rem] cursor-pointer top-[52rem] left-[75rem]"
          onClick={changethemeclick}
        />
      )}

      <InputTodos />
    </div>
  );
}
