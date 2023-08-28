// rn 路由传参、navigation传参 https://dandelioncloud.cn/article/details/1418936130749394946/

import React, { useState } from 'react';
import {SafeAreaView, View, TouchableOpacity, Text, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';

import {styles} from '../../styles';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const {width: kW, height: kH} = Dimensions.get('window');

function DetailPage({ navigation, route, insets }) {

  const [progress, setProgress] = useState(0);

  const _renderProgressView = (
    progress < 1 && (
      <View style={{ position: 'absolute', zIndex: 1000, width: kW, height: 2, backgroundColor: '#fff'}}>
        <View style={{ width: kW * progress, height: 2, backgroundColor: 'blue' }} />
      </View>
    )
  );

  const { link, url } = route.params;
  return (
    <SafeAreaView style={[styles.containers, { marginBottom: - insets.bottom }]}>
      { _renderProgressView }
      <WebView style={{flex: 1}} source={{uri: link || url }} onLoadProgress={(e) => {
        //console.log('>>>', e.nativeEvent.progress);
        const progress = e.nativeEvent.progress;
        setProgress(progress)
      }} />
    </SafeAreaView>
  );
}


export default withSafeAreaInsets(DetailPage);