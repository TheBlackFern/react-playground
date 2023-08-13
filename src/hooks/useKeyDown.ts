import * as React from "react";

/**
 * Returns last pressed key and its code.
 */
export function useKeyDown(): [string, string, boolean] {
  const [key, setKey] = React.useState("");
  const [code, setCode] = React.useState("");
  const [changed, setChanged] = React.useState(false);

  React.useEffect(() => {
    function onKeyPress(e: KeyboardEvent) {
      const { key, code } = e;
      if (code.includes("Key")) {
        e.preventDefault();
      }
      setKey(key);
      setCode(code);
      setChanged((prev) => !prev);
    }
    window.addEventListener("keydown", onKeyPress);
    return () => {
      window.removeEventListener("keydown", onKeyPress);
    };
  }, []);

  return [key, code, changed];
}
