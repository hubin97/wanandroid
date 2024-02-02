import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
} from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import {styles as commonStyles} from '../../styles';
import {Skeleton_Tree} from '../../utils/content-loader';
import {treeListReq} from '../../api/network';
import {styles} from '../home/styles';
import nextImg from "../../images/next.png";
import Header from '../../utils/header';
import ic_search from "../../images/ic_search.png";

function TreeChildPage({navigation, route, insets}) {
  
  const {id, name, order} = route.params;
  console.log('param>>>', JSON.stringify(route.params));

  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMoreData, setHasMoreData] = useState(true);

  useEffect(() => {
    treeListReq(page, id).then(res => {
    //   console.log('treeListReq>>>', JSON.stringify(res));
      setArticles(res.data.datas);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Skeleton_Tree />;
  }

  const _renderItem = ({item}) => {
    return (
      <TouchableOpacity
        key={item.id}
        activeOpacity={0.7}
        onPress={() => {
          navigation.push('DetailPage', item);
        }}>
        <View style={styles.itemWrapper}>
          <Image style={styles.nextStyle} source={nextImg} />
          <View style={styles.contentStyle}>
            <Text style={styles.titleStyle}>{item.title}</Text>
            <View style={styles.bottomStyle}>
              <Text style={styles.authorStyle}>{item.author}</Text>
              <Text style={styles.dateStyle}>{item.niceDate}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const _renderRightContent = (
    <Image style={{ width: 15, height: 15 }} source={ic_search}/> 
  ) 

  return (
    <SafeAreaView style={[commonStyles.containers, /*{marginBottom: -insets.bottom }*/]}>
      <Header title={name} rightContent={_renderRightContent} leftTapClick={() => {
        navigation.pop()
      }} rightTapClick={() => {
        console.log('rightTapClick----');
      }}/>
      <FlatList
        style={{flex: 1, backgroundColor: '#fff'}}
        data={articles}
        renderItem={_renderItem}
      />
    </SafeAreaView>
  );
}

export default withSafeAreaInsets(TreeChildPage);