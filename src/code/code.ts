export const livedHooks = `const LivedHooks = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      console.log("render");
    }, [count]);
  
    return (
        <h1>LivedHooks</h1>
        <h2>useState 响应式变量</h2>
        <h2>useEffect 生命周期</h2>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
    );
  };
  export default LivedHooks;`;


export const useExportCode = `import useExportData from "../hooks/useExportData";
const useExportPage = () => {
  const { data } = useExportData();
  return (
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
  );
};
export default useExportCode;`;

export const useExportDataCode = `
const useExportData = () => {
    const data = '123'
    return {
        data
    }
}

export default useExportData;
`
