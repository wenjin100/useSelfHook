import SyntaxHighlighter from "react-syntax-highlighter";
import useFetchData from "../hooks/useFetchData";
import { useExportFetchPageCode, useExportFetchDataCode } from "../code/code";

const ExportFetchPage = () => {
  const { data } = useFetchData();
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
        <h1>useExportFetchData</h1>
        <h2> 把请求放在hook外，在组件中使用</h2>
        <h3>使用场景：相同的接口请求，避免多次重复写，相同引入就行</h3>
        <p>data: {data}</p>
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
          {useExportFetchPageCode}
        </SyntaxHighlighter>
        <SyntaxHighlighter
          language="typescript"
          showLineNumbers
          customStyle={{
            borderRadius: "8px",
          }}
        >
          {useExportFetchDataCode}
        </SyntaxHighlighter>
      </div>
    </div>
    
    
  );
};

export default ExportFetchPage;
