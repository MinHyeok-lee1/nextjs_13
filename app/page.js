import "../styles/globals.css";
import { use } from "react";
export default function Page() {
  var data = use(getSomething());
  return (
    <div>
      <h1>메인 페이지 {data.todo}</h1>
    </div>
  );
}

export async function getSomething() {
  const res = await fetch("https://dummyjson.com/todos/1", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}
