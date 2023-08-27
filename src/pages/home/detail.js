// rn 路由传参、navigation传参 https://dandelioncloud.cn/article/details/1418936130749394946/

import React from 'react';
import {SafeAreaView, View, TouchableOpacity, Text} from 'react-native';
import {WebView} from 'react-native-webview';

import {styles} from '../../styles';

export function DetailPage({navigation, route}) {
  const data = route.params;
  return (
    <SafeAreaView style={[styles.containers]}>
      <WebView style={{flex: 1}} source={{uri: data.link}} />
    </SafeAreaView>
  );
}
