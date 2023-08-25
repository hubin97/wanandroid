import React, { useState, useEffect} from "react";
import { SafeAreaView, View, TouchableOpacity, Text, FlatList, Dimensions, Alert } from "react-native";
// import { PropTypes } from "prop-types";
import { styles } from "../../styles";
// import { fetchEntries } from "../../service";

// import ContentLoader, { Rect, Circle, Facebook } from 'react-content-loader/native'
import { LoaderListView, MyContentLoader } from "../../utils/content-loader";

// const { width: kW, height: kH } = Dimensions.get('window');

// https://reactnavigation.org/docs/status-bar/
export const HomePage = ({ navigation }) => {
    
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetchData('A');
    //     setLoading(true)
    //     setOver(false);
    //     setTimeout(() => {
    //         setOver(true)
    //         setLoading(false)
    //     }, 2000);
    // },[]);

    // const fetchData = async (keyword) => {
    //     fetchEntries(keyword).then((data) => {
    //         if (loading && over) {
    //             setLoading(false)
    //         }
    //         setListData(data);
    //     }).catch((error) => {
    //         console.log(error);
    //     })
    // }

    if (loading) {
        return (
            <LoaderListView/>
        )
    }

    // console.log('listData', listData);
    return (
    //   <SafeAreaView style={[styles.containers]}>
    //     <View style={{ flex: 1, backgroundColor: '#fff', }}>
    //         <FlatList 
    //             keyExtractor={(item, index) => 1000 + index }
    //             style={{ flex: 1, borderColor: '#fff', borderWidth: 1, }} 
    //             data={listData} 
    //             renderItem={_renderItem} 
    //         />
    //     </View>
    //   </SafeAreaView>
        <SafeAreaView style={[styles.containers]}>
            <View style={{ flex: 1, backgroundColor: '#0ff' }}/>
        </SafeAreaView>
    );
}
