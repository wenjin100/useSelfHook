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
export const useExportFetchPageCode = `import useExportFetchData from "../hooks/useExportFetchData";
const ExportFetchPage = () => {
  const { data } = useExportFetchData();
  return (
      <div>
        <h1>useExportFetchData</h1>
        <h2> 把请求放在hook外，在组件中使用</h2>
        <h3>使用场景，多个相同的接口请求，避免多次重复写，引入就行</h3>
        <p>data: {data}</p>
      </div>
  );
};
export default ExportFetchPage;`

export const useExportFetchDataCode = `import { useEffect, useState } from "react";
const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("123");
    }, 1000);
  });
};
const useExportFetchData = () => {
  const [data, setData] = useState<string>('');
  useEffect(() => {
    getData().then((res) => {
      setData(res as string);
    });
  }, []);
  return {
    data,
  };
};
export default useExportFetchData;`

export const useCountCode = `import { useState } from "react";
const useCount = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return { count, increment, decrement };
};
export default useCount;`;

export const useCountPageCode = `import useCount from "../hooks/useCount";
const UseCountPage = () => {
  const { count, increment, decrement } = useCount();
  return <div><h1>useCount</h1>
  <h2>抛出useCount定义的变量和方法，在组件中使用</h2>
    <p>count: {count}</p>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
  </div>;
};
export default UseCountPage;`;

