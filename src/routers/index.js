import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import navi_back_b from "../images/navi_back_b.png";
import { TabConfigs, NaviConfigs } from "./config";


// MARK: - TABs
// https://reactnavigation.org/docs/bottom-tab-navigator
const Tab = createBottomTabNavigator()

export const TabBar = () => {
    const listeners = ({ navigation }) => ({
        tabPress: async (e) => {
          console.log('\n', 'e=>', e.target);
        },
      })
      return (
        <Tab.Navigator>
          {
            TabConfigs.map((tabItem) => {
              return (
                <Tab.Screen key={tabItem.title} name={tabItem.title} component={tabItem.component} listeners={listeners} props={''} options={{
                  title: tabItem.title,
                  headerShown: tabItem.headerShown,
                  tabBarInactiveTintColor: '#8a8a8a',  // 非选中文字和图标的颜色
                  tabBarActiveTintColor: '#1296db',   // 选中文字和图标的颜色
                  tabBarHideOnKeyboard: true,    // 打开键盘时，选项卡是否隐藏            
                  tabBarIcon: (({ focused }) => (<Image source={focused ? tabItem.select : tabItem.normal} style={{ width: 24, height: 24 }} />))
                }}/>
              );
            })
          }
        </Tab.Navigator>
      );
}

// MARK: - NAVI
const Navi = createStackNavigator();

export function AppNavi() {
  return (
    <Navi.Navigator>
      {
        NaviConfigs.map((naviItem) => {
          return <Navi.Screen key={naviItem.name} name={naviItem.name} component={naviItem.component} options={({ route }) => ( {
            headerTitle: naviItem.title,
            headerShown: naviItem.headerShown,
            headerLeftLabelVisible: false,
            headerBackImage: (() => (<Image source={navi_back_b} style={{ margin: 20, width: 15, height: 15,}}/>)),
          })}/>
       })
      }
    </Navi.Navigator> 
  );
}

