import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionTodo from "../redux/actions/actionTodo";
import * as actionUpdate from "../redux/actions/actionUpdate";

export default function TodoBody() {
  const todos = useSelector((state) => state.todos);
  const update = useSelector((state) => state.update);
  const [editInput, setEditInput] = useState(update ? update.text : "");

  const { getAllTodo, removeTodo } = bindActionCreators(
    actionTodo,
    useDispatch()
  );
  const { setUpdateTodo, saveUpdateTodo } = bindActionCreators(
    actionUpdate,
    useDispatch()
  );

  useEffect(() => {
    getAllTodo();
  }, []);

  const setUpdate = (todo) => {
    setUpdateTodo(todo);
    setEditInput(update.text);
  };

  const saveUpdate = (id) => {
    const updatedTodo = { id, text: editInput };
    saveUpdateTodo(updatedTodo);
  };

  return todos.map((data, index) => (
    <div id="tasks" key={index}>
      <div className="task">
        <div className="content">
          <input
            className="text"
            value={update.todoId !== data.todoId ? data.todo : editInput}
            onChange={(e) => setEditInput(e.target.value)}
            readOnly={update.todoId !== data.todoId}
          />
        </div>
        <div className="actions">
          {update.todoId !== data.todoId ? (
            <button className="edit" onClick={() => setUpdate(data)}>
              Edit
            </button>
          ) : (
            <button className="edit" onClick={() => saveUpdate(data.todoId)}>
              Save
            </button>
          )}
          {update.todoId !== data.todoId && (
            <button className="delete" onClick={() => removeTodo(data.todoId)}>
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  ));
}
