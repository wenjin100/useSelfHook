import { useState, useCallback } from "react";

const useLocalStorage = () => {
  // 不需要存实际数据，只用这个 state 来强制刷新组件
  const [, updateState] = useState<number>(0);
  const forceUpdate = useCallback(() => {
    updateState((n) => n + 1);
  }, []);

  // 读取指定 key
  const get = useCallback(<T = any,>(key: string): T | null => {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : null;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return null;
    }
  }, []);

  // 写入指定 key，并触发组件刷新
  const set = useCallback(
    <T = any,>(key: string, value: T): void => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        forceUpdate();
      } catch (error) {
        console.error(`Error setting localStorage key "${key}":`, error);
      }
    },
    [forceUpdate]
  );

  return { get, set };
};

export default useLocalStorage;
