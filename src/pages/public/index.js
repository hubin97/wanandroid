import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
} from 'react-native';
import {Tabs} from '@ant-design/react-native';
import {withSafeAreaInsets} from 'react-native-safe-area-context';
import {projectListReq, projectReq} from '../../api/network';
import {styles as commonStyles} from '../../styles';
import {styles} from './../project/styles';
import nextImg from '../../images/next.png';
import {Skeleton_Project} from '../../utils/content-loader';

function PublicPage({navigation, insets}) {
  const [loading, setLoading] = useState(true);
  const [tabDatas, setTabDatas] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [listData, setListData] = useState([]);
  const [page, setPage] = useState(1);

  // useEffect(() => {
  //   projectReq().then(res => {
  //     //console.log('res>>>', JSON.stringify(res));
  //     setTabDatas(res.data);
  //     setActiveId(res.data[0].id);
  //   });
  // }, []);

  // useEffect(() => {
  //   if (!activeId) {
  //     return;
  //   }
  //   projectListReq(page, activeId).then(res => {
  //     // console.log('res>>>', JSON.stringify(res));
  //     setListData(res.data.datas);
  //     setLoading(false);
  //   });
  // }, [page, activeId]);

  const _renderTab = ({id, name}) => {
    // console.log('tab.name>>>', name);
    return (
      <Text
        style={{
          marginHorizontal: 10,
          fontSize: 15,
          fontWeight: '700',
          color: activeId === id ? 'blue' : '#333',
        }}>
        {name}
      </Text>
    );
  };

  const _renderUnderline = underline => {
    console.log('_renderUnderline>>>', JSON.stringify(underline));
    const {width} = underline;
    return (
      // width ? <View style={{ width: width, backgroundColor: 'blue', }}/>: null
      null
    );
  };

  const _renderItem = ({item}) => {
    console.log('item>>>', JSON.stringify(item));
    return (
      <TouchableOpacity
        key={item.id}
        activeOpacity={0.7}
        onPress={() => {
          //console.log('item>>>', JSON.stringify(item));
          /**
           * {"adminAdd":false,"apkLink":"","audit":1,"author":"郭霖","canEdit":false,"chapterId":409,"chapterName":"郭霖","collect":false,"courseId":13,"desc":"","descMd":"","envelopePic":"","fresh":false,"host":"","id":26580,"isAdminAdd":false,"link":"https://mp.weixin.qq.com/s/Egt6kGqOQHeTvpxC3Q7jMA","niceDate":"2023-05-31 00:00","niceShareDate":"2023-05-31 23:17","origin":"","prefix":"","projectLink":"","publishTime":1685462400000,"realSuperChapterId":407,"selfVisible":0,"shareDate":1685546267000,"shareUser":"","superChapterId":408,"superChapterName":"公众号","tags":[{"name":"公众号","url":"/wxarticle/list/409/1"}],"title":"5分钟带你复刻蚂蚁基金业绩走势图","type":0,"userId":-1,"visible":1,"zan":0}
           */
          navigation.push('DetailPage', item);
        }}>
        <View style={styles.itemWrapper}>
          <Image style={styles.nextStyle} source={nextImg} />
          <View style={styles.contentStyle}>
            <View style={styles.rightItemStyle}>
              <Text style={styles.titleStyle}>{item.title}</Text>
              <View style={styles.bottomStyle}>
                <Text style={styles.authorStyle}>{item.author}</Text>
                <Text style={styles.dateStyle}>{item.niceDate}</Text>
              </View>
            </View>
            <Image
              style={{
                width: 60,
                minHeight: 80,
                margin: 10,
                backgroundColor: '#fff',
              }}
              resizeMode="contain"
              source={{uri: item.envelopePic ?? ''}}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const _renderList = () => {
    // console.log('tab>>>', tab, );
    return (
      <FlatList
        style={[styles.listStyle, {marginBottom: 44}]}
        data={listData}
        renderItem={_renderItem}
      />
    );
  };

  if (loading) {
    return <Skeleton_Project />;
  }

  return (
    <SafeAreaView style={[commonStyles.containers]}>
      <Tabs
        style={{flex: 1, backgroundColor: '#eee', height: 44}}
        tabBarUnderlineStyle={{backgroundColor: 'blue'}}
        tabs={tabDatas}
        initialPage={0}
        renderTab={_renderTab}
        /*renderUnderline={_renderUnderline}*/ onChange={c => {
          //console.log('c>>>', JSON.stringify(c));
          setActiveId(c.id);
          setPage(1);
        }}>
        {/* {tabDatas.map(tab => {
          return (
            <View key={tab.id} style={{flex: 1}}>
              {_renderList()}
            </View>
          );
        })} */}
      </Tabs>
    </SafeAreaView>
  );
}

export default withSafeAreaInsets(PublicPage);
