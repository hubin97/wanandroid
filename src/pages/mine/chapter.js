import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { Tabs } from "@ant-design/react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import { chapterReq, chapterListReq } from "../../api/network";
import { styles as commonStyles } from '../../styles';
import ChildList from "../../components/ChildList";

function ChapterPage(props) {

  const [tabDatas, setTabDatas] = useState([]);
  const [activeId, setActiveId] = useState(null);
 
  useEffect(() => {
    chapterReq().then((res) => {
      // console.log('res>>>', JSON.stringify(res));
      setTabDatas(res.data);
      setActiveId(res.data[0].id);
    })
  }, [])

  const _renderTab = ({ id, name, }) => {
    // console.log('tab.name>>>', name);
    return (
      <Text style={{ marginHorizontal: 10, fontSize: 15, fontWeight: '700', color: activeId === id ? 'blue' : '#333' }}>
        {name}
      </Text>
    );
  }

  return (
    <SafeAreaView style={[commonStyles.containers]}>
      <Tabs style={{ flex: 1, backgroundColor: '#eee', height: 44 }} tabBarUnderlineStyle={{ backgroundColor: 'blue' }} tabs={tabDatas} initialPage={0} renderTab={_renderTab} /*renderUnderline={_renderUnderline}*/ onChange={(c) => {
        setActiveId(c.id);
      }} >
        {
          tabDatas.map((tab) => {
            return (
              <View key={tab.id} style={{ flex: 1 }}>
                <ChildList {...props} {...{ tabId: tab.id, NetWorkApi: chapterListReq }} />
              </View>
            )
          })
        }
      </Tabs>
    </SafeAreaView>
  );
}

export default withSafeAreaInsets(ChapterPage);