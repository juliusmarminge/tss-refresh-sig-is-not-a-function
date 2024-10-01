import { createFileRoute } from "@tanstack/react-router";

import { createMyHook } from "my-package";

const { myHook } = createMyHook();

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const { count, increment } = myHook();

  return (
    <div>
      <h1>Hello /!</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
