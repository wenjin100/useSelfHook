import SyntaxHighlighter from "react-syntax-highlighter";
import useExportData from "../hooks/useExportData";
import { useExportCode, useExportDataCode } from "../code/code";

const ExportPage = () => {
  const { data } = useExportData();
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
        <h1>useExportPage</h1>
        <p>data: {data}</p>
        <br />
        <h3>最简单的使用，直接返回数据</h3>
        <p>自定义hook的定义:</p>
        <ul>
          <li>必须!!以 use 开头</li>
          <li>用于复用某些逻辑（比如封装状态管理、数据请求、逻辑处理等）</li>
          <li>是一个函数，返回值通常是一个对象或数组，供组件使用</li>
        </ul>
      </div>
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
          {useExportCode}
        </SyntaxHighlighter>
        <SyntaxHighlighter
          language="typescript"
          showLineNumbers
          customStyle={{
            borderRadius: "8px",
          }}
        >
          {useExportDataCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
export default ExportPage;
