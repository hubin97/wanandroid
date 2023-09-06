import React, { useEffect, useState } from "react";
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet, Dimensions, Image, FlatList, Alert } from "react-native";
import { styles as commonStyles } from "../../styles";
import nextImg from "../../images/next.png";
import { toolReq } from "../../api/network";
import { Skeleton_List_Simple } from "../../utils/content-loader";

export function ToolsPage({ navigation }) {

    const [loading, setLoading] = useState(true);
    const [listData, setListData] = useState([]);

    useEffect(() => {
        toolReq().then((res) => {
            //console.log('res>>>', JSON.stringify(res));
            setListData(res.data);
            setLoading(false)
        })
    }, [])


    if (loading) {
        return <Skeleton_List_Simple />;
    }

    const _renderItem = ({ item }) => {
        const { name, id } = item;
        return (
            <TouchableOpacity key={id} activeOpacity={0.7} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 44, borderBottomWidth: 0.5, borderBottomColor: '#eee' }} onPress={() => {
                navigation.push('DetailPage', item)
            }}>
                <Text style={{ marginLeft: 15, height: 25, lineHeight: 25 }}>{name}</Text>
                <Image style={{ marginRight: 15, width: 15, height: 15, opacity: 0.2 }} source={nextImg} />
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={[commonStyles.containers,]}>
            <FlatList
                style={{ flex: 1, }}
                data={listData}
                renderItem={_renderItem}
            />
        </SafeAreaView>
    );
}