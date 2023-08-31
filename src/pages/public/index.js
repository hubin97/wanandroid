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
import { wxarticleListReq, wxarticleReq} from '../../api/network';
import {styles as commonStyles} from '../../styles';
import {styles} from './../home/styles';
import nextImg from '../../images/next.png';
import {Skeleton_Project} from '../../utils/content-loader';

function PublicPage({navigation, insets}) {
  const [loading, setLoading] = useState(true);
  const [tabDatas, setTabDatas] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [listData, setListData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    wxarticleReq().then(res => {
      // console.log('res>>>', JSON.stringify(res));
      setTabDatas(res.data);
      setActiveId(res.data[0].id);
      setLoading(false)
    });
  }, []);

  useEffect(() => {
    if (!activeId) {
      return;
    }
    wxarticleListReq(page, activeId).then(res => {
      // console.log('res>>>', JSON.stringify(res));
      setListData(res.data.datas);
      setLoading(false);
    });
  }, [page, activeId]);

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

  const _renderItem = ({item}) => {
    return (
      <TouchableOpacity
        key={item.id}
        activeOpacity={0.7}
        onPress={() => {
          navigation.push('DetailPage', item)
        }}>
        <View style={styles.itemWrapper}>
          <Image style={styles.nextStyle} source={ nextImg }/>
          <View style={styles.contentStyle}>
            <Text style={styles.titleStyle}>
              {item.title}
            </Text>
            <View
              style={styles.bottomStyle}>
              <Text style={styles.authorStyle}>{item.author}</Text>
              <Text style={styles.dateStyle}>{item.niceDate}</Text>
            </View>
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
        onChange={c => {
          setActiveId(c.id);
          setPage(1);
        }}>
        {tabDatas.map(tab => {
          return (
            <View key={tab.id} style={{flex: 1}}>
              {_renderList()}
            </View>
          );
        })}
      </Tabs>
    </SafeAreaView>
  );
}

export default withSafeAreaInsets(PublicPage);
