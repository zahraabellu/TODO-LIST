import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  deleteTodo,
  toggleTodo,
  setFilter,
} from "../store/todoSlice.js";
import { useState } from "react";
import iconCheck from "../images/icon-check.svg";
import iconCross from "../images/icon-cross.svg";
import ThreeButton from "./ThreeButton.jsx";
export default function InputTodos() {
  const todos = useSelector((state) => state.todos.todos || []);
  const filter = useSelector((state) => state.todos.filter);
  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleAddTodo = () => {
    if (text.trim() !== "") {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Create a new todo..."
        style={{
          backgroundColor: "hsl(235, 24%, 19%)",
          color: "hsl(233, 11%, 84%)",
        }}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTodo();
          }
        }}
        value={text}
        className="absolute lg:h-[3.3rem] lg:w-[31rem] lg:top-[15.2rem] lg:left-[30.2rem] rounded outline-none p-5 text-white lg:text-lg text-4xl h-[7rem] w-[57rem] left-[20rem] top-[65rem]"
      />

      <ul className="flex flex-col">
        {filteredTodos.map((todo, index) => (
          <li
            key={todo.id}
            onClick={() => dispatch(toggleTodo(todo.id))}
            style={{
              backgroundColor: "hsl(235, 24%, 19%)",
              color: "hsl(233, 11%, 84%)",
              top: `${index * 52}px`,

              borderBottom: "2px solid hsl(235, 19%, 35%)",
            }}
            className="lg:h-[3.3rem] lg:w-[31rem] outline-none p-5 text-white lg:text-lg text-[23px] absolute lg:mt-[20rem] rounded-sm flex items-center group h-[3.35rem] w-[57rem] lg:left-[30.2rem] left-[20rem] mt-[75rem] gap-3
            "
            // className="todo-items"
          >
            <div className="relative w-5 h-5 mr-3">
              <input
                type="checkbox"
                style={{ border: "1px solid hsl(233, 14%, 35%)" }}
                onChange={() => dispatch(toggleTodo(todo.id))}
                className="appearance-none w-full h-full border-2 rounded-full pointer-events-none"
                checked={todo.completed}
              />

              {todo.completed && (
                <div className="">
                  <div className="absolute bg-gradient-to-br from-blue-400 to-purple-500  w-full h-full top-0 left-0 rounded-full flex items-center justify-center"></div>
                  <img
                    src={iconCheck}
                    alt="check"
                    className={`absolute top-1.5 left-1 w-2.5 h-2.5 pointer-events-none z-10`}
                  />
                </div>
              )}
            </div>

            <span
              className={`
            ${todo.completed ? "line-through text-gray-500" : ""}`}
            >
              {todo.text}
            </span>

            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              <img
                src={iconCross}
                alt=" icon cross"
                className="h-4 w-4 absolute right-[20px] cursor-pointer bottom-4 hidden group-hover:block"
              />
            </button>
          </li>
        ))}
      </ul>
      {todos.length > 0 && (
        <ThreeButton filteredTodosLength={filteredTodos.length} />
      )}
    </>
  );
}
