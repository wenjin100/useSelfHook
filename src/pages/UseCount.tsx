import SyntaxHighlighter from "react-syntax-highlighter";
import useCount from "../hooks/useCount";
import { useCountCode, useCountPageCode } from "../code/code";

const UseCountPage = () => {
  const { count, increment, decrement } = useCount();
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "120px",
      }}
    >
      <div>
        <h1>useCount</h1>
        <h2>抛出useCount定义的变量和方法，在组件中使用</h2>
        <p>count: {count}</p>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
      ;
      <div>
        <SyntaxHighlighter
          language="typescript"
          showLineNumbers
          customStyle={{
            borderRadius: "8px",
            padding: "20px",
            marginTop: "20px",
          }}
        >
          {useCountPageCode}
        </SyntaxHighlighter>
        <SyntaxHighlighter
          language="typescript"
          showLineNumbers
          customStyle={{
            borderRadius: "8px",
          }}
        >
          {useCountCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default UseCountPage;
