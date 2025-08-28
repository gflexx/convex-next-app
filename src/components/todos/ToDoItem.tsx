import { TodoItem } from "@/types/todoitem";
import React from "react";

interface ToDoItemProps {
  todo: TodoItem;
}

function ToDoItem({ todo }: ToDoItemProps) {
  const date = new Date(todo._creationTime);
  const formattedDate = date.toLocaleDateString();
  return (
    <div className="w-full p-4 border rounded.md bg-gray-100 shadow ">
      {todo.title}
      <div>
        <p className="text-sm text-gray-500 text-end">Created on: {formattedDate}</p>
      </div>
    </div>
  );
}

export default ToDoItem;
