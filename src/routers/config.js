import {TabBar} from './index';
import HomePage from '../pages/home';
import {ProjectPage} from '../pages/project';
import {PublicPage} from '../pages/public';
import {TreePage} from '../pages/tree';
import {MinePage} from '../pages/mine';
import DetailPage from '../pages/home/detail';

import home_n from '../images/home_n.png';
import home_h from '../images/home_h.png';
import project_n from '../images/project_n.png';
import project_h from '../images/project_h.png';
import public_n from '../images/public_n.png';
import public_h from '../images/public_h.png';
import tree_n from '../images/tree_n.png';
import tree_h from '../images/tree_h.png';
import mine_n from '../images/mine_n.png';
import mine_h from '../images/mine_h.png';

// MARK: - Constants
export const TabConfigs = [
  {
    title: '首页',
    component: HomePage,
    normal: home_n,
    select: home_h,
    headerShown: false,
  },
  {
    title: '项目',
    component: ProjectPage,
    normal: project_n,
    select: project_h,
    headerShown: true,
  },
  {
    title: '公共号',
    component: PublicPage,
    normal: public_n,
    select: public_h,
    headerShown: true,
  },
  {
    title: '体系',
    component: TreePage,
    normal: tree_n,
    select: tree_h,
    headerShown: true,
  },
  {
    title: '我的',
    component: MinePage,
    normal: mine_n,
    select: mine_h,
    headerShown: false,
  },
];

// MARK: - 
export const NaviConfigs = [
  {
    title: 'TabBar',
    name: 'TabBar',
    component: TabBar,
    headerShown: false,
  },
  {
    title: '详情',
    name: 'DetailPage',
    component: DetailPage,
    headerShown: true,
  },
];
