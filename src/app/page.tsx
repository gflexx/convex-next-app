import CreateToDo from "@/components/todos/CreateToDo";
import ToDoList from "@/components/todos/ToDoList";

export default function Home() {
  return (
    <div>
      <CreateToDo/>
      <ToDoList/>
    </div>
  );
}
