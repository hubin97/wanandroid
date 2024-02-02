import React, { useEffect, useState } from 'react';
import {SafeAreaView, View, TouchableOpacity, Text, SectionList} from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import {styles} from '../../styles';
import { Skeleton_Tree } from '../../utils/content-loader';
import { treeReq } from '../../api/network';

function TreePage({ navigation }) {

  const [loading, setLoading] = useState(true);
  const [listDatas, setListDatas] = useState([]);

  useEffect(() => {
    treeReq().then((res) => {
      // console.log('treeReq>>>', JSON.stringify(res.data[0]));
      let datas = res.data.map((item, index) => {
        let tmpDict = {}
        tmpDict.title = item.name;
        tmpDict.data = item.children;
        return tmpDict
      })
      setListDatas(datas)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <Skeleton_Tree />;
  }

  const _renderSectionHeader = ({ section }) => {
    // console.log(JSON.stringify(section));
    const { title, data } = section;
    return (<Text style={{ paddingLeft: 15, height: 40, lineHeight: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f7f7f7'}}>{title}</Text>)
  }

  const _renderItem = ({ item }) => {
    const { name, data } = item;
    return (
      <TouchableOpacity activeOpacity={0.7} style={{ height: 44, justifyContent: 'center', backgroundColor: '#fff', borderBottomColor: '#eee', borderBottomWidth: 1 }} onPress={() => {
        //console.log(JSON.stringify(item));
        navigation.push('TreeChildPage', item);
      }}>
        <Text style={{ marginLeft: 15, height: 25, lineHeight: 25 }}>{name}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={[styles.containers]}>
     <SectionList style={{ flex: 1, backgroundColor: '#fff' }} sections={listDatas} renderSectionHeader={_renderSectionHeader} renderItem={_renderItem}/>
    </SafeAreaView>
  );
}

export default withSafeAreaInsets(TreePage);