import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text, FlatList, Image } from "react-native";
import { styles } from "../../pages/project/styles";
import {Skeleton_ChildList} from '../../utils/content-loader';

import nextImg from "../../images/next.png";

export default function (props) {

    console.log('props>>>', props);
    // 解析入参  tabId; 以及接口
    const { route: { params }, tabId, NetWorkApi, navigation } = props;
    //const isChapterListReq = typeof NetWorkApi == 'function' && NetWorkApi == 'chapterListReq';
    //const { title } = params;
    const isChapterList = params?.title == '教程';
    const initPage = isChapterList ? 0: 1;
    // console.log('isChapterList>', isChapterList);

    const [listData, setListData] = useState([]);
    const [page, setPage] = useState(initPage);
    const [hasMoreData, setHasMoreData] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        NetWorkApi(page, tabId).then((res) => {
            console.log('tabId>>>', tabId, '>>>', page);
            let curPage = res.data.curPage ?? 0
            let pageCount = res.data.pageCount ?? 0
            if (curPage >= pageCount) {
                setHasMoreData(false)
            }
            let datas = [...listData, ...res.data.datas]
            setListData(datas);
            setLoading(false);
        })
    }, [page])

    const _renderItem = ({ item }) => {
        const hasIcon = item.envelopePic !== null && item.envelopePic !== ''
        return (
            <TouchableOpacity
                key={item.id}
                activeOpacity={0.7}
                onPress={() => {
                    navigation.push('DetailPage', item)
                }}>
                <View style={styles.itemWrapper}>
                    <Image style={styles.nextStyle} source={nextImg} />
                    <View style={styles.contentStyle}>
                        <View style={[styles.rightItemStyle, { marginLeft: hasIcon ? 0: 15}]}>
                            <Text style={styles.titleStyle}>
                                {item.title}
                            </Text>
                            <View style={styles.bottomStyle}>
                                <Text style={styles.authorStyle}>{item.author}</Text>
                                <Text style={styles.dateStyle}>{item.niceDate}</Text>
                            </View>
                        </View>
                        {item.envelopePic && <Image style={{ width: 60, minHeight: 80, margin: 10, backgroundColor: '#fff' }} resizeMode='contain' source={{ uri: item.envelopePic ?? '' }} />}
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    if (loading) {
        return <Skeleton_ChildList />;
    }
    
    return (
        <FlatList style={[styles.listStyle, { marginBottom: 44 }]}
            data={listData}
            renderItem={_renderItem}
            initialNumToRender={10}
            onEndReachedThreshold={0.7}
            onEndReached={() => {
                if (hasMoreData) {
                    setPage(page + 1)
                }
            }}
        />
    )
}
