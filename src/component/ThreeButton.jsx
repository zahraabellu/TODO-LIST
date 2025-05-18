import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  toggleTodo,
  clearCompleted,
  setFilter,
} from "../store/todoSlice.js";

export default function ThreeButton({ filteredTodosLength }) {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todos || []);
  const filter = useSelector((state) => state.todos.filter);

  const activeTodosCount = todo.filter((todo) => !todo.completed).length;

  function clearHandle() {
    dispatch(clearCompleted());
  }
  return (
    <>
      <div
        style={{
          backgroundColor: "hsl(235, 24%, 19%)",
          color: "hsl(233, 11%, 84%)",

          top: `calc(20rem + ${filteredTodosLength * 52}px)`,
        }}
        className="lg:h-[3.3rem] lg:w-[31rem] outline-none p-5 text-white text-lg rounded-sm absolute flex justify-between h-[6rem] w-[57rem] lg:left-[483px] left-[20rem] mt-[55rem] lg:mt-0"
      >
        <span className="lg:text-[15px] text-[25px] text-gray-500 pt-4 lg:pt-0">
          {activeTodosCount} items left
        </span>
        <div className="lg:text-[16px] text-[25px] text-gray-500 pointer-cursor font-bold flex gap-4">
          <button
            onClick={() => dispatch(setFilter("all"))}
            className={`hover:text-blue-600 ${
              filter === "all" ? "text-blue-600 font-bold" : ""
            }`}
          >
            All
          </button>
          <button
            onClick={() => dispatch(setFilter("active"))}
            className={`hover:text-blue-600 ${
              filter === "active" ? "text-blue-600 font-bold" : ""
            }`}
          >
            Active
          </button>
          <button
            onClick={() => dispatch(setFilter("completed"))}
            className={`hover:text-blue-600 ${
              filter === "completed" ? "text-blue-600 font-bold" : ""
            }`}
          >
            Completed
          </button>
        </div>
        <button
          className="lg:text-[15px] text-[25px] text-gray-500 cursor-pointer"
          onClick={clearHandle}
        >
          Clear Completed
        </button>
      </div>
      <div
        style={{
          top: `calc(25rem + ${filteredTodosLength * 52}px)`,
        }}
        className="font-bold text-gray-600 absolute lg:left-[483px] lg:ml-[6rem] mt-[60rem] lg:mt-0 lg:text-[25px] text-[2.8rem] flex text-nowrap pl-[30rem]
       lg:pl-0
        "
      >
        Drag and drop to reorder list
      </div>
    </>
  );
}
