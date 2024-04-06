import iconAdd from "../../assets/icons/icon-add.svg";
import "./todo.scss";

export default function Todo() {
  return (
    <div className="todo-wrapper">
      <div className="input-wrapper">
        <button className="btn-add">
          <img src={iconAdd} alt="icon" />
        </button>
        <input
          className="input-new-todo"
          type="text"
          placeholder="Create a new todo.."
        />
      </div>
      {/* todos */}
      <div></div>
    </div>
  );
}
