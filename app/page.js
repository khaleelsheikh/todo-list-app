import Image from "next/image";
import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
    <TodoList />
</main>
  );
}
