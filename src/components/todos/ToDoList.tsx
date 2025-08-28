"use client";

import { useQuery } from "convex/react";
import React from "react";
import { api } from "../../../convex/_generated/api";
import ToDoItem from "./ToDoItem";
import Loading from '../feedback/Loading'

function ToDoList() {
  const todos = useQuery(api.todos.getTodos);

  if (todos === undefined) {
    return (
      <Loading/>
    );
  }

  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center h-96 justify-center gap-4">
        <p className="text-xl font-semibold mb-6">No tasks yet!</p>
        <p className="text-muted-foreground">Add some tasks to get started</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
        {todos?.map((todo, idx) => (
            <div key={idx}>
                <ToDoItem todo={todo}/>
            </div>
        ))}
    </div>
  );
}

export default ToDoList;
