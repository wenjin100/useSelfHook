
import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { livedHooks } from "../code/code";
const LivedHooks = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("render");
  }, [count]);

  return (
    <div
      style={{
        padding: "0 140px",
        display: "flex",
        justifyContent: "center",
        gap: "140px",
      }}
    >
      <div>
        <h1>LivedHooks</h1>
        <h2>useState 响应式变量</h2>
        <h2>useEffect 生命周期</h2>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>

      <div>
        <SyntaxHighlighter
          language="typescript"
          showLineNumbers
          customStyle={{
            borderRadius: "8px",
            padding: "20px",
            marginTop: "20px",
            width: "100%",
          }} 
        >
          {livedHooks}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
export default LivedHooks;


