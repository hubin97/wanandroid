import React from 'react';
import ContentLoader, { Rect } from 'react-content-loader/native';
import { Dimensions, View, SafeAreaView}  from 'react-native';
import { styles } from "../styles";

const {width: kW, height: kH} = Dimensions.get('window');

Number.prototype[Symbol.iterator] = function* () {
  let i = 0;
  let num = this.valueOf();
  while (i < num) {
    yield i++;
  }
};

// MARK: 
export const LoaderListView = () => {
  return (
    <SafeAreaView style={[styles.containers]}>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <ContentLoader
          height={kH}
          width={kW}
          speed={2}
          backgroundColor="#f0f0f0"
          foregroundColor="#999999">
          {[...10].map(idx => (
            <React.Fragment key={idx}>
              <Rect x={15} y={15 + 130 * idx} rx={4} ry={4} width={110} height={110} />
              <Rect x={140} y={20 + 130 * idx} width={kW - 160} height={20} />
              <Rect x={140} y={55 + 130 * idx} width={60} height={10} />
              <Rect x={140} y={75 + 130 * idx} width={kW / 3} height={20} />
              <Rect x={140} y={110 + 130 * idx} width={60} height={10} />
              <Rect x={kW - 40} y={105 + 130 * idx} rx={10} ry={10} width={20} height={20} />
            </React.Fragment>
          ))}
        </ContentLoader>
      </View>
    </SafeAreaView>
  );
};