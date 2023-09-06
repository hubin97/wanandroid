import React, { useEffect, useState } from "react";
import { SafeAreaView, View, TouchableOpacity, Text, FlatList, Image } from "react-native";
import { Tabs } from "@ant-design/react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import { chapterReq, chapterListReq } from "../../api/network";
import { styles as commonStyles } from '../../styles';
import { styles } from "../../styles/styles";
import nextImg from "../../images/next.png";
import {Skeleton_Project} from '../../utils/content-loader';

function ChapterPage({ navigation, insets }) {

  const [loading, setLoading] = useState(true);
  const [tabDatas, setTabDatas] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [listData, setListData] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMoreData, setHasMoreData] = useState(true);

  useEffect(() => {
    chapterReq().then((res) => {
      // console.log('res>>>', JSON.stringify(res));
      setTabDatas(res.data);
      setActiveId(res.data[0].id);
    })
  }, [])
  
  useEffect(() => {
    if (!activeId) { return }
    chapterListReq(page, activeId).then((res) => {
      // console.log('res>>>', JSON.stringify(res));
      let curPage = res.data.curPage ?? 0
      let pageCount = res.data.pageCount ?? 0
      if (curPage >= pageCount) {
        setHasMoreData(false)
      }
      let datas = [...listData, ...res.data.datas]
      setListData(datas);
      setLoading(false);
    })
  }, [page, activeId])
  

  const _renderTab = ({ id, name, }) => {
    // console.log('tab.name>>>', name);
    return (
      <Text style={{ marginHorizontal: 10, fontSize: 15, fontWeight: '700', color: activeId === id ? 'blue': '#333'}}>
        {name}
      </Text>
    );
  }

  const _renderItem = ({item}) => {
    // console.log('item>>>', JSON.stringify(item));
    return (
      <TouchableOpacity
        key={item.id}
        activeOpacity={0.7}
        onPress={() => {
          navigation.push('DetailPage', item)
        }}>
        <View style={styles.itemWrapper}>
          <Image style={styles.nextStyle} source={ nextImg }/>
            <View style={styles.bottomStyle}>
                <Text style={styles.titleStyle} numberOfLines={2}>{item.title}</Text>
                <Text style={styles.dateStyle}>{item.niceDate}</Text>
            </View>
        </View>
      </TouchableOpacity>
    );
  };

  const _renderList = () => {
    // console.log('tab>>>', tab, );
    return (
      <FlatList style={[styles.listStyle, { marginBottom: 44 }]} 
      data={listData} renderItem={_renderItem} 
      onEndReachedThreshold={0.5} onEndReached={() => {
        if (hasMoreData) {
            setPage(page+1)
        }
      }}/>
    )
  }

  if (loading) {
    return <Skeleton_Project />;
  }

  return (
      <SafeAreaView style={[commonStyles.containers]}>
        <Tabs style={{flex: 1, backgroundColor: '#eee', height: 44 }} tabBarUnderlineStyle={{ backgroundColor: 'blue'}} tabs={tabDatas} initialPage={0} renderTab={_renderTab} /*renderUnderline={_renderUnderline}*/ onChange={(c) => {
          // console.log('c>>>', JSON.stringify(c));
          setPage(0);
          setActiveId(c.id);
          setListData([])
        }} >  
          {
            tabDatas.map((tab) => {
              return (
                <View key={tab.id} style={{ flex: 1 }}> 
                  { _renderList() }
                </View>   
              )
            })
          } 
        </Tabs>
      </SafeAreaView>
  );
}
  
export default withSafeAreaInsets(ChapterPage);