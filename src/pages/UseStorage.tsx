import useLocalStorage from  '../hooks/useLocalStorage';

export default function Profile() {
  const { get, set } = useLocalStorage<string>();

  // 在 render 中直接调用 get()，有最新值就渲染最新
  const name = get('username') ?? '未设置';
  const theme = get<'light' | 'dark'>('theme') ?? 'light';

  return (
    <div>
      <p>用户名：{name}</p>
      <button onClick={() => {
        const next = name === 'Alice' ? 'Bob' : 'Alice';
        set('username', next);
      }}>
        切换用户名
      </button>

      <p>主题模式：{theme}</p>
      <button onClick={() => {
        set('theme', theme === 'light' ? 'dark' : 'light');
      }}>
        切换主题
      </button>
    </div>
  );
}
