import { Link, Route, Routes, useLocation } from 'react-router-dom';
import routes from './routes';
import { Suspense } from 'react';

const App = () => {
  const location = useLocation();

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* 左侧导航 */}
      <div style={{
        width: '200px',
        backgroundColor: '#f0f0f0',
        padding: '20px',
        borderRight: '1px solid #ddd'
      }}>
        {routes.map((route) => (
          <Link
            key={route.path}
            to={route.path}
            style={{
              display: 'block',
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              backgroundColor: location.pathname === route.path ? '#4CAF50' : '#fff',
              border: '1px solid #ddd',
              cursor: 'pointer',
              textDecoration: 'none',
              color: 'inherit',
              textAlign: 'center',
              borderRadius: '5px',
            }}
          >
            {route.name}
          </Link>
        ))}
      </div>

      {/* 右侧内容 */}
      <div style={{ flex: 1, padding: '20px' }}>
        <Suspense fallback={<div>加载中...</div>}>
          <Routes>
            {routes.map(({ path, component: Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Routes>
        </Suspense>
      </div>
    </div>
  )
}

export default App;
