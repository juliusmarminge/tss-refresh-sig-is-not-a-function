import { useState } from "react";

export function INTERNAL__myHookGen() {
  const useMyHook = () => {
    const [count, setCount] = useState(0);

    function increment() {
      setCount((count) => count + 1);
    }
    return { count, increment };
  };

  return useMyHook;
}

export const generateReactHelpers = () => {
  return {
    useMyHook: INTERNAL__myHookGen(),
  } as const;
};
