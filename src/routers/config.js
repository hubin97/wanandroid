import {HomePage} from '../pages/home';
import {LikePage} from '../pages/like';
import {MinePage} from '../pages/mine';
import {DetailPage} from '../pages/home/detail';
import {TabBar} from './index';

import home_n from '../images/home_n.png';
import home_h from '../images/home_h.png';
import like_n from '../images/like_n.png';
import like_h from '../images/like_h.png';
import mine_n from '../images/mine_n.png';
import mine_h from '../images/mine_h.png';

// MARK: - Constants
export const TabConfigs = [
  {
    title: '首页',
    component: HomePage,
    normal: home_n,
    select: home_h,
    headerShown: true,
  },
  {
    title: '收藏',
    component: LikePage,
    normal: like_n,
    select: like_h,
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
