import useExportFetchData from "../hooks/useExportFetchData";

const ExportFetchPage = () => {
  const { data } = useExportFetchData();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1>useExportFetchData</h1>
        <h2> 把请求放在hook外，在组件中使用</h2>
        <h3>使用场景，多个相同的接口请求，避免多次重复写，相同引入就行</h3>
        <p>data: {data}</p>
      </div>
    </div>
  );
};

export default ExportFetchPage;
