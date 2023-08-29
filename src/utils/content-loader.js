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
export const Skeleton_List = () => {
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

// MARK: 首页加载
export const Skeleton_Home = () => {
  return (
    <SafeAreaView style={[styles.containers]}>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <ContentLoader
          height={kH}
          width={kW}
          speed={2}
          backgroundColor="#f0f0f0"
          foregroundColor="#999999">
          <Rect x={0} y={0} width={kW} height={200} />
          {[...10].map(idx => (
            <React.Fragment key={idx}>
              <Rect x={15} y={210 + 60 * idx} width={kW - 60} height={30} />
              <Rect x={15} y={255 + 60 * idx} width={60} height={10} />
              <Rect x={kW - 30 - 100 - 15} y={255 + 60 * idx} width={100} height={10} />
              <Rect x={kW - 30} y={225 + 60 * idx} width={15} height={15} />
            </React.Fragment>
          ))}
        </ContentLoader>
      </View>
    </SafeAreaView>
  );
}

// MARK: 项目加载
export const Skeleton_Project = () => {
  return (
    <SafeAreaView style={[styles.containers]}>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <ContentLoader
          height={kH}
          width={kW}
          speed={2}
          backgroundColor="#f0f0f0"
          foregroundColor="#999999">
          {[...7].map(idx => (
            <React.Fragment key={idx}>
              <Rect x={ 15 + ( kW/4 + 15) * idx} y={0} width={kW/4} height={44}/>
            </React.Fragment>
          ))}
          {[...10].map(idx => (
            <React.Fragment key={idx}>
              <Rect x={15} y={55 + 100 * idx} width={60} height={80} />
              <Rect x={80} y={55 + 100 * idx} width={kW - 90} height={30} />
              <Rect x={80} y={100 + 100 * idx} width={kW/2} height={10} />
              <Rect x={80} y={120 + 100 * idx} width={kW/3} height={10} />
              <Rect x={kW - 30} y={120 + 100 * idx} width={15} height={15} />
            </React.Fragment>
          ))}
        </ContentLoader>
      </View>
    </SafeAreaView>
  );
}

// MARK: 体系加载
export const Skeleton_Tree = () => {
  return (
    <SafeAreaView style={[styles.containers]}>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <ContentLoader
          height={kH}
          width={kW}
          speed={2}
          backgroundColor="#f0f0f0"
          foregroundColor="#999999">
         
          {[...20].map(idx => (
            <React.Fragment key={idx}>
              { idx % 5 === 0 ? <Rect x={15} y={15 + 30 * idx} width={kW - 30} height={20} />:
              <Rect x={15} y={15 + 30 * idx} width={(kW - 30)/2} height={20} /> }
            </React.Fragment>
          ))}
        </ContentLoader>
      </View>
    </SafeAreaView>
  );
}