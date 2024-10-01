import { useState } from "react";

export function createMyHook() {
  const myHook = () => {
    const [count, setCount] = useState(0);

    function increment() {
      setCount((count) => count + 1);
    }
    return { count, increment };
  };

  return { myHook };
}
