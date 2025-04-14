import { HomePage, ContactPage, LivedHooks, UseExport,UseExportFetch,UseCount} from './pages';
// 定义路由类型
export interface RouteConfig {
  path: string;
  component: React.ComponentType;
  name: string;
}

// 页面组件懒加载


// 路由配置表
const routes: RouteConfig[] = [
  {
    path: '/',
    component: HomePage,
    name: '介绍',
  },
  {
    path: '/livedHooks',
    component: LivedHooks,
    name: '现有hooks',
  },
  {
    path: '/UseExport',
    component: UseExport,
    name: 'useData',
  },
  {
    path: '/useExportFetch',
    component: UseExportFetch,
    name: 'useFetchData',
  },
  {
    path: '/useCount',
    component: UseCount,
    name: 'useCount',
  },
  {
    path: '/contact',
    component: ContactPage,
    name: '联系我',
  },
];

export default routes; 