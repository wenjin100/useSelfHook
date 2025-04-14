import { HomePage, ContactPage, LivedHooks, ExportPage,ExportFetchPage} from './pages';
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
    path: '/useExportPage',
    component: ExportPage,
    name: 'useExportPage',
  },
  {
    path: '/exportFetchPage',
    component: ExportFetchPage,
    name: 'exportFetchPage',
  },
  {
    path: '/contact',
    component: ContactPage,
    name: '联系我',
  },
];

export default routes; 