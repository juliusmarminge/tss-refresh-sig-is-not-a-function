import { createFileRoute } from "@tanstack/react-router";

import { generateReactHelpers } from "my-package";

const { useMyHook } = generateReactHelpers();

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const { count, increment } = useMyHook();

  return (
    <div>
      <h1>Hello /!</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
