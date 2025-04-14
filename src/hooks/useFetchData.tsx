import { useEffect, useState } from "react";

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

export default useExportFetchData;
